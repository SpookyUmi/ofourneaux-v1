import axios from 'axios';
import FormData from 'form-data';

const search = (store) => (next) => (action) => {
  const state = store.getState();

  const form = new FormData();
  form.append('search', state.recipes.search);

  switch (action.type) {
    case 'SEND_SEARCH_REQUEST':
      axios({
        method: 'get',
        url: 'https://ofourneaux.herokuapp.com/recipes',
        data: form,
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
    default:
      next(action);
  }
};

export default search;
