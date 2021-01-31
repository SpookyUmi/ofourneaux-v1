const initialState = {
  id: '',
  token: '',
  firstName: '',
  lastName: '',
  email: '',
  status: '',
  recipesHistory: [],
  favoritesRecipes: [],
  shoppingList: [],
  eatingPreferences: [],
};

const reducer = (oldState = initialState, action) => {
  // console.log('State user :', oldState);
  // console.log('Action user :', action);

  switch (action.type) {
    // after the user login, we place the token and the id in the reducer "user".
    // we will then use this reducer to send the request to the route back "/users/:userId"
    // which will allow to store the data related to this single user
    case 'LOGIN_SUCCESS':
      return {
        ...oldState,
        token: action.payload.token,
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        status: action.payload.status,
        recipesHistory: action.payload.recipesHistory,
        favoritesRecipes: action.payload.favoritesRecipes,
        eatingPreferences: action.payload.eatingPreferences,
      };

    // when the user logs out, the state is cleared
    case 'LOGOUT_SUCCESS':
      return {
        ...oldState,
        id: '',
        token: '',
        firstName: '',
        lastName: '',
        email: '',
        status: '',
        recipesHistory: [],
        favoriteRecipes: [],
        shoppingList: [],
      };

    // after edition to the account, the state is modified
    case 'EDIT_PROFILE_SUCCESS':
      return {
        ...oldState,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
      };

    case 'UPDATE_FAVORITES_SUCCESS':
      return {
        ...oldState,
        favoritesRecipes: action.payload.favoritesRecipes,
      };

    // after deletion to the account, the state is emptied
    case 'DELETE_PROFILE_SUCCESS':
      return {
        ...oldState,
        id: '',
        token: '',
        firstName: '',
        lastName: '',
        email: '',
        status: '',
        recipesHistory: [],
        favoriteRecipes: [],
        shoppingList: [],
      };

    // ! we add the users's favourite recipes in the state : 404
    case 'FAVORITES_RECIPES_SUCCESS':
      return {
        ...oldState,
        favoritesRecipes: action.payload.favoritesRecipes,
      };

    // ! we add the users's shopping list in the state : 404
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
