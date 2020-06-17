import { createStore } from 'redux';
import { combineReducer } from '../Reducers';

const intialState = {};

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__();

const Store = createStore(combineReducer, intialState, reduxDevtools);
export default Store;
