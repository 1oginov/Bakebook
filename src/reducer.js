import { combineReducers } from 'redux';

import dashboard from './dashboard/reducer';
import user from './user/reducers';
import vehicles from './vehicles/reducers';

/**
 * Combined reducer.
 * @type {Function}
 */
const reducer = combineReducers({
  dashboard,
  user,
  vehicles,
});

export default reducer;
