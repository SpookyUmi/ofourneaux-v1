const initialState = {
  email: '',
  password: '',
  isLogged: false,
  errorMessage: '',
};

const reducer = (oldState = initialState, action) => {
  // console.log('State :', oldState);
  // console.log('Action :', action);

  switch (action.type) {
    // controlled fields
    case 'EDIT_FIELD_EMAIL':
      return {
        ...oldState,
        email: action.payload.email,
      };
    case 'EDIT_FIELD_PASSWORD':
      return {
        ...oldState,
        password: action.payload.password,
      };
    case 'LOGIN_SUCCESS':
      // console.log('CONNECTED!!!');
      return {
        ...oldState,
        id: action.payload.id,
        token: action.payload.token,
        email: '',
        password: '',
        isLogged: true,
        errorMessage: '',
      };
    case 'LOGIN_FAILED':
      return {
        ...oldState,
        errorMessage: action.payload.errorMessage,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...oldState,
        id: '',
        token: '',
        isLogged: false,
      };

    // after deletion to the account, the state is emptied
    case 'DELETE_PROFILE_SUCCESS':
      return {
        ...oldState,
        id: '',
        token: '',
        isLogged: false,
        errorMessage: '',
      };

    default:
      return {
        ...oldState,
      };
  }
};

export default reducer;
