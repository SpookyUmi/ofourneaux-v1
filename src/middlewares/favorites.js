import axios from 'axios';

const favorites = (store) => (next) => (action) => {
  // const state = store.getState();

  const URL = 'https://ofourneaux.herokuapp.com';

  async function fetchRecipe(recipeId) {
    const response = await axios({
      method: 'GET',
      url: `${URL}/recipes/${recipeId}`,
    });
    console.log('RECIPES RESPONSE :', response.data);
    return response.data.data;
  }

  async function getFavoriteRecipes(favoritesRecipesId) {
    let array;
    try {
      array = await Promise.all(favoritesRecipesId.map((id) => fetchRecipe(id)));
    }
    catch (error) {
      console.log('Erreur : ', error);
    }
    return array;
  }

  async function getSelectedRecipes(selectedRecipesId) {
    let array;
    try {
      array = await Promise.all(selectedRecipesId.map((id) => fetchRecipe(id)));
    }
    catch (error) {
      console.log('Erreur : ', error);
    }
    return array;
  }

  async function sendFavoritesRecipes() {
    try {
      const userFavorites = await getFavoriteRecipes(action.payload.favoritesRecipes);
      store.dispatch({
        type: 'COLLECT_FAVORITES_RECIPES',
        payload: {
          userFavoritesRecipes: userFavorites,
        },
      });
    }
    catch (error) {
      console.log(error);
    }
  }
  console.log('ACTION', action.type, action.payload);

  switch (action.type) {
    case 'FAVORITES_RECIPES_SUCCESS':
      sendFavoritesRecipes();
      break;
    case 'SHOPPING_LIST_SUCCESS':
      (async () => {
        const selectedRecipes = await getSelectedRecipes(action.payload.shoppingList);
        store.dispatch({
          type: 'COLLECT_SHOPPING_LIST',
          payload: {
            selectedRecipes,
          },
        });
      })();
      break;
    default:
      next(action);
  }
};

export default favorites;
