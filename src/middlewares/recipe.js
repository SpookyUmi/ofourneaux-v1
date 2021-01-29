import axios from 'axios';

const recipe = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    // when you try to retrieve a recipe, either by clicking
    // on the recipe card or when you try to modify/delete
    case 'SEND_RECIPE_REQUEST':
      axios({
        method: 'get',
        url: `https://ofourneaux.herokuapp.com/recipes/${action.payload.id}`,
      })
        .then((response) => {
          // console.log('Réponse requête :', response);
          store.dispatch({
            type:'RECIPE_REQUEST_SUCCESS',
            payload: {
              recipe: response.data.data,
            }
          })
        })
        .catch((error) => {
          console.log('Erreur requête :', error.response);
        })
      break;
    // to be potentially deleted if sending data on the administration form side works
    // case 'SEND_EDIT_DELETE_RECIPE_REQUEST':
    //   axios({
    //     method: 'get',
    //     url: `https://ofourneaux.herokuapp.com/recipes/${state.recipe.id}`,
    //   })
    //     .then((response) => {
    //       console.log('Réponse requête :', response);
    //       store.dispatch({
    //         type: 'EDIT_DELETE_RECIPE_SUCCESS',
    //         payload: {
    //           // TODO: check that the data reception in the reducer is good
    //           // recipe: response.data.data.recipe,
    //         },
    //       });
    //     })
    //     .catch((error) => {
    //       console.log('Erreur requête :', error);
    //     });
    //   break;
    default:
      next(action);
  }
};

export default recipe;
