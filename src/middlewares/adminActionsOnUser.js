import axios from 'axios';
import FormData from 'form-data';

const adminActionsOnUser = (store) => (next) => (action) => {
  const state = store.getState();

  const makeAdminForm = new FormData();
  makeAdminForm.append('status', 'admin');

  const makeNonAdminForm = new FormData();
  makeAdminForm.append('status', 'user');

  switch (action.type) {
    case 'GET_USER_BY_ID':
      axios({
        method: 'get',
        url: `https://ofourneaux.herokuapp.com/users/${state.admin.user.userSearchField}`,
        headers: { authorization: state.user.token },
      })
        .then((response) => {
          console.log('Réponse connexion :', response);
          store.dispatch({
            type: 'USER_FOUND',
            payload: {
              user: response.data,
            },
          });
        })
        .catch((error) => {
          console.log('Erreur connexion :', error);
        });
      break;
    case 'MAKE_ADMIN':
      axios({
        method: 'patch',
        url: `https://ofourneaux.herokuapp.com/users/${state.admin.user.id}`,
        data: makeAdminForm,
        headers: { authorization: state.user.token, 'Content-Type': 'multipart/form-data' },
      })
        .then((response) => {
          console.log('Réponse connexion :', response);
          store.dispatch({
            type: 'USER_UPDATE',
            payload: {
              user: response.data,
            },
          });
        })
        .catch((error) => {
          console.log('Erreur connexion :', error);
        });
      break;
    case 'MAKE_NON_ADMIN':
      axios({
        method: 'patch',
        url: `https://ofourneaux.herokuapp.com/users/${state.admin.user.id}`,
        data: makeNonAdminForm,
        headers: { authorization: state.user.token, 'Content-Type': 'multipart/form-data' },
      })
        .then((response) => {
          console.log('Réponse connexion :', response);
          store.dispatch({
            type: 'USER_UPDATE',
            payload: {
              user: response.data,
            },
          });
        })
        .catch((error) => {
          console.log('Erreur connexion :', error);
        });
      break;
    case 'DELETE_USER':
      axios({
        method: 'delete',
        url: `https://ofourneaux.herokuapp.com/users/${state.admin.user.id}`,
        headers: { authorization: state.user.token },
      })
        .then((response) => {
          console.log('Réponse connexion :', response);
          store.dispatch({
            type: 'USER_DELETE',
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

export default adminActionsOnUser;
