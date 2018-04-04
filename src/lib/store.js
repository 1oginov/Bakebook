import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import config from '../config';
import reducer from '../reducer';

/**
 * Configure store.
 * @param {Object} [initialState={}]
 * @return {Store}
 */
const configureStore = (initialState = {}) => {
  const logger = createLogger({
    collapsed: true,
    duration: true,
    predicate: () => config.isDebugging,
  });

  const middleware = (process.env.NODE_ENV === 'production' ?
    // Production middleware
    [thunk, logger] :
    // Development middleware
    [thunk, logger, reduxImmutableStateInvariant()]);

  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );

  // Append store to the window object to make it globally accessible.
  if (config.isDebugging) {
    window.store = store;
  }

  return store;
};

// eslint-disable-next-line import/prefer-default-export
export { configureStore };
