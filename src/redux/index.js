import { createStore, applyMiddleware, combineReducers } from 'redux';
import studentReducer from './reducers/studentsReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  students: studentReducer
})

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

let store = createStore(
  reducer,
  enhancer(applyMiddleware(thunk))
)

export default store;