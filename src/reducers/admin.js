const initialState = {
  user: {},
  userSearchField: '',
  recipe: {},
  tags: [],
  ingredients: [],
  newRecipe: {},
  tagField: '',
  currentRoute: '',
};

const reducer = (oldState = initialState, action) => {
  // console.log('State :', oldState);
  // console.log('Action :', action);

  switch (action.type) {
    case 'CHANGE_CURRENT_ROUTE':
      return {
        ...oldState,
        currentRoute: action.currentRoute.pathname,
      };
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
    case 'RECIPE_ADD':
      return {
        ...oldState,
        newRecipe: action.payload.recipe,
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
    case 'UPDATE_TAG_FIELD':
      return {
        ...oldState,
        tagField: action.payload.tagField,
      };
    case 'TAG_ADD':
      return {
        ...oldState,
        tags: action.payload.tags,
      };
    case 'TAG_DELETE':
      return {
        ...oldState,
        tags: action.payload.tags,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
