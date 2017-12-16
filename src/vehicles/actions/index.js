import firebase from 'firebase';

import * as T from './types';

/**
 * Deselect action creator.
 * @returns {{type: string}}
 */
export const deselect = () => ({
  type: T.DESELECT,
});

/**
 * Destroy (Delete) action creator.
 * @param {string} uid
 * @returns {function}
 */
export const destroy = (uid) => {
  const { currentUser } = firebase.auth();

  return dispatch => firebase.database().ref(`/users/${currentUser.uid}/vehicles/${uid}`)
    .remove()
    .then(() => {
      dispatch({
        type: T.DELETE,
      });
    });
};

/**
 * Edit action creator.
 * @param {string} uid
 * @returns {{type: string, payload: string}}
 */
export const edit = uid => ({
  type: T.EDIT,
  payload: uid,
});

/**
 * Fetch action creator.
 * @returns {function}
 */
export const fetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => firebase.database().ref(`/users/${currentUser.uid}/vehicles`)
    .on('value', (snapshot) => {
      let vehicles = snapshot.val();

      if (!vehicles) {
        vehicles = {};
      }

      // Provide vehicles with UIDs
      for (const uid of Object.keys(vehicles)) { // eslint-disable-line no-restricted-syntax
        vehicles[uid].uid = uid;
      }

      dispatch({
        type: T.FETCH,
        payload: vehicles,
      });
    });
};

/**
 * Select action creator.
 * @param {string} uid
 * @returns {{type: string, payload: string}}
 */
export const select = uid => ({
  type: T.SELECT,
  payload: uid,
});

/**
 * Store action creator.
 * @param {{category: string, notes: string, title: string}}
 * @returns {function}
 */
export const store = ({ category, notes, title }) => {
  const { currentUser } = firebase.auth();

  return dispatch => firebase.database().ref(`/users/${currentUser.uid}/vehicles`)
    .push({ category, notes, title })
    .then(() => {
      dispatch({
        type: T.STORE,
      });
    });
};

/**
 * Update action creator.
 * @param {string} uid
 * @param {{category: string, notes: string, title: string}}
 * @returns {function}
 */
export const update = (uid, { category, notes, title }) => {
  const { currentUser } = firebase.auth();

  return dispatch => firebase.database().ref(`/users/${currentUser.uid}/vehicles/${uid}`)
    .set({ category, notes, title })
    .then(() => {
      dispatch({
        type: T.UPDATE,
      });
    });
};

/**
 * Update Create Form action creator.
 * @param {string} prop
 * @param {string} value
 * @returns {{type: string, payload: {prop: string, value: string}}}
 */
export const updateCreateForm = (prop, value) => ({
  type: T.CREATE_FORM_UPDATE,
  payload: {
    prop,
    value,
  },
});

/**
 * Update Edit Form action creator.
 * @param {string} prop
 * @param {string} value
 * @returns {{type: string, payload: {prop: string, value: string}}}
 */
export const updateEditForm = (prop, value) => ({
  type: T.EDIT_FORM_UPDATE,
  payload: {
    prop,
    value,
  },
});
