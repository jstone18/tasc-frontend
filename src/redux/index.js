import { createStore, applyMiddleware } from 'redux';
import studentReducer from './reducers/studentsReducer';
import thunk from 'redux-thunk';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

let store = createStore(
  studentReducer,
  enhancer(applyMiddleware(thunk))
)

export default store;