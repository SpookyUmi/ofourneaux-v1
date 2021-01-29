import { combineReducers } from 'redux';

// reducers import
import authReducer from './auth';
import recipesReducer from './recipes';
import appReducer from './app';
import signInReducer from './signIn';
import userReducer from './user';
import profileReducer from './profile';

// combine reducers
export default combineReducers({
  auth: authReducer,
  recipes: recipesReducer,
  app: appReducer,
  signIn: signInReducer,
  user: userReducer,
  profile: profileReducer,
});
