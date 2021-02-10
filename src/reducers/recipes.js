const initialState = {
  recipes: [],
  search: '',
  number: 1,
  time: '',
  difficulty: '',
  favorites: false,
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'EDIT_SEARCH_FIELD':
      return {
        ...oldState,
        search: action.payload.search,
      };
    case 'EDIT_GEN_NUMBER':
      return {
        ...oldState,
        number: action.payload.numberGen,
      };
    case 'EDIT_GEN_TIME':
      return {
        ...oldState,
        time: action.payload.timeGen,
      };
    case 'EDIT_GEN_DIFFICULTY':
      return {
        ...oldState,
        difficulty: action.payload.diffGen,
      };
    case 'EDIT_GEN_FAVORITES':
      return {
        ...oldState,
        favorites: action.payload.favGen,
      };
    case 'RECIPES_RESULTS':
      return {
        ...oldState,
        recipes: action.payload.recipes,
        search: action.payload.search,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
