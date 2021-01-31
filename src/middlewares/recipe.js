// YARN
import axios from 'axios';
import FormData from 'form-data';

// middleware
const recipe = (store) => (next) => (action) => {
  const state = store.getState();

  const form = new FormData();
  form.append('favorites_recipes', state.user.favoritesRecipes);
  // console.log(form);

  switch (action.type) {
    // when you try to retrieve a recipe, either by clicking
    // on the recipe card or when you try to modify/delete
    // API recipe request : OK
    case 'SEND_RECIPE_REQUEST':
      axios({
        method: 'get',
        url: `https://ofourneaux.herokuapp.com/recipes/${action.payload.id}`,
      })
        .then((response) => {
          // console.log('Answer request recipe :', response);
          store.dispatch({
            type: 'RECIPE_REQUEST_SUCCESS',
            payload: {
              recipe: response.data.data,
            },
          });
        })
        .catch((error) => {
          console.log('Error request recipe :', error.response);
        });
      break;

    // ! API update favorites recipes : TO BE CHECKED
    case 'UPDATE_FAVORITES_REQUEST':
      // attention : the id that is retrieve is of type "string",
      // so it's necessary to "parseInt" it
      // eslint-disable-next-line no-case-declarations
      const recipeId = parseInt(action.payload.id, 10);

      // we don't want to work directly on the state, so we make a copy of it with ".map"
      // eslint-disable-next-line no-case-declarations, max-len
      const updatedRecipesFavorites = state.user.favoritesRecipes.map((favoriteRecipe) => favoriteRecipe);
      // console.log('State "favoritesRecipes" copy :', updatedRecipesFavorites);

      // to remove an element from an array, the simplest method
      // is to target it by its index and use ".splice"
      // so we use "indexOf" to find the index of our id in the favorite recipes
      // eslint-disable-next-line no-case-declarations
      const index = updatedRecipesFavorites.indexOf(recipeId);
      // console.log('The recipe is in the index :', index);

      // if the recipe is in the favorite recipes, we remove it with ".splice"
      // when an "indexOf" returns "-1", it means the element is not in the array
      if (index > -1) {
        updatedRecipesFavorites.splice(index, 1);
        // console.log(updatedRecipesFavorites);
        // we dispatch the action to the reducer "user.js".
        store.dispatch({
          type: 'UPDATE_FAVORITES_SUCCESS',
          payload: {
            favoritesRecipes: updatedRecipesFavorites,
          },
        });
      }
      else {
        // if the recipe isn't in the favorite recipes, we add it with ".push"
        updatedRecipesFavorites.push(recipeId);
        store.dispatch({
          type: 'UPDATE_FAVORITES_SUCCESS',
          payload: {
            favoritesRecipes: updatedRecipesFavorites,
          },
        });
      }

      // axios({
      //   method: 'patch',
      //   url: `https://ofourneaux.herokuapp.com/favorites/${state.user.id}`,
      //   headers: {
      //     authorization: state.user.token,
      //   },
      // })
      //   .then((response) => {
      //     console.log('Answer request add recipe in favorites :', response);
      //     store.dispatch({
      //       type: 'UPDATE_FAVORTES_REQUEST',
      //       payload: {
      //         favoritesRecipes: updatedRecipesFavorites,
      //       },
      //     });
      //   })
      //   .catch((error) => {
      //     console.log('Error request add recipe in favorites :', error.response);
      //   });
      break;
    default:
      next(action);
  }
};

export default recipe;
