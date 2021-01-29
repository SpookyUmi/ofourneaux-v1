import axios from 'axios';
import FormData from 'form-data';

const profile = (store) => (next) => (action) => {
  const state = store.getState();

  const form = new FormData();
  form.append('last_name', state.user.lastName);
  form.append('first_name', state.user.firstName);
  form.append('mail_address', state.user.email);

  switch (action.type) {
    // request for deletion of the profile by the user : OK
    case 'SEND_DELETE_PROFILE_REQUEST':
      axios({
        method: 'delete',
        url: `https://ofourneaux.herokuapp.com/users/${state.user.id}`,
        headers: {
          authorization: state.user.token,
        },
      })
        .then((response) => {
          // console.log('Réponse requête :', response);
          store.dispatch({
            // we dispatch to send to the reducers "auth" and "user"
            // the order to empty the variables they contain
            type: 'DELETE_PROFILE_SUCCESS',
          });
          // after deleting his account, the user is redirect to the home page
          action.redirect('/');
        })
        .catch((error) => {
          // console.log('Erreur requête :', error);
          // ! do we send anything in particular if the request fails ?
          // ! in principle, this should not be the case
        });
      break;

    // ! request for edition of the profile by the user : TO BE CHECKED
    case 'SEND_EDIT_PROFILE_REQUEST':
      axios({
        method: 'patch',
        url: `https://ofourneaux.herokuapp.com/users/${state.user.id}`,
        data: form,
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: state.user.token,
        },
      })
        .then((response) => {
          // console.log('Réponse requête :', response);
          store.dispatch({
            type: 'EDIT_PROFILE_SUCCESS',
            // does sending the data in this way update the reducer in the right way ?
            payload: {
              firstName: state.user.firstName,
              lastName: state.user.lastName,
              email: state.user.email,
            },
          });
        })
        .catch((error) => {
          // console.log('Erreur requête :', error.response);
          // ! do we send anything in particular if the request fails ?
          // ! what cases of error are possible ?
        });
      break;
    default:
      next(action);
  }
};

export default profile;
