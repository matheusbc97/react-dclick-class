/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './reducers';

export default function configureStore() {
  return createStore(
    reducers,
    undefined,
    compose(applyMiddleware(thunk, createLogger())),
  );
}

/*
window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
      */
