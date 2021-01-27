const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  token: '',
  id: '',
  recipesHistory: [],
};

const reducer = (oldState = initialState, action) => {
  // console.log('State :', oldState);
  // console.log('Action :', action);

  switch (action.type) {
    // after the user login, we place the token and the id in the reducer "user".
    // we will then use this reducer to send the request to the route back "/users/:userId"
    // which will allow to store the data related to this single user
    case 'LOGIN_SUCCESS':
      return {
        ...oldState,
        token: action.payload.token,
        id: action.payload.id,
      };
    default:
      return {
        ...oldState,
      };
    case 'PROFILE_SUCCESS':
      return {
        ...oldState,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        recipesHistory: action.payload.recipesHistory,
      };
  }
};

export default reducer;
