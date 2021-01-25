import { combineReducers } from 'redux';

//reducers import
import authReducer from './auth';
import recipesReducer from './recipes';

// reducers
export default combineReducers({
  auth: authReducer,
  recipes: recipesReducer,
});
