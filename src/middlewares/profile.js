import axios from 'axios';
import FormData from 'form-data';
import URL from 'src/middlewares/urlEnv';

const profile = (store) => (next) => (action) => {
  const state = store.getState();
  // console.log(state);

  // the data must be sent to the back in "form-data" format
  const formProfile = new FormData();
  formProfile.append('last_name', state.user.lastName);
  formProfile.append('first_name', state.user.firstName);
  formProfile.append('mail_address', state.user.email);
  formProfile.append('picture_url', state.user.pictureUrl);

  const formEatingPreferences = new FormData();

  async function updateEatingPreferencesUser(userId, userToken) {
    // eslint-disable-next-line max-len
    const updatedEatingPreferences = state.user.eatingPreferences.map((eatingPreference) => eatingPreference);

    // console.log('Préférence alimentaire dans le middleware :', updatedEatingPreferences);

    // eslint-disable-next-line prefer-template
    const updatedEatingPreferencesStringify = '[' + updatedEatingPreferences.join(', ') + ']';

    // console.log('Tableau stringifié :', updatedEatingPreferencesStringify);

    formEatingPreferences.append('tags', updatedEatingPreferencesStringify);

    try {
      const response = await axios({
        method: 'PATCH',
        url: `${URL}/tags/user/${userId}`,
        data: formEatingPreferences,
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: userToken,
        },
      });

      // console.log('Answer request update eating preferences :', response);

      store.dispatch({
        type: 'EDIT_EATING_PREFERENCES_SUCCESS',
        payload: {
          eatingPreferences: state.user.eatingPreferences,
        },
      });
    }
    catch (error) {
      // console.log('Error request update eating preferences :', error.response);
    }
  }

  async function updateUserProfile() {
    try {
      const response = await axios({
        method: 'PATCH',
        url: `${URL}/users/${state.user.id}`,
        data: formProfile,
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: state.user.token,
        },
      });

      // console.log('Answer request update profile :', response);

      updateEatingPreferencesUser(state.user.id, state.user.token);

      store.dispatch({
        type: 'EDIT_PROFILE_SUCCESS',
        payload: {
          firstName: state.user.firstName,
          lastName: state.user.lastName,
          email: state.user.email,
          pictureUrl: state.user.pictureUrl,
        },
      });
    }
    catch (error) {
      // console.log('Error request update profile :', error.response);

      if (error.response.data.error === 'Mail address already in use') {
        store.dispatch({
          type: 'EDIT_PROFILE_FAILED',
          payload: {
            message: 'L\'adresse mail est déjà utilisée',
          },
        });
      }
    }
  }

  switch (action.type) {
    // ! request for edition of the profile by the user : TO BE CHECKED
    case 'SEND_EDIT_PROFILE_REQUEST':
      updateUserProfile();
      break;

    // request for deletion of the profile by the user : OK
    case 'SEND_DELETE_PROFILE_REQUEST':
      axios({
        method: 'delete',
        url: `${URL}/users/${state.user.id}`,
        headers: {
          authorization: state.user.token,
        },
      })
        // eslint-disable-next-line no-unused-vars
        .then((response) => {
          // console.log('Answer request deletion :', response);
          store.dispatch({
            // we dispatch to send to the reducers "auth.js" and "user.js"
            // the order to empty the variables they contain
            type: 'DELETE_PROFILE_SUCCESS',
          });
          // after deleting his account, the user is redirect to the home page
          action.redirect('/');
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          // console.log('Error request deletion :', error);
          // ! do we send anything in particular if the request fails ?
          // ! in what cases can it fail ?
        });
      break;

    default:
      next(action);
  }
};

export default profile;
