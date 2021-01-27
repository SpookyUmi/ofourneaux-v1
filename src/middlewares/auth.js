import axios from 'axios';
import FormData from 'form-data';

const auth = (store) => (next) => (action) => {
  const state = store.getState();
  console.log(state);

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
          // console.log('Réponse connexion :', response);
          store.dispatch({
            type: 'LOGIN_SUCCESS',
            payload: {
              token: response.data.data.token,
              id: response.data.data.userId,
            },
          });
          action.redirect('/');
        })
        .catch((error) => {
          // console.log('Erreur inscription :', error);
          store.dispatch({
            type: 'LOGIN_FAILED',
            payload: {
              errorMessage: 'Identifiants incorrects',
            },
          });
        });
      break;
    case 'SEND_PROFILE_REQUEST':
      axios({
        method: 'get',
        url: `https://ofourneaux.herokuapp.com/users/${state.user.id}`,
        headers: {
          authorization: state.user.token,
        },
      })
        .then((response) => {
          console.log('Profil utilisateur :', response);
          store.dispatch({
            type: 'PROFILE_SUCCESS',
            payload: {
              firstName: response.data.data.first_name,
              lastName: response.data.data.last_name,
              email: response.data.data.mail_address,
              recipesHistory: response.data.data.recipes_history,
            },
          });
        })
        .catch((error) => {
          console.log('Erreur de la requête :', error);
        });
      break;
    default:
      next(action);
  }
};

export default auth;
