const initialState = {
  title: "O'Fourneaux",
  isClicked: false
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
    default:
      return { ...oldState };
  };
};

export default reducer;
