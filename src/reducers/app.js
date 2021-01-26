const initialState = {
  title: "O'Fourneaux",
  isClicked: false
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'CLICK_ON_ELEMENT':
      return {
        ...oldState,
        isClicked: true,
      };
    default:
      return { ...oldState };
  };
};

export default reducer;
