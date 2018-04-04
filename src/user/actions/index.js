import firebase from 'firebase';

import * as T from './types';

/**
 * Login action creator.
 * @param {string} email
 * @param {string} password
 * @return {Function}
 */
export const login = (email, password) => ((dispatch) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({
        type: T.LOGGED_IN,
      });
    })
    .catch((error) => {
      dispatch({
        type: T.LOGIN_ERROR,
        payload: error,
      });
    });
});

/**
 * Logout action creator.
 * @return {Function}
 */
export const logout = () => ((dispatch) => {
  firebase.auth().signOut()
    .then(() => {
      dispatch({
        type: T.LOGGED_OUT,
      });
    })
    .catch((error) => {
      dispatch({
        type: T.LOGOUT_ERROR,
        payload: error,
      });
    });
});

/**
 * Sign up action creator.
 * @param {string} email
 * @param {string} password
 * @return {Function}
 */
export const signUp = (email, password) => ((dispatch) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({
        type: T.SIGNED_UP,
      });
    })
    .catch((error) => {
      dispatch({
        type: T.SIGN_UP_ERROR,
        payload: error,
      });
    });
});

/**
 * Watch auth state action creator.
 * @return {Function}
 */
export const watchAuthState = () => ((dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    dispatch({
      type: T.AUTH_STATE_CHANGED,
      payload: !!user,
    });
  });
});
