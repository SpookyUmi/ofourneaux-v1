import axios from 'axios';
import URL from 'src/middlewares/urlEnv';

const app = (store) => (next) => (action) => {
  const state = store.getState();

  async function getRequiredData() {
    try {
      const response = await axios({
        method: 'GET',
        url: `${URL}/datas`,
      });

      // console.log('Answer request data :', response);

      store.dispatch({
        type: 'REQUIRED_DATA_SUCCESS',
        payload: {
          types: response.data.data.types,
          seasons: response.data.data.seasons,
          tags: response.data.data.tags,
          difficulties: response.data.data.difficulties,
          categories: response.data.data.categories,
          ingredients: response.data.data.ingredients,
        },
      });
    }
    catch (error) {
      // console.log('Error request data :', error.response);
    }
  }

  switch (action.type) {
    case 'INIT_DATAS':
      getRequiredData();
      break;
    default:
      next(action);
  }
};

export default app;
