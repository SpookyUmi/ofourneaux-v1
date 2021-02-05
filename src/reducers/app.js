const initialState = {
  title: "O'Fourneaux",
  isClicked: false,
  types: [],
  seasons: [],
  tags: [],
  difficulties: [],
  categories: [],
  ingredients: [],
};

const reducer = (oldState = initialState, action) => {
  // console.log('State in reducer "app.js" :', oldState);

  switch (action.type) {
    case 'CLICK_IN':
      return {
        ...oldState,
        isClicked: true,
      };
    case 'CLICK_OUT':
      return {
        ...oldState,
        isClicked: false,
      };

    case 'UPDATE_TAGS':
      return {
        ...oldState,
        tags: action.payload.tags,
      };
    case 'REQUIRED_DATA_SUCCESS':
      return {
        ...oldState,
        types: action.payload.types,
        seasons: action.payload.seasons,
        tags: action.payload.tags,
        difficulties: action.payload.difficulties,
        categories: action.payload.categories,
        ingredients: action.payload.ingredients,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
