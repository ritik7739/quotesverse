import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './store/reducers'; // Make sure this path is correct

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;