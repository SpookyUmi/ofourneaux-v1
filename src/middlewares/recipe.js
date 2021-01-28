import axios from 'axios';

const auth = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case 'SEND_EDIT_DELETE_RECIPE_REQUEST':
      axios({
        method: 'get',
        url: `https://ofourneaux.herokuapp.com/recipes/${state.recipe.id}`,
      })
        .then((response) => {
          console.log('Réponse requête :', response);
          store.dispatch({
            type: 'EDIT_DELETE_RECIPE_SUCCESS',
            payload: {
              // TODO: check that the data reception in the reducer is good
              // recipe: response.data.data.recipe,
            },
          });
        })
        .catch((error) => {
          console.log('Erreur requête :', error);
        });
      break;
    default:
      next(action);
  }
};

export default auth;
