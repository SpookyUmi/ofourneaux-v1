// YARN
import axios from 'axios';
import FormData from 'form-data';
import URL from 'src/middlewares/urlEnv';

// middleware "signUp"
const signUp = (store) => (next) => (action) => {
  const state = store.getState();

  // the data must be sent to the back in "form-data" format
  const form = new FormData();
  form.append('last_name', state.signUp.lastName);
  form.append('first_name', state.signUp.firstName);
  form.append('mail_address', state.signUp.email);
  form.append('password', state.signUp.password);

  switch (action.type) {
    // API registration request : OK
    case 'SEND_SUBSCRIPTION_REQUEST':
      axios({
        method: 'post',
        url: `${URL}/users`,
        data: form,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        // eslint-disable-next-line no-unused-vars
        .then((response) => {
          // console.log('Answer request registration :', response);
          store.dispatch({
            type: 'SUBSCRIPTION_SUCCESS',
          });
          action.redirect('/');
        })
        .catch((error) => {
          // console.log('Error request registration :', error);
          // console.log('Error type :', error.response);
          // we dispatch the error message to the reducer "signUp.js"
          // if the email address is already in use
          if (error.response.data.error === 'Mail address already in use') {
            store.dispatch({
              type: 'SUBSCRIPTION_FAILED',
              payload: {
                errorMessage: 'L\'adresse mail est déjà utilisée',
              },
            });
          }
          // if the email address is not in the right format or the password is too weak
          else {
            store.dispatch({
              type: 'SUBSCRIPTION_FAILED',
              payload: {
                errorMessage: 'Vérifiez les informations que vous avez saisi',
              },
            });
          }
        });
      break;

    default:
      next(action);
  }
};

export default signUp;
