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
        // eslint-disable-next-line max-len
        // ! TODO: for the moment, the message that appears is directly extracted from API, therefore in english. to see how it can be reused to customise the error message on the front side
        errorMessage: action.payload.errorMessage,
      };
    default:
      return {
        ...oldState,
      };
  }
};

export default reducer;
