// YARN
import axios from 'axios';
import FormData from 'form-data';
import URL from 'src/middlewares/urlEnv';

// middleware
const recipe = (store) => (next) => (action) => {
  const state = store.getState();

  async function getRecipe(recipeId) {
    try {
      const response = await axios({
        method: 'GET',
        url: `${URL}/recipes/${recipeId}`,
      });

      console.log('Answer request recipe :', response);

      store.dispatch({
        type: 'RECIPE_REQUEST_SUCCESS',
        payload: {
          recipe: response.data.data,
        },
      });
    }
    catch (error) {
      console.log('Error request recipe :', error.response);
    }
  }

  switch (action.type) {
    // when you try to retrieve a recipe, either by clicking
    // on the recipe card or when you try to modify/delete
    // API recipe request : OK
    case 'SEND_RECIPE_REQUEST':
      getRecipe(action.payload.id);
      break;

    // API update favorites recipes : OK
    case 'UPDATE_FAVORITES_REQUEST':
      // attention : the id that is retrieve is of type "string",
      // so it's necessary to "parseInt" it
      // eslint-disable-next-line no-case-declarations
      const recipeId = parseInt(action.payload.id, 10);

      /* Bah alors, on bosse ? :p
      Quelle productivité !! mdr
      Heineken, tequila... xD */

      // mdrrr ouais je m'arrête jamais
      // pas le temps de niaiser Chloé, tmtc
      // mdrrr c'est tout à fait ça !

      // we don't want to work directly on the state, so we make a copy of it with ".map"
      // eslint-disable-next-line no-case-declarations, max-len
      const updatedRecipesFavorites = state.user.favoritesRecipes?.map((favoriteRecipe) => favoriteRecipe);
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
        // we dispatch the action to the reducer "user.js".
        store.dispatch({
          type: 'UPDATE_FAVORITES_SUCCESS',
          payload: {
            favoritesRecipes: updatedRecipesFavorites,
          },
        });
      }

      if (index === -1) {
        // if the recipe isn't in the favorite recipes, we add it with ".push"
        updatedRecipesFavorites.push(recipeId);
        store.dispatch({
          type: 'UPDATE_FAVORITES_SUCCESS',
          payload: {
            favoritesRecipes: updatedRecipesFavorites,
          },
        });
      }

      // eslint-disable-next-line prefer-template, no-case-declarations
      const updatedRecipesFavoritesStringify = '[' + updatedRecipesFavorites.join(', ') + ']';

      // eslint-disable-next-line no-case-declarations
      const form = new FormData();
      form.append('favorites', updatedRecipesFavoritesStringify);

      axios({
        method: 'PATCH',
        url: `${URL}/favorites/${state.user.id}`,
        data: form,
        headers: {
          authorization: state.user.token,
        },
      })
        // eslint-disable-next-line no-unused-vars
        .then((response) => {
          // console.log('Answer request add recipe in favorites :', response);

          store.dispatch({
            type: 'UPDATE_FAVORITES_SUCCESS',
            payload: {
              favoritesRecipes: updatedRecipesFavorites,
            },
          });
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          // console.log('Error request add recipe in favorites :', error.response);
        });
      break;
    default:
      next(action);
  }
};

export default recipe;
