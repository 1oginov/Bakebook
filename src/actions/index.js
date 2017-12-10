import firebase from 'firebase';

import * as T from './types';

export const deleteVehicle = (uid) => {
  const { currentUser } = firebase.auth();

  return dispatch => firebase.database().ref(`/users/${currentUser.uid}/vehicles/${uid}`)
    .remove()
    .then(() => {
      dispatch({
        type: T.VEHICLE_DELETE,
      });
    });
};

export const deselectVehicle = () => ({
  type: T.VEHICLE_DESELECT,
});

export const editVehicle = vehicle => ({
  type: T.VEHICLE_EDIT,
  payload: vehicle,
});

export const fetchVehicles = () => {
  const { currentUser } = firebase.auth();

  return dispatch => firebase.database().ref(`/users/${currentUser.uid}/vehicles`)
    .on('value', (snapshot) => {
      dispatch({
        type: T.VEHICLES_FETCH,
        payload: snapshot.val(),
      });
    });
};

export const selectVehicle = vehicle => ({
  type: T.VEHICLE_SELECT,
  payload: vehicle,
});

export const storeVehicle = ({ title, category, notes }) => {
  const { currentUser } = firebase.auth();

  return dispatch => firebase.database().ref(`/users/${currentUser.uid}/vehicles`)
    .push({ title, category, notes })
    .then(() => {
      dispatch({
        type: T.VEHICLE_STORE,
      });
    });
};

export const updateVehicleForm = ({ prop, value }) => ({
  type: T.VEHICLE_FORM_UPDATE,
  payload: { prop, value },
});

export const updateVehicle = ({
  uid, title, category, notes,
}) => {
  const { currentUser } = firebase.auth();

  return dispatch => firebase.database().ref(`/users/${currentUser.uid}/vehicles/${uid}`)
    .set({
      uid, title, category, notes,
    })
    .then(() => {
      dispatch({
        type: T.VEHICLE_UPDATE,
      });
    });
};
