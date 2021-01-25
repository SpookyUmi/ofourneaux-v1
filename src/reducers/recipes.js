const initialState = {
  recipes: [],
  favorites: []
};

const reducer = (oldState = initialState, action) => {
  return { ...oldState };
};

export default reducer;
