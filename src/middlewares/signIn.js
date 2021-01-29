import axios from 'axios';
import FormData from 'form-data';

const signIn = (store) => (next) => (action) => {
  const state = store.getState();

  const form = new FormData();
  form.append('last_name', state.signIn.lastName);
  form.append('first_name', state.signIn.firstName);
  form.append('mail_address', state.signIn.email);
  form.append('password', state.signIn.password);

  switch (action.type) {
    case 'SEND_SUBSCRIPTION_REQUEST':
      // console.log('SUBMIT!!!');

      axios({
        method: 'post',
        url: 'https://ofourneaux.herokuapp.com/users',
        data: form,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((response) => {
          // console.log('Réponse inscription :', response);
          store.dispatch({
            type: 'SUBSCRIPTION_SUCCESS',
          });
        })
        .catch((error) => {
          // console.log('Erreur inscription :', error);
          console.log('Type d\'erreur :', error.response);
          store.dispatch({
            type: 'SUBSCRIPTION_FAILED',
            payload: {
              errorMessage: error.response.data.error,
            },
          });
        });
      break;
    default:
      next(action);
  }
};

export default signIn;
