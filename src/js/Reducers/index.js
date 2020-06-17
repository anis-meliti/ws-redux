import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import userReducer from './userReducer';
export const combineReducer = combineReducers({
  taskReducer,
  userReducer,
});
