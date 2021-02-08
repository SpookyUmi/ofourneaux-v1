// YARN
import axios from 'axios';
import FormData from 'form-data';
import URL from 'src/middlewares/urlEnv';

// middleware "auth"
const auth = (store) => (next) => (action) => {
  const state = store.getState();

  // the data must be sent to the back in "form-data" format
  const form = new FormData();
  form.append('mail_address', state.auth.email);
  form.append('password', state.auth.password);

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

      // console.log('Answer request favorites :', response.data.data);

      await store.dispatch({
        type: 'FAVORITES_RECIPES_SUCCESS',
        payload: {
          favoritesRecipes: response.data.data,
        },
      });
      getTagsByUser(userId, userToken);
    }
    catch (error) {
      // console.log('Error request favorites :', error.response);

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

  async function getShoppingList(userId, userToken) {
    try {
      const response = await axios({
        method: 'GET',
        url: `${URL}/shopping_list/${userId}`,
        headers: {
          authorization: userToken,
        },
      });

      console.log('Answer request shopping list :', response.data.data);

      await store.dispatch({
        type: 'SHOPPING_LIST_SUCCESS',
        payload: {
          shoppingList: response.data.data,
        },
      });
    }
    catch (error) {
      console.log('Error request shopping list :', error.response);

      if (error.response.data.error === 'Resource not found') {
        // when no data is returned from the back when asking
        // for a user's favourite recipes, an empty table is dispatched
        store.dispatch({
          type: 'SHOPPING_LIST_SUCCESS',
          payload: {
            shoppingList: [],
          },
        });
      }
    }
  }

  async function getIngredientsList(userId, userToken) {
    try {
      const response = await axios({
        method: 'GET',
        url: `${URL}/shopping_list/${userId}/generate`,
        headers: {
          authorization: userToken,
        },
      });

      console.log('Answer request ingredients :', response.data.data);

      await store.dispatch({
        type: 'INGREDIENTS_LIST_SUCCESS',
        payload: {
          ingredientsList: response.data.data,
        },
      });
    }
    catch (error) {
      console.log('Error request ingredients :', error.response);

      if (error.response.data.error === 'Resource not found') {
        // when no data is returned from the back when asking
        // for a user's favourite recipes, an empty table is dispatched
        store.dispatch({
          type: 'INGREDIENTS_LIST_SUCCESS',
          payload: {
            ingredientsList: [],
          },
        });
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
          pictureUrl: response.data.data.picture_url,
        },
      });

      // after logging in, the action is redirect to the home page
      action.redirect('/');

      getFavoritesRecipes(userId, userToken);
      getShoppingList(userId, userToken);
      getIngredientsList(userId, userToken);
    }
    catch (error) {
      // console.log('Error request user :', error.response);
    }
  }

  // asynchronous function to retrieve the id and the token
  async function logIn() {
    try {
      const response = await axios({
        method: 'POST',
        url: `${URL}/users/login`,
        data: form,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // console.log('Answer request login :', response);

      getUser(response.data.data.userId, response.data.data.token);

      localStorage.setItem('id', response.data.data.userId);
      localStorage.setItem('token', response.data.data.token);
    }
    catch (error) {
      // console.log('Error request login :', error.response);

      store.dispatch({
        type: 'LOGIN_FAILED',
        payload: {
          // if there is an error in the request (wrong identifies),
          // an error message is sent to the reducer "auth.js"
          errorMessage: 'Identifiants incorrects',
        },
      });
    }
  }

  switch (action.type) {
    // API connection request : OK
    case 'SEND_LOGIN_REQUEST':
      logIn();
      break;
    default:
      next(action);
  }
};

export default auth;
