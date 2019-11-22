import { createStore } from 'redux';
import appReducer from './reducers/appReducer.js';

export default createStore(appReducer);
