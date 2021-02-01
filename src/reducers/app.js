const initialState = {
  title: "O'Fourneaux",
  isClicked: false,
  tags: [],
  ingredients: [],
};

const reducer = (oldState = initialState, action) => {
  // console.log('State in app reducer :', oldState);

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

    case 'TAGS_SUCCESS':
      return {
        ...oldState,
        tags: action.payload.tags,
      };
    case 'INGREDIENTS_SUCCESS':
      return {
        ...oldState,
        ingredients: action.payload.ingredients,
      };

    default:
      return { ...oldState };
  }
};

export default reducer;
