import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// rootReducer = result of combineReducers
import rootReducer from 'src/reducers';

// middlewares
import authMiddleware from 'src/middlewares/auth';
import adminActionsOnUserMiddleware from 'src/middlewares/adminActionsOnUser';
import adminActionsOnRecipeMiddleware from 'src/middlewares/adminActionsOnRecipe';
import adminActionsOnTagMiddleware from 'src/middlewares/adminActionsOnTag';
import userMiddleware from 'src/middlewares/user';
import profileMiddleware from 'src/middlewares/profile';
import signInMiddleware from 'src/middlewares/signIn';
import searchMiddleware from 'src/middlewares/search';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      authMiddleware,
      adminActionsOnUserMiddleware,
      adminActionsOnRecipeMiddleware,
      adminActionsOnTagMiddleware,
      userMiddleware,
      profileMiddleware,
      signInMiddleware,
      searchMiddleware
    ),
  ),
);

export default store;
