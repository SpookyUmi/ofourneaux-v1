const initialState = {
  user: {},
  userSearchField: '',
  recipe: {},
  tags: [],
  ingredients: [],
  titleField: '',
};

const reducer = (oldState = initialState, action) => {
  // console.log('State :', oldState);
  // console.log('Action :', action);

  switch (action.type) {
    case 'UPDATE_USER_SEARCH_FIELD':
      return {
        ...oldState,
        userSearchField: action.payload.userSearchField,
      };
    case 'USER_FOUND':
      return {
        ...oldState,
        user: action.payload.user,
      };
    case 'USER_UPDATE':
      return {
        ...oldState,
        user: action.payload.user,
      };
    case 'USER_DELETE':
      return {
        ...oldState,
        user: {},
      };
    case 'RECIPE_UPDATE':
      return {
        ...oldState,
        recipe: action.payload.recipe,
      };
    case 'RECIPE_DELETE':
      return {
        ...oldState,
        recipe: {},
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
