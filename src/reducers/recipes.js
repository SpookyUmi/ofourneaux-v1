const initialState = {
  recipes: [],
  favorites: [],
  search: ''
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'EDIT_SEARCH_FIELD':
      return {
        ...oldState,
        search: action.payload.search,
      };
    case 'RECIPES_RESULTS':
      console.log('RECIPES !!!');
      return {
        ...oldState,
        recipes: action.payload.recipes,
      }
    default:
      return { ...oldState };
  };
};

export default reducer;
