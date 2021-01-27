import { combineReducers } from 'redux';

//reducers import
import authReducer from './auth';
import recipesReducer from './recipes';
import adminReducer from './admin';

// reducers
export default combineReducers({
  auth: authReducer,
  recipes: recipesReducer,
  admin: adminReducer,
});
