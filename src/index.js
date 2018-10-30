import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import ReduxThunk from 'redux-thunk'

import './index.scss';
import App from './App';
import reducers from './store/reducers';

// First arg. includes reducer, second arg. the initial state, third arg. middleware
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
  // Provider knows how to read changes from redux store and if state changes, all components are updated
  <Provider store={store}><App /></Provider>,
    document.querySelector('#root')
);
