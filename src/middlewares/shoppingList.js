// YARN
import axios from 'axios';
import FormData from 'form-data';
import URL from 'src/middlewares/urlEnv';

// middleware
const shoppingList = (store) => (next) => (action) => {
  const state = store.getState();

  const form = new FormData();

  switch (action.type) {
    // API update shopping list : OK
    case 'UPDATE_SHOPPING_LIST_REQUEST':
      // eslint-disable-next-line no-case-declarations
      const recipeId = parseInt(action.payload.id, 10);

      // eslint-disable-next-line no-case-declarations, max-len
      const updatedShoppingList = state.user.shoppingList?.map((itemList) => itemList);

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

      if (index === -1) {
        updatedShoppingList.push(recipeId);
        store.dispatch({
          type: 'UPDATE_SHOPPING_LIST_SUCCESS',
          payload: {
            shoppingList: updatedShoppingList,
          },
        });
      }

      // eslint-disable-next-line no-case-declarations, prefer-template
      const updatedShoppingListStringify = '[' + updatedShoppingList.join(', ') + ']';
      console.log(updatedShoppingListStringify);

      form.append('selected_recipes', updatedShoppingListStringify);

      axios({
        method: 'PATCH',
        url: `${URL}/shopping_list/${state.user.id}`,
        data: form,
        headers: {
          authorization: state.user.token,
        },
      })
        .then((response) => {
          console.log('Answer request add recipe in shopping list :', response);
          // send to the reducer 'user.js'
          store.dispatch({
            type: 'UPDATE_SHOPPING_LIST_SUCCESS',
            payload: {
              shoppingList: updatedShoppingList,
            },
          });
        })
        .catch((error) => {
          console.log('Error request add recipe in shopping list :', error.response);
        });
      break;
    default:
      next(action);
  }
};

export default shoppingList;
