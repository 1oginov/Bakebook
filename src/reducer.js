import { firebaseReducer as firebase } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

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
  [VEHICLES_STORE_NAME]: vehiclesReducer,
});

export default reducer;
