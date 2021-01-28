const initialState = {
  showModal: false,
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...oldState,
        showModal: true,
      };
    case 'CLOSE_MODAL':
      return {
        ...oldState,
        showModal: false,
      };
    default:
      return {
        ...oldState,
      };
  }
};

export default reducer;
