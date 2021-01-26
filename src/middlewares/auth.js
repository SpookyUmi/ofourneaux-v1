import axios from 'axios';
import FormData from 'form-data';

const auth = (store) => (next) => (action) => {
  const state = store.getState();

  const form = new FormData();
  form.append('mail_address', state.auth.email);
  form.append('password', state.auth.password);

  switch (action.type) {
    case 'SEND_LOGIN_REQUEST':
      axios({
        method: 'post',
        url: 'https://ofourneaux.herokuapp.com/users/login',
        data: form,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((response) => {
          console.log('Réponse connexion :', response);
          store.dispatch({
            type: 'LOGIN_SUCCESS',
          });
        })
        .catch((error) => {
          console.log('Erreur connexion :', error);
        });
      break;
    default:
      next(action);
  }
};

export default auth;
