import firebase from 'firebase';
import { reactReduxFirebase } from 'react-redux-firebase';
import { applyMiddleware, createStore as createReduxStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import config from '../config';

/**
 * Create store.
 * @param {Function} reducer
 * @param {Object} [initialState={}]
 * @return {*}
 */
const createStore = (reducer, initialState = {}) => {
  firebase.initializeApp(config.firebase);

  const logger = createLogger({
    collapsed: true,
    duration: true,
    predicate: () => config.isDebugging,
  });

  const middleware = (process.env.NODE_ENV === 'production' ?
    // Production middleware.
    [thunk, logger] :
    // Development middleware.
    [thunk, logger, reduxImmutableStateInvariant()]);

  const store = createReduxStore(
    reducer,
    initialState,
    composeWithDevTools(
      reactReduxFirebase(firebase),
      applyMiddleware(...middleware),
    ),
  );

  // Append store to the window object to make it globally accessible.
  if (config.isDebugging) {
    window.store = store;
  }

  return store;
};

export default createStore;
