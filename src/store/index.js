import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// rootReducer = result of combineReducers
import rootReducer from 'src/reducers';

// middlewares
import authMiddleware from 'src/middlewares/auth';
import adminActionsOnTagMiddleware from 'src/middlewares/adminActionsOnTag';
import userMiddleware from 'src/middlewares/user';
import profileMiddleware from 'src/middlewares/profile';
import signUpMiddleware from 'src/middlewares/signUp';
import searchMiddleware from 'src/middlewares/search';
import recipeMiddleware from 'src/middlewares/recipe';
import shoppingListMiddleware from 'src/middlewares/shoppingList';
import appMiddleware from 'src/middlewares/app';
import connectionPersistence from 'src/middlewares/connectionPersistence';
import favoritesMiddleware from 'src/middlewares/favorites';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      authMiddleware,
      adminActionsOnTagMiddleware,
      userMiddleware,
      profileMiddleware,
      signUpMiddleware,
      searchMiddleware,
      recipeMiddleware,
      shoppingListMiddleware,
      appMiddleware,
      connectionPersistence,
      favoritesMiddleware,
    ),
  ),
);

export default store;
