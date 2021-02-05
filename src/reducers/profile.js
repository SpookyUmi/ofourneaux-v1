const initialState = {
  // by default, the modal is closed
  showModal: false,
  message: '',
  checked: false,
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    // when the user tries to delete his account, a modal opens
    // to ask him to confirm or cancel his choice
    case 'OPEN_MODAL':
      return {
        ...oldState,
        showModal: true,
      };

    // if he cancels the deletion of his account, the modal is closed again
    case 'CLOSE_MODAL':
      return {
        ...oldState,
        showModal: false,
      };

    // after a user's profile has been deleted,
    // the modal is masked to prevent it from remaining visible
    case 'DELETE_PROFILE_SUCCESS':
      return {
        ...oldState,
        showModal: false,
      };

    // after the profile has been modified, the user is informed
    // that these changes have been taken into account
    case 'EDIT_PROFILE_SUCCESS':
      return {
        ...oldState,
        message: 'Les changements ont bien été pris en compte',
      };

    case 'CLEAR_MESSAGE_PROFILE':
      return {
        ...oldState,
        message: '',
      };

    case 'EDIT_PROFILE_FAILED':
      return {
        ...oldState,
        message: action.payload.message,
      };

    // when the user logs out, the modal disappears
    case 'LOGOUT_SUCCESS':
      return {
        ...oldState,
        showModal: false,
        message: '',
      };

    // ! in which cases does modal close ?
    // // TODO: when he changes his profile,
    // case '':
    //   return {
    //     ...oldState,
    //     showModal: false,
    //   };

    // // when he accesses the shopping list or his favourite recipes,
    // case '':
    //   return {
    //     ...oldState,
    //     showModal: false,
    //   };

    // // when he does a search,
    // case '':
    //   return {
    //     ...oldState,
    //     showModal: false,
    //   };

    // // when he comes back to the home page
    // case '':
    //   return {
    //     ...oldState,
    //     showModal: false,
    //   };
    // ! anything else ?

    default:
      return {
        ...oldState,
      };
  }
};

export default reducer;
