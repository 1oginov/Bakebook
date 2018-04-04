import { combineReducers } from 'redux';

import user from './user/reducers';
import vehicles from './vehicles/reducers';

/**
 * Combined reducer.
 * @type {Function}
 */
const reducer = combineReducers({
  user,
  vehicles,
});

export default reducer;
