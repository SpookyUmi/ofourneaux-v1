import axios from 'axios';

const favorites = (store) => (next) => (action) => {
  const state = store.getState();

  const URL = 'https://ofourneaux.herokuapp.com';

  async function fetchRecipe(recipeId) {
    const response = await axios({
      method: 'GET',
      url: `${URL}/recipes/${recipeId}`,
    });
    console.log('RECIPES RESPONSE :', response.data);
    return response.data.data;
  }

  async function getArrayFavoriteRecipes(favoritesRecipesId) {
    let array;
    try {
      array = await Promise.all(favoritesRecipesId.map((id) => fetchRecipe(id)));
    }
    catch (error) {
      console.log('Erreur : ', error);
    }
    return array;
  }

  async function getArraySelectedRecipes(selectedRecipesId) {
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
      const userFavorites = await getArrayFavoriteRecipes(state.user.favoritesRecipes);
      store.dispatch({
        type: 'FAVORITES_RECIPES_COLLECTED',
        payload: {
          collectedFavoritesRecipes: userFavorites,
        },
      });
    }
    catch (error) {
      console.log(error);
    }
  }

  async function sendSelectedRecipes() {
    try {
      const userSelected = await getArraySelectedRecipes(state.user.shoppingList);
      store.dispatch({
        type: 'SELECTED_RECIPES_COLLECTED',
        payload: {
          selectedRecipes: userSelected,
        },
      });
    }
    catch (error) {
      console.log(error);
    }
  }
  console.log('ACTION', action.type, action.payload);

  switch (action.type) {
    case 'COLLECT_FAVORITES_RECIPES':
      sendFavoritesRecipes();
      break;
    case 'COLLECT_SELECTED_RECIPES':
      sendSelectedRecipes();
      break;
    default:
      next(action);
  }
};

export default favorites;
