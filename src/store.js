import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import Thunk from 'redux-thunk';

import reducers from './reducers';

export default createStore(reducers, composeWithDevTools(), applyMiddleware(Thunk));
