import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// rootReducer = result of combineReducers
import rootReducer from 'src/reducers';

// middlewares
import authMiddleware from 'src/middlewares/auth';
import adminActionsOnUserMiddleware from 'src/middlewares/adminActionsOnUser';
import adminActionsOnTagMiddleware from 'src/middlewares/adminActionsOnTag';
import userMiddleware from 'src/middlewares/user';
import profileMiddleware from 'src/middlewares/profile';
import signUpMiddleware from 'src/middlewares/signUp';
import searchMiddleware from 'src/middlewares/search';
import recipeMiddleware from 'src/middlewares/recipe';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      authMiddleware,
      adminActionsOnUserMiddleware,
      adminActionsOnTagMiddleware,
      userMiddleware,
      profileMiddleware,
      signUpMiddleware,
      searchMiddleware,
      recipeMiddleware,
    ),
  ),
);

export default store;
