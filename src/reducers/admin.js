const initialState = {
  tags: [],
  tagField: '',
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TAG_FIELD':
      return {
        ...oldState,
        tagField: action.payload.tagField,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
