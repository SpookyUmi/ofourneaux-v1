import axios from 'axios';
import URL from 'src/middlewares/urlEnv';

const search = (store) => (next) => (action) => {
  const state = store.getState();
  const searchValue = state.recipes.search.replace(/ /g, '&');

  const { number } = state.recipes;
  const { time } = state.recipes;
  const { difficulty } = state.recipes;
  const { favorites } = state.recipes;
  const userId = state.user.id;

  switch (action.type) {
    case 'SEND_SEARCH_REQUEST':
      axios({
        method: 'get',
        url: `${URL}/recipes/keyword?${searchValue}`,
      })
        .then((response) => {
          console.log('RECIPE RESPONSE :', response.data.data);
          store.dispatch({
            type: 'RECIPES_RESULTS',
            payload: {
              recipes: response.data.data,
              search: '',
            },
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
        url: `${URL}/recipes/quantity/${number}?time=${time}&difficulty=${difficulty}`,
      })
        .then((response) => {
          console.log('Réponse recettes :', response.data.data);
          store.dispatch({
            type: 'RECIPES_RESULTS',
            payload: {
              recipes: response.data.data,
            },
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
        url: `${URL}/recipes/quantity/${number}/user/${userId}?time=${time}&difficulty=${difficulty}&favorites=${favorites}`,
        headers: { authorization: state.user.token },
      })
        .then((response) => {
          console.log('Réponse recettes :', response.data.data);
          store.dispatch({
            type: 'RECIPES_RESULTS',
            payload: {
              recipes: response.data.data,
            },
          });
          action.redirect('/recettes');
        })
        .catch((error) => {
          console.log('Erreur connexion :', error);
        });
      break;
    default:
      next(action);
  }
};

export default search;
