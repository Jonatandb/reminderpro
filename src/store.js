import { createStore } from 'redux';
import remindersReducer from './reducers';

export default createStore(
  remindersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());