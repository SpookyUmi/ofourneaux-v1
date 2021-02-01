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
        shoppingList: action.payload.shoppingList,
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

    case 'UPDATE_EATING_PREFERENCES':
      // a copy of the food preference table was created in the state
      // eslint-disable-next-line no-case-declarations, max-len
      const updatedEatingPreferences = oldState.eatingPreferences.map((eatingPreference) => eatingPreference);
      // console.log('New copy of the eating preferences array :', updatedEatingPreferences);

      // we target the index of the selected tag
      // eslint-disable-next-line no-case-declarations
      const index = updatedEatingPreferences.indexOf(action.payload.id);
      // console.log(index);

      // if the food preference is already in the table, it is removed
      if (index > -1) {
        updatedEatingPreferences.splice(index, 1);
        // console.log('Eating preference removed !');
        // console.log(updatedEatingPreferences);
        return {
          ...oldState,
          eatingPreferences: updatedEatingPreferences,
        };
      }

      // if the food preference is not already in the table, it is added
      if (index === -1) {
        updatedEatingPreferences.push(action.payload.id);
        // console.log('Eating preference add !');
        // console.log(updatedEatingPreferences);
        return {
          ...oldState,
          eatingPreferences: updatedEatingPreferences,
        };
      }

      break;
    // after edition to the account, the state is modified
    case 'EDIT_PROFILE_SUCCESS':
      return {
        ...oldState,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
      };

    // when the update of favourite recipes and shopping
    // list is successful, the state is updated
    case 'UPDATE_FAVORITES_SUCCESS':
      return {
        ...oldState,
        favoritesRecipes: action.payload.favoritesRecipes,
      };
    case 'UPDATE_SHOPPING_LIST_SUCCESS':
      return {
        ...oldState,
        shoppingList: action.payload.shoppingList,
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
