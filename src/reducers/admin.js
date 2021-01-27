import user from '../middlewares/adminActionsOnUser';

const initialState = {
  user: {},
  userSearchField: '',
};

const reducer = (oldState = initialState, action) => {
  // console.log('State :', oldState);
  // console.log('Action :', action);

  switch (action.type) {
    case 'UPDATE_USER_SEARCH_FIELD':
      return {
        ...oldState,
        userSearchField: action.payload.userSearchField,
      };
    case 'USER_FOUND':
      return {
        ...oldState,
        user,
      };
    case 'USER_UPDATE':
      return {
        ...oldState,
        user,
      };
    case 'USER_DELETED':
      return {
        ...oldState,
        user: {},
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
