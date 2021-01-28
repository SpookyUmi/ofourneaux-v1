import axios from 'axios';
import FormData from 'form-data';

const adminActionsOnRecipe = (store) => (next) => (action) => {
  const state = store.getState();

  const updateRecipeForm = new FormData();

  // const makeNonAdminForm = new FormData();
  // makeAdminForm.append('status', 'user');

  switch (action.type) {
    case 'UPDATE_RECIPE':
      axios({
        method: 'patch',
        url: `https://ofourneaux.herokuapp.com/recipes/${state.admin.recipe.id}`,
        data: {
          title: updateRecipeForm.append('title', action.payload.title),
          picture: updateRecipeForm.append('picture', action.payload.title),
          type: updateRecipeForm.append('type', action.payload.type),
          description: updateRecipeForm.append('description', action.payload.description),
          seasons: updateRecipeForm.append('seasons', action.payload.seasons),
          tags: updateRecipeForm.append('tags', action.payload.recipeTags),
          difficulty: updateRecipeForm.append('difficulty', action.payload.difficulty),
          nutri_score: updateRecipeForm.append('nutri_score', action.payload.nutriScore),
          preparation_time: updateRecipeForm.append('preparation_time', action.payload.preparationTime),
          baking_time: updateRecipeForm.append('baking_time', action.payload.bakingTime),
          ingredients: updateRecipeForm.append('ingredients', action.payload.recipeIngredients),
          instructions: updateRecipeForm.append('instructions', action.payload.instructions),
        },
        headers: { authorization: state.user.token, 'Content-Type': 'multipart/form-data' },
      })
        .then((response) => {
          console.log('Réponse connexion :', response);
          store.dispatch({
            type: 'RECIPE_UPDATE',
            payload: {
              recipe: response.data,
            },
          });
        })
        .catch((error) => {
          console.log('Erreur connexion :', error);
        });
      break;

    case 'DELETE_RECIPE':
      axios({
        method: 'delete',
        url: `https://ofourneaux.herokuapp.com/recipes/${state.admin.recipe.id}`,
        headers: { authorization: state.user.token },
      })
        .then((response) => {
          console.log('Réponse connexion :', response);
          store.dispatch({
            type: 'RECIPE_DELETE',
          });
        })
        .catch((error) => {
          console.log('Erreur connexion :', error);
        });
      break;
    default:
      next(action);
  }
};

export default adminActionsOnRecipe;
