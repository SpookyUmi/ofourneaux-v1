const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  token: '',
  id: '',
  status: '',
  recipesHistory: [],
  favoriteRecipes: [],
  shoppingList: [],
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
    case 'PROFILE_SUCCESS':
      return {
        ...oldState,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        recipesHistory: action.payload.recipesHistory,
      };
    case 'FAVORITES_RECIPES_SUCCESS':
      return {
        ...oldState,
        favoriteRecipes: action.payload.favoriteRecipes,
      };
    case 'SHOPPING_LIST_SUCCESS':
      return {
        ...oldState,
        shoppingList: action.payload.shoppingList,
      };
    case 'EDIT_FIELD_PROFILE_LAST_NAME':
      return {
        ...oldState,
        lastName: action.payload.lastName,
      };
    case 'EDIT_FIELD_PROFILE_FIRST_NAME':
      return {
        ...oldState,
        firstName: action.payload.firstName,
      };
    case 'EDIT_FIELD_PROFILE_EMAIL':
      return {
        ...oldState,
        email: action.payload.email,
      };
    default:
      return {
        ...oldState,
      };
  }
};

export default reducer;
