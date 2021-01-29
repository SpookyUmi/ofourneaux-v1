import axios from 'axios';
import FormData from 'form-data';

const adminActionsOnRecipe = (store) => (next) => (action) => {
  const state = store.getState();

  const updateRecipeForm = new FormData();
  const addRecipeForm = new FormData();

  switch (action.type) {
    case 'ADD_RECIPE':
      axios({
        method: 'post',
        url: 'https://ofourneaux.herokuapp.com/recipes',
        data: {
          title: addRecipeForm.append('title', action.payload.title),
          picture: addRecipeForm.append('picture', action.payload.title),
          type: addRecipeForm.append('type', action.payload.type),
          description: addRecipeForm.append('description', action.payload.description),
          seasons: addRecipeForm.append('seasons', action.payload.seasons),
          tags: addRecipeForm.append('tags', action.payload.recipeTags),
          difficulty: addRecipeForm.append('difficulty', action.payload.difficulty),
          nutri_score: addRecipeForm.append('nutri_score', action.payload.nutriScore),
          preparation_time: addRecipeForm.append('preparation_time', action.payload.preparationTime),
          baking_time: addRecipeForm.append('baking_time', action.payload.bakingTime),
          ingredients: addRecipeForm.append('ingredients', action.payload.recipeIngredients),
          instructions: addRecipeForm.append('instructions', action.payload.instructions),
        },
        headers: { authorization: state.user.token, 'Content-Type': 'multipart/form-data' },
      })
        .then((response) => {
          console.log('Réponse connexion :', response);
          store.dispatch({
            type: 'RECIPE_ADD',
            payload: {
              recipe: response.data,
            },
          });
        })
        .catch((error) => {
          console.log('Erreur connexion :', error);
        });
      break;

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
