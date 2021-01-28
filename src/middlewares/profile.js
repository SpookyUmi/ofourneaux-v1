import axios from 'axios';

const profile = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case 'SEND_DELETE_PROFILE_REQUEST':
      axios({
        method: 'delete',
        url: `https://ofourneaux.herokuapp.com/users/${state.user.id}`,
      })
        .then((response) => {
          console.log('Réponse requête :', response);
          // TODO: delete the state variables contained in the reducer user.js
          store.dispatch({

          });
        })
        .catch((error) => {
          console.log('Erreur requête :', error);
        });
      break;
    default:
      next(action);
  }
};

export default profile;
