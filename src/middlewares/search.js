import axios from 'axios';
import FormData from 'form-data';

const search = (store) => (next) => (action) => {
  const state = store.getState();

  const search = new FormData();
  search.append('search', state.recipes.search);

  const generator = new FormData();
  generator.append('number', state.recipes.number);
  generator.append('time', state.recipes.time);
  generator.append('difficulty', state.recipes.difficulty);

  switch (action.type) {
    case 'SEND_SEARCH_REQUEST':
      axios({
        method: 'get',
        url: 'https://ofourneaux.herokuapp.com/recipes',
        data: search,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
        .then((response) => {
          console.log('Réponse recettes :', response.data);
          store.dispatch({
            type: 'RECIPES_RESULTS',
            payload: {
              recipes: response.data,
            }
          });
          action.redirect('/recettes');
        })
        .catch((error) => {
          console.log('Erreur connexion :', error);
        });
    case 'SEND_GEN_REQUEST':
      axios({
        method: 'get',
        url: 'https://ofourneaux.herokuapp.com/recipes',
        data: generator,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
        .then((response) => {
          if (response.status !== 200) return;
          console.log('Réponse recettes :', response.data);
          store.dispatch({
            type: 'RECIPES_RESULTS',
            payload: {
              recipes: response.data,
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
