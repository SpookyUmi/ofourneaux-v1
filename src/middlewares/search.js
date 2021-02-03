import axios from 'axios';
import FormData from 'form-data';

const search = (store) => (next) => (action) => {
  const state = store.getState();
  const search = state.recipes.search.replace(/ /g, "&");

  const number = state.recipes.number;
  const user = state.user.id
  const generator = new FormData();
  generator.append('number', state.recipes.number);
  generator.append('time', state.recipes.time);
  generator.append('difficulty', state.recipes.difficulty);
  generator.append('favorites', state.user.favoritesRecipes);
  generator.append('eatingPreferences', state.user.eatingPreferences);
  generator.append('recipesHistory', state.user.recipesHistory);

  switch (action.type) {
    case 'SEND_SEARCH_REQUEST':
      axios({
        method: 'get',
        url: `https://ofourneaux.herokuapp.com/recipes/keyword?${search}`,
      })
        .then((response) => {
          console.log('RECIPE RESPONSE :', response.data.data);
          store.dispatch({
            type: 'RECIPES_RESULTS',
            payload: {
              recipes: response.data.data,
            }
          });
          action.redirect('/recettes');
        })
        .catch((error) => {
          console.log('Erreur connexion :', error);
          action.redirect('/try-again');
        });
        break;
    case 'SEND_GEN_REQUEST':
      axios({
        method: 'get',
        url: `https://ofourneaux.herokuapp.com/recipes/quantity/${number}`,
      })
        .then((response) => {
          console.log('Réponse recettes :', response.data.data);
          store.dispatch({
            type: 'RECIPES_RESULTS',
            payload: {
              recipes: response.data.data,
            }
          });
          action.redirect('/recettes');
        })
        .catch((error) => {
          console.log('Erreur connexion :', error);
        });
        break;
    case 'SEND_GEN_LOGGED_REQUEST':
      axios({
        method: 'get',
        url: `https://ofourneaux.herokuapp.com/recipes/quantity/${number}/user/${user}`,
        headers: { authorization: state.user.token }
      })
        .then((response) => {
          console.log('Réponse recettes :', response.data.data);
          store.dispatch({
            type: 'RECIPES_RESULTS',
            payload: {
              recipes: response.data.data,
            }
          });
          action.redirect('/recettes');
        })
        .catch((error) => {
          console.log('Erreur connexion :', error);
        });
    default:
      next(action);
  }
};

export default search;
