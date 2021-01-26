const initialState = {
  email: '',
  password: '',
  isLogged: false,
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
      // console.log('CONNECTED!!!');
      return {
        ...oldState,
        isLogged: true,
        errorMessage: '',
      };
    default:
      return {
        ...oldState,
      };
  }
};

export default reducer;
