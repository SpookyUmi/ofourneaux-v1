import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// rootReducer = result of combineReducers
import rootReducer from 'src/reducers';

// middlewares
import authMiddleware from 'src/middlewares/auth';
import adminActionsOnUserMiddleware from 'src/middlewares/adminActionsOnUser';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(authMiddleware, adminActionsOnUserMiddleware),
  ),
);

export default store;
