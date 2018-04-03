import firebase from 'firebase';

import * as T from './types';

/**
 * Login action creator.
 * @param {string} email
 * @param {string} password
 * @returns {function}
 */
export const login = (email, password) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({
          type: T.LOGGED_IN,
        });
      })
      .catch(error => {
        dispatch({
          type: T.LOGIN_ERROR,
          payload: error,
        });
      });
  };
};

/**
 * Logout action creator.
 * @returns {function}
 */
export const logout = () => {
  return dispatch => {
    firebase.auth().signOut()
      .then(() => {
        dispatch({
          type: T.LOGGED_OUT,
        });
      })
      .catch(error => {
        dispatch({
          type: T.LOGOUT_ERROR,
          payload: error,
        });
      });
  };
};

/**
 * Sign up action creator.
 * @param {string} email
 * @param {string} password
 * @returns {function}
 */
export const signUp = (email, password) => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({
          type: T.SIGNED_UP,
        });
      })
      .catch(error => {
        dispatch({
          type: T.SIGN_UP_ERROR,
          payload: error,
        });
      });
  };
};
