import axios from 'axios';

const connectionPersistence = (store) => (next) => (action) => {

  const URL = 'https://ofourneaux.herokuapp.com';

  async function getTagsByUser(userId, userToken) {
    try {
      const response = await axios({
        method: 'GET',
        url: `${URL}/tags/user/${userId}`,
        headers: {
          authorization: userToken,
        },
      });

      // console.log('Answer request tags by user :', response.data.data);

      store.dispatch({
        type: 'TAGS_USER_SUCCESS',
        payload: {
          tags: response.data.data,
        },
      });
    }
    catch (error) {
      // console.log('Error request tags by user :', error.response.data.error);

      if (error.response.data.error === 'Resource not found') {
        store.dispatch({
          type: 'TAGS_USER_SUCCESS',
          payload: {
            tags: [],
          },
        });
      }
    }
  }

  async function getFavoritesRecipes(userId, userToken) {
    try {
      const response = await axios({
        method: 'GET',
        url: `${URL}/favorites/${userId}`,
        headers: {
          authorization: userToken,
        },
      });

      console.log('Answer request favorites :', response.data.data);

      store.dispatch({
        type: 'FAVORITES_RECIPES_SUCCESS',
        payload: {
          favoritesRecipes: response.data.data,
        },
      });

      getTagsByUser(userId, userToken);
    }
    catch (error) {
      console.log('Error request favorites :', error.response);

      if (error.response.data.error === 'Resource not found') {
        // when no data is returned from the back when asking
        // for a user's favourite recipes, an empty table is dispatched
        store.dispatch({
          type: 'FAVORITES_RECIPES_SUCCESS',
          payload: {
            favoritesRecipes: [],
          },
        });

        getTagsByUser(userId, userToken);
      }
    }
  }

  // asynchronous function to retrieve the user from the result
  // of the function to retrieve the id and the token
  async function getUser(userId, userToken) {
    try {
      const response = await axios({
        method: 'GET',
        url: `${URL}/users/${userId}`,
        headers: {
          authorization: userToken,
        },
      });

      console.log('Answer request user :', response);

      store.dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          // we dispatch the token, the id and the user informations
          // recovered in the reducer "user.js"
          token: userToken,
          id: userId,
          firstName: response.data.data.first_name,
          lastName: response.data.data.last_name,
          email: response.data.data.mail_address,
          status: response.data.data.status,
          recipesHistory: response.data.data.recipes_history,
          // ! test table, to be deleted
          shoppingList: [2, 4, 6],
          // TODO: uncomment next line
          // shoppingList: response.data.data.shopping_list,
          pictureUrl: response.data.data.picture_url,
        },
      });

      getFavoritesRecipes(userId, userToken);
    }
    catch (error) {
      // console.log('Error request user :', error.response);
    }
  }

  switch (action.type) {
    case 'CHECK_LOGGED_USER':
      getUser(action.payload.id, action.payload.token)
      break;
    default:
      next(action);
  }

};

export default connectionPersistence;
