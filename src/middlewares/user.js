import axios from 'axios';
// import FormData from 'form-data';
import URL from 'src/middlewares/urlEnv';

const user = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    // ! request for when the user whishes to access the page of his favourite recipes : 404
    case 'SEND_FAVORITES_RECIPES_REQUEST':
      axios({
        method: 'GET',
        url: `${URL}/favorites/${state.user.id}`,
        headers: {
          authorization: state.user.token,
        },
      })
        .then((response) => {
          console.log('FAVORITE RECIPES :', response);
          store.dispatch({
            type: 'FAVORITES_RECIPES_SUCCESS',
            payload: {
              favoritesRecipes: response.data.data,
            },
          });
        })
        .catch((error) => {
          console.log('Erreur requête :', error.response);
          // ! do we send anything in particular if the request fails ?
        });
      break;

    // ! request for when the user whishes to access the page of his shopping list : 404
    case 'SEND_SHOPPING_LIST_REQUEST':
      axios({
        method: 'GET',
        url: `${URL}/shopping_list/${state.user.id}`,
        headers: {
          authorization: state.user.token,
        },
      })
        .then((response) => {
          console.log('Réponse requête :', response);
          store.dispatch({
            type: 'SHOPPING_LIST_SUCCESS',
            payload: {
              selectedRecipes: response.data.data,
            },
          });
        })
        .catch((error) => {
          console.log('Erreur requête :', error.response);
          // ! do we send anything in particular if the request fails ?
        });
      break;
    case 'SEND_INGREDIENTS_LIST_REQUEST':
      axios({
        method: 'get',
        url: `${URL}/shopping_list/${state.user.id}/generate`,
        header: {
          // ! the token is necessary ?
          authorization: state.user.token,
        },
      })
        .then((response) => {
          console.log('Réponse requête :', response);
          store.dispatch({
            type: 'INGREDIENTS_LIST_SUCCESS',
            payload: {
              ingredientsList: response.data.data,
            },
          });
        })
        .catch((error) => {
          console.log('Erreur requête :', error.response);
          // ! do we send anything in particular if the request fails ?
        });
      break;

    default:
      next(action);
  }
};

export default user;
