import * as T from '../actions/types';

/**
 * Initial state.
 * @type {{
 *   isLoggedIn: boolean,
 *   justSignedUp: boolean,
 *   loginError: Object|null,
 *   logoutError: Object|null,
 *   signUpError: Object|null
 * }}
 */
const initialState = {
  isLoggedIn: false,
  justSignedUp: false,
  loginError: null,
  logoutError: null,
  signUpError: null,
};

/**
 * User reducer.
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case T.AUTH_STATE_CHANGED:
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    case T.LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
        loginError: null,
      };

    case T.LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false,
        logoutError: null,
      };

    case T.LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
      };

    case T.LOGOUT_ERROR:
      return {
        ...state,
        logoutError: action.payload,
      };

    case T.SIGNED_UP:
      return {
        ...state,
        isLoggedIn: true,
        justSignedUp: true,
        loginError: null,
        signUpError: null,
      };

    case T.SIGN_UP_ERROR:
      return {
        ...state,
        loginError: null,
        signUpError: action.payload,
      };

    default:
      return state;
  }
};
