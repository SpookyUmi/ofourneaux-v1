import axios from 'axios';
import FormData from 'form-data';
import URL from 'src/middlewares/urlEnv';

const adminActionsOnTag = (store) => (next) => (action) => {
  const state = store.getState();

  const addTagForm = new FormData();

  async function getTags() {
    try {
      const response = await axios({
        method: 'GET',
        url: `${URL}/tags`,
        headers: {
          authorization: state.user.token,
        },
      });
      console.log('response', response);
      store.dispatch({
        type: 'UPDATE_TAGS',
        payload: {
          tags: response.data.data.tags,
        },
      });
    }
    catch (error) {
      console.log('Error update tags :', error.response);
    }
  }

  // asynchronous function to retrieve the id and the token
  async function addTag(name) {
    try {
      addTagForm.append('name', name);
      await axios({
        method: 'post',
        url: `${URL}/tags`,
        data: addTagForm,
        headers: { authorization: state.user.token, 'Content-Type': 'multipart/form-data' },
      });

      getTags();
    }
    catch (error) {
      console.log('Error add tag :', error.response);
    }
  }

  // asynchronous function to retrieve the id and the token
  async function deleteTag(id) {
    try {
      await axios({
        method: 'delete',
        url: `${URL}/tags/${id}`,
        headers: { authorization: state.user.token },
      });
      getTags();
    }
    catch (error) {
      console.log('Error delete tag :', error.response);
    }
  }

  switch (action.type) {
    case 'ADD_TAG':
      addTag(action.payload.name);
      break;

    case 'DELETE_TAG':
      deleteTag(action.payload.id);
      break;
    default:
      next(action);
  }
};

export default adminActionsOnTag;
