const initialState = {
  email: '',
  password: '',
  isLogged: false,
  errorMessage: '',
};

const reducer = (oldState = initialState, action) => {
  // console.log('State "auth.js" :', oldState);
  // console.log('Action "auth.js" :', action);

  switch (action.type) {
    case 'CHECK_LOGGED_USER':
      return {
        ...oldState,
        isLogged: true,
      };

    // controlled fields
    case 'EDIT_FIELD_AUTH_EMAIL':
      return {
        ...oldState,
        email: action.payload.email,
      };
    case 'EDIT_FIELD_AUTH_PASSWORD':
      return {
        ...oldState,
        password: action.payload.password,
      };

    // if the connection attempt is successful
    case 'LOGIN_SUCCESS':
      return {
        ...oldState,
        // the fields are emptied to prevent the fields from
        // being filled in again during another connection attempts
        email: '',
        password: '',
        // and change the "isLogged" property to "true" to change
        // the preview of the Header and NavBar component
        isLogged: true,
        // any potential error messages are also erased
        errorMessage: '',
      };

    // if the connection attempt is a failure
    case 'LOGIN_FAILED':
      return {
        ...oldState,
        // when the connection fails, the password field is emptied
        password: '',
        // the error message is displayed
        errorMessage: action.payload.errorMessage,
      };

    // when the user logs out
    case 'LOGOUT_SUCCESS':
      return {
        ...oldState,
        // we change the "isLogged" property to "false" to change
        // the preview of the Header and NavBar component
        isLogged: false,
      };

    // after deletion to the account
    case 'DELETE_PROFILE_SUCCESS':
      return {
        ...oldState,
        // we change the "isLogged" property to "false"
        isLogged: false,
      };

    default:
      return {
        ...oldState,
      };
  }
};

export default reducer;
