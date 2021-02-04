import axios from 'axios';
import FormData from 'form-data';

const favorites = (store) => (next) => (action) => {
  const state = store.getState();

  const URL = 'https://ofourneaux.herokuapp.com';

  const fetchRecipe = async (recipeId) => {
    const response = await axios.get(`${URL}/recipes/${recipeId}`);
    console.log('RECIPES RESPONSE :', response.data);
    return response.data.data;
  }

  const getFavoriteRecipes = async (favoritesRecipesId) => {
    try {
      return Promise.all(favoritesRecipesId.map(id => fetchRecipe(id)));
    } catch (error) {
      console.log('Erreur : ', error);
    }
  }

  const getSelectedRecipes = async (selectedRecipesId) => {
    try {
      return Promise.all(selectedRecipesId.map(id => fetchRecipe(id)));
    } catch (error) {
      console.log('Erreur : ', error);
    }
  }

  switch (action.type) {
    case 'FAVORITES_RECIPES_SUCCESS':
      ;(async () => {
        const favoritesRecipes = await getFavoriteRecipes(action.payload.favoritesRecipes);
        store.dispatch({
          type: 'COLLECT_FAVORITES_RECIPES',
          payload: {
            userFavoritesRecipes: favoritesRecipes,
          },
        });
      })()
      break;
    case 'SHOPPING_LIST_SUCCESS':
      ;(async () => {
        const selectedRecipes = await getSelectedRecipes(action.payload.shoppingList);
        store.dispatch({
          type: 'COLLECT_SHOPPING_LIST',
          payload: {
            selectedRecipes: selectedRecipes,
          },
        });
      })()
    default:
      next(action);
  }
};

export default favorites;
