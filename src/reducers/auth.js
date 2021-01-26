const initialState = {
  email: '',
  password: '',
  isLogged: false,
  errorMessage: '',
  token: '',
};

const reducer = (oldState = initialState, action) => {
  // console.log('State :', oldState);
  // console.log('Action :', action);

  switch (action.type) {
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
      console.log('CONNECTED!!!');
      return {
        ...oldState,
        email: '',
        password: '',
        isLogged: true,
        errorMessage: '',
        token: action.payload.token,
      };
    case 'LOGIN_FAILED':
      return {
        ...oldState,
        errorMessage: action.payload.errorMessage,
      };
      // TODO: logout case
    case 'LOGOUT_SUCCESS':
      console.log('DISCONNECTED!!!');
      return {
        ...oldState,
      };
    default:
      return {
        ...oldState,
      };
  }
};

export default reducer;
