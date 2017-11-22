import { applyMiddleware, createStore } from 'redux';
import Thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducers from './reducers';

export default createStore(reducers, composeWithDevTools(), applyMiddleware(Thunk));
