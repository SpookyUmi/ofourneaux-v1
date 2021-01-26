import { combineReducers } from 'redux';

//reducers import
import authReducer from './auth';
import recipesReducer from './recipes';
import signInReducer from './signIn';

// reducers
export default combineReducers({
  auth: authReducer,
  recipes: recipesReducer,
  signIn: signInReducer,
});
