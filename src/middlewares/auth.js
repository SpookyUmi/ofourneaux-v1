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
          // test table, to be deleted
          favoritesRecipes: [1, 3, 5],
          // TODO: uncomment line 43
          // favoritesRecipes: response.data.data.favoritesRecipes,
          eatingPreferences: response.data.data.eatingPreferences,
        },
      });
      // after logging in, the action is redirect to the home page
      action.redirect('/');
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
      console.log('Answer request login :', response);
      getUser(response.data.data.userId, response.data.data.token);
    }
    catch (error) {
      console.log('Error request login :', error.response);
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

    // async function getUser() {
    //     try {
    //       const response = await axios.get(`${URL}/users/login`);
    //       console.log(response);
    //     } catch (error) {
    //       console.log(error);
    //     } 
    //   }


      // axios({
      //   method: 'post',
      //   url: 'https://ofourneaux.herokuapp.com/users/login',
      //   data: form,
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // })
      //   .then((response) => {
      //   // console.log('Answer request connection :', response);
      //     store.dispatch({
      //       type: 'LOGIN_SUCCESS',
      //       payload: {
      //         // we dispatch the token and the id, recovered in the reducer "user.js"
      //         token: response.data.data.token,
      //         id: response.data.data.userId,
      //       },
      //     });
      //     // after logging in, the action is redirect to the home page
      //     action.redirect('/');
      //   })
      //   .catch((error) => {
      //     // console.log('Error request connection :', error);
      //     store.dispatch({
      //       type: 'LOGIN_FAILED',
      //       payload: {
      //         // if there is an error in the request (wrong identifies),
      //         // an error message is sent to the reducer "auth.js"
      //         errorMessage: 'Identifiants incorrects',
      //       },
      //     });
      //   });
      break;

    // case 'SEND_PROFILE_REQUEST':
    //   axios({
    //     method: 'get',
    //     url: `https://ofourneaux.herokuapp.com/users/${state.user.id}`,
    //     headers: {
    //       authorization: state.user.token,
    //     },
    //   })
    //     .then((response) => {
    //       console.log('Answer request profil :', response.data);
    //       store.dispatch({
    //         type: 'PROFILE_SUCCESS',
    //         payload: {
    //           id: response.data.data.id,
    //           firstName: response.data.data.first_name,
    //           lastName: response.data.data.last_name,
    //           email: response.data.data.mail_address,
    //           status: response.data.data.status,
    //           recipesHistory: response.data.data.recipes_history,
    //           favoritesRecipes: [1, 3, 5],
    //           // favoritesRecipes: response.data.data.favoritesRecipes,
    //           // eatingPreferences: response.data.data.eatingPreferences,
    //         },
    //       });
    //     })
    //     .catch((error) => {
    //       // TODO: what to do when the profile access request fails?
    //       // console.log('Error request profile :', error);
    //     });
    //   break;
    default:
      next(action);
  }
};

export default auth;
