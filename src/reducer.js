import { firebaseReducer as firebase } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { STORE_NAME as USER_STORE_NAME } from './user/constants';
import userReducer from './user/reducer';
import { STORE_NAME as VEHICLES_STORE_NAME } from './vehicles/constants';
import vehiclesReducer from './vehicles/reducer';

/**
 * Reducer.
 * @type {Function}
 */
const reducer = combineReducers({
  // Vendor reducers.
  firebase,
  form,
  // App reducers.
  [USER_STORE_NAME]: userReducer,
  [VEHICLES_STORE_NAME]: vehiclesReducer,
});

export default reducer;
