/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './reducers';

const store = createStore(
  reducers,
  undefined,
  compose(applyMiddleware(thunk, createLogger())),
);

type GetStateType = typeof store.getState;

export type RootState = ReturnType<GetStateType>;

export default function configureStore() {
  return store;
}

/*
window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
      */
