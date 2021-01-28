import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// rootReducer = result of combineReducers
import rootReducer from 'src/reducers';
// middlewares
import authMiddleware from 'src/middlewares/auth';
import userMiddleware from 'src/middlewares/user';
import profileMiddleware from 'src/middlewares/profile';
import signInMiddleware from 'src/middlewares/signIn';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      authMiddleware,
      userMiddleware,
      profileMiddleware,
      signInMiddleware,
    ),
  ),
);

export default store;
