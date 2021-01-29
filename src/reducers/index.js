import { combineReducers } from 'redux';

// reducers import
import authReducer from './auth';
import recipesReducer from './recipes';
import adminReducer from './admin';
import appReducer from './app';
import signUpReducer from './signUp';
import userReducer from './user';
import profileReducer from './profile';
import recipeReducer from './recipe';

// combine reducers
export default combineReducers({
  auth: authReducer,
  recipes: recipesReducer,
  admin: adminReducer,
  app: appReducer,
  signUp: signUpReducer,
  user: userReducer,
  profile: profileReducer,
  recipe: recipeReducer,
});
