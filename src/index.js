import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'react-thunk'

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
