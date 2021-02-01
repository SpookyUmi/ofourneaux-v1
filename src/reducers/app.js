const initialState = {
  title: "O'Fourneaux",
  isClicked: false,
  tags: [],
};

const reducer = (oldState = initialState, action) => {
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
