import { combineReducers } from 'redux';

//reducers import
import authReducer from './auth';
import recipesReducer from './recipes';
import appReducer from './app';

// reducers
export default combineReducers({
  auth: authReducer,
  recipes: recipesReducer,
  app: appReducer,
});
