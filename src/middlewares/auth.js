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
        console.log('Réponse inscription :', response);
          store.dispatch({
            type: 'LOGIN_SUCCESS',
            payload: {
              token: response.data.data.token,
              id: response.data.data.userId,
              firstName: response.data.data.firstName,
              lastName: response.data.data.lastName,
              email: response.data.data.email,
              status: response.data.data.status,
              recipesHistory: response.data.data.recipesHistory,
              favoriteRecipes: response.data.data.favoriteRecipes,
              shoppingList: response.data.data.shoppingList,
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
