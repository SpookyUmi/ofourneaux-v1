import axios from 'axios';
import FormData from 'form-data';

const adminActionsOnTag = (store) => (next) => (action) => {
  const state = store.getState();

  const addTagForm = new FormData();

  switch (action.type) {
    case 'ADD_TAG':
      axios({
        method: 'post',
        url: 'https://ofourneaux.herokuapp.com/tags',
        data: {
          name: addTagForm.append('name', state.admin.tagField),
        },
        headers: { authorization: state.user.token, 'Content-Type': 'multipart/form-data' },
      })
        .then((response) => {
          console.log('Réponse connexion :', response);
          store.dispatch({
            type: 'TAG_ADD',
            payload: {
              tags: response.data,
            },
          });
        })
        .catch((error) => {
          console.log('Erreur connexion :', error);
        });
      break;

    case 'DELETE_TAG':
      axios({
        method: 'delete',
        url: `https://ofourneaux.herokuapp.com/tags/${action.payload.id}`,
        headers: { authorization: state.user.token },
      })
        .then((response) => {
          console.log('Réponse connexion :', response);
          store.dispatch({
            type: 'TAG_DELETE',
            payload: {
              tags: response.data,
            },
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

export default adminActionsOnTag;
