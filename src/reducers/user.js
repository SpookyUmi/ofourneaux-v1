const initialState = {
  id: '',
  token: '',
  firstName: '',
  lastName: '',
  email: '',
  status: '',
  recipesHistory: [],
};

const reducer = (oldState = initialState, action) => {
  // console.log('State :', oldState);
  console.log('Action :', action);

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
    case 'PROFILE_SUCCESS':
      return {
        ...oldState,
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        recipesHistory: action.payload.recipesHistory,
      };
    default:
      return {
        ...oldState,
      };
  }
};

export default reducer;
