const initialState = {
  lastName: '',
  firstName: '',
  email: '',
  password: '',
  confirmPassword: '',
  errorMessage: '',
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'EDIT_FIELD_LAST_NAME':
      return {
        ...oldState,
        lastName: action.payload.lastName,
      };
    case 'EDIT_FIELD_FIRST_NAME':
      return {
        ...oldState,
        firstName: action.payload.firstName,
      };
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
    case 'EDIT_FIELD_CONFIRM_PASSWORD':
      return {
        ...oldState,
        confirmPassword: action.payload.confirmPassword,
      };
    case 'SUBSCRIPTION_FAILED':
      return {
        ...oldState,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return {
        ...oldState,
      };
  }
};

export default reducer;
