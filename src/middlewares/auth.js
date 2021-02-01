// YARN
import axios from 'axios';
import FormData from 'form-data';

// middleware "auth"
const auth = (store) => (next) => (action) => {
  const state = store.getState();

  // the data must be sent to the back in "form-data" format
  const form = new FormData();
  form.append('mail_address', state.auth.email);
  form.append('password', state.auth.password);

  const URL = 'https://ofourneaux.herokuapp.com';


  async function getRequiredData(userToken) {
    try {
      const response = await axios({
        method: 'GET',
        url: `${URL}/new`,
      });

      console.log('Answer request tags :', response);

      store.dispatch({
        type: 'REQUIRED_DATA_SUCCESS',
        payload: {
          types: response.data.data.type,
          seasons: response.data.data.season,
          tags: response.data.data.tag,
          difficulties: response.data.data.difficulty,
          categories: response.data.data.category,
          ingredients: response.data.data.ingredient,
        },
      });
    }
    catch (error) {
      // console.log('Error request tags :', error.response);
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
      // console.log('Answer request user :', response);

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
          favoritesRecipes: [1, 3, 5],
          // TODO: uncomment next line
          // favoritesRecipes: response.data.data.favorites_recipes,
          // ! test table, to be deleted
          shoppingList: [2, 4, 6],
          // TODO: uncomment next line
          // shoppingList: response.data.data.shopping_list,
          // ! test table, to be deleted
          eatingPreferences: [],
          // TODO: uncomment next line
          // eatingPreferences: response.data.data.eatingPreferences,
        },
      });

      // after logging in, the action is redirect to the home page
      action.redirect('/');

      getRequiredData();
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
