import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import Thunk from 'redux-thunk';

import vehicles from './vehicles/reducers';

const reducers = combineReducers({
  vehicles,
});

export default createStore(reducers, composeWithDevTools(applyMiddleware(Thunk)));
