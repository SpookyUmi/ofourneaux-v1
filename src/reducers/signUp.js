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
    // controlled fields
    case 'EDIT_FIELD_SIGN_UP_LAST_NAME':
      return {
        ...oldState,
        lastName: action.payload.lastName,
      };
    case 'EDIT_FIELD_SIGN_UP_FIRST_NAME':
      return {
        ...oldState,
        firstName: action.payload.firstName,
      };
    case 'EDIT_FIELD_SIGN_UP_EMAIL':
      return {
        ...oldState,
        email: action.payload.email,
      };
    case 'EDIT_FIELD_SIGN_UP_PASSWORD':
      return {
        ...oldState,
        password: action.payload.password,
      };
    case 'EDIT_FIELD_SIGN_UP_CONFIRM_PASSWORD':
      return {
        ...oldState,
        confirmPassword: action.payload.confirmPassword,
      };

    // when the registration is successfull, we empty all the inputs
    case 'SUBSCRIPTION_SUCCESS':
      return {
        ...oldState,
        lastName: '',
        firstName: '',
        email: '',
        password: '',
        confirmPassword: '',
        // and the error message is removed
        errorMessage: '',
      };

    // when registration fails, only the password
    // and password confirmation inputs are emptied
    case 'SUBSCRIPTION_FAILED':
      return {
        ...oldState,
        password: '',
        confirmPassword: '',
        // and an error message is displayed to indicate
        // to the user which fields are problematic
        errorMessage: action.payload.errorMessage,
      };

    default:
      return {
        ...oldState,
      };
  }
};

export default reducer;
