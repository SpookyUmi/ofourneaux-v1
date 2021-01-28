import { combineReducers } from 'redux';

// reducers import
import authReducer from './auth';
import recipesReducer from './recipes';
import signInReducer from './signIn';
import userReducer from './user';

// combine reducers
export default combineReducers({
  auth: authReducer,
  recipes: recipesReducer,
  signIn: signInReducer,
  user: userReducer,
});
