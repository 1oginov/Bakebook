import firebase from 'firebase';

import * as T from './types';

export const selectRecipe = recipe => ({
  type: T.VEHICLE_SELECT,
  payload: recipe,
});

export const selectNone = () => ({
  type: T.VEHICLE_DESELECT,
});

export const formUpdate = ({ prop, value }) => ({
  type: T.VEHICLE_FORM_UPDATE,
  payload: { prop, value },
});

export const createNewRecipe = ({ title, category, notes }) => {
  const { currentUser } = firebase.auth();

  return dispatch => firebase.database().ref(`/users/${currentUser.uid}/recipes`)
    .push({ title, category, notes })
    .then(() => {
      dispatch({ type: T.VEHICLE_STORE });
    });
};

export const loadInitialRecipes = () => {
  const { currentUser } = firebase.auth();

  return dispatch => firebase.database().ref(`/users/${currentUser.uid}/recipes`)
    .on('value', (snapshot) => {
      dispatch({ type: T.VEHICLES_FETCH, payload: snapshot.val() });
    });
};

export const deleteRecipe = (uid) => {
  const { currentUser } = firebase.auth();

  return dispatch => firebase.database().ref(`/users/${currentUser.uid}/recipes/${uid}`)
    .remove()
    .then(() => {
      dispatch({ type: T.VEHICLE_DELETE });
    });
};

export const updateRecipe = recipe => ({
  type: T.VEHICLE_EDIT,
  payload: recipe,
});

export const saveRecipe = ({
  uid, title, category, notes,
}) => {
  const { currentUser } = firebase.auth();

  return dispatch => firebase.database().ref(`/users/${currentUser.uid}/recipes/${uid}`)
    .set({
      uid, title, category, notes,
    })
    .then(() => {
      dispatch({ type: T.VEHICLE_UPDATE });
    });
};
