import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// rootReducer = result of combineReducers
import rootReducer from 'src/reducers';
import authMiddleware from 'src/middlewares/auth';
import searchMiddleware from 'src/middlewares/search';
// middlewares

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(authMiddleware, searchMiddleware),
  ),
);

export default store;
