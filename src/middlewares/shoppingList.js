// YARN
import axios from 'axios';
import FormData from 'form-data';

// middleware
const shoppingList = (store) => (next) => (action) => {
  const state = store.getState();

  const form = new FormData();

  switch (action.type) {
    // ! API update shopping list : TO BE CHECKED
    case 'UPDATE_SHOPPING_LIST_REQUEST':
      // eslint-disable-next-line no-case-declarations
      const recipeId = parseInt(action.payload.id, 10);

      // eslint-disable-next-line no-case-declarations, max-len
      const updatedShoppingList = state.user.shoppingList.map((itemList) => itemList);

      // eslint-disable-next-line no-case-declarations
      const index = updatedShoppingList.indexOf(recipeId);

      if (index > -1) {
        updatedShoppingList.splice(index, 1);
        store.dispatch({
          type: 'UPDATE_SHOPPING_LIST_SUCCESS',
          payload: {
            shoppingList: updatedShoppingList,
          },
        });
      }
      else {
        updatedShoppingList.push(recipeId);
        store.dispatch({
          type: 'UPDATE_SHOPPING_LIST_SUCCESS',
          payload: {
            shoppingList: updatedShoppingList,
          },
        });
      }

      form.append('shopping_list', updatedShoppingList);

      // axios({
      //   method: 'patch',
      //   url: `https://ofourneaux.herokuapp.com/shopping_list/${state.user.id}`,
      //   headers: {
      //     authorization: state.user.token,
      //   },
      // })
      //   .then((response) => {
      //     console.log('Answer request add recipe in shopping list :', response);
      //     store.dispatch({
      //       type: 'UPDATE_SHOPPING_LIST_REQUEST',
      //       payload: {
      //         shoppingList: updatedShoppingList,
      //       },
      //     });
      //   })
      //   .catch((error) => {
      //     console.log('Error request add recipe in shopping list :', error.response);
      //   });
      break;
    default:
      next(action);
  }
};

export default shoppingList;
