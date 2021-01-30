// YARN
import axios from 'axios';
import FormData from 'form-data';

// middleware "auth"
const auth = (store) => (next) => (action) => {
  const state = store.getState();

  // the data must be sent to the back in "form-data" format
  const form = new FormData();
  form.append('mail_address', state.auth.email);
  form.append('password', state.auth.password);

  switch (action.type) {
    // API connection request : OK
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
        // console.log('Réponse requête connexion :', response);
          store.dispatch({
            type: 'LOGIN_SUCCESS',
            payload: {
              // we dispatch the token and the id, recovered in the reducer "user.js"
              token: response.data.data.token,
              id: response.data.data.userId,
            },
          });
          // after logging in, the action is redirect to the home page
          action.redirect('/');
        })
        .catch((error) => {
          // console.log('Erreur requête inscription :', error);
          store.dispatch({
            type: 'LOGIN_FAILED',
            payload: {
              // if there is an error in the request (wrong identifies),
              // an error message is sent to the reducer "auth.js"
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
          console.log('Réponse requête :', response);
          store.dispatch({
            type: 'PROFILE_SUCCESS',
            payload: {
              id: response.data.data.id,
              firstName: response.data.data.first_name,
              lastName: response.data.data.last_name,
              email: response.data.data.mail_address,
              status: response.data.data.status,
              recipesHistory: response.data.data.recipes_history,
            },
          });
        })
        .catch((error) => {
          // TODO: what to do when the profile access request fails?
          console.log('Erreur profil :', error);
        });
      break;
    default:
      next(action);
  }
};

export default auth;
