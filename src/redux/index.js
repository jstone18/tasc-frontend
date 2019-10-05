import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/combineReducers';
import thunk from 'react-thunk';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__

let store = createStore(
  rootReducer,
  enhancer(applyMiddleware(thunk))
)

export default store;