import axios from 'axios';

const user = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case 'SEND_FAVORITES_RECIPES_REQUEST':
      axios({
        method: 'get',
        url: `https://ofourneaux.herokuapp.com/favorites/${state.user.id}`,
      })
        .then((response) => {
          // console.log('Réponse requête :', response);
          store.dispatch({
            type: 'FAVORITES_RECIPES_SUCCESS',
            payload: {
              favoriteRecipes: response.data.data.favorite_recipes,
            },
          });
        })
        .catch((error) => {
          // console.log('Erreur requête :', error);
        });
      break;
    case 'SEND_SHOPPING_LIST_REQUEST':
      axios({
        method: 'get',
        url: `https://ofourneaux.herokuapp.com/shopping_list/${state.user.id}`,
      })
        .then((response) => {
          // console.log('Réponse requête :', response);
          store.dispatch({
            type: 'SHOPPING_LIST_SUCCESS',
            payload: {
              shoppingList: response.data.data.shopping_list,
            },
          });
        })
        .catch((error) => {
          // console.log('Erreur requête :', error);
        });
      break;
    case 'SEND_EDIT_PROFILE_REQUEST':
      axios({
        method: 'patch',
        url: `https://ofourneaux.herokuapp.com/users/${state.user.id}`,
      })
        .then((response) => {
          // console.log('Réponse requête :', response);
          store.dispatch({
            type: 'EDIT_PROFILE_SUCCESS',
          });
        })
        .catch((error) => {
          // console.log('Erreur requête :', error);
        });
      break;
    default:
      next(action);
  }
};

export default user;
