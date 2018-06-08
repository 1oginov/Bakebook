import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isEmpty, isLoaded, withFirebase } from 'react-redux-firebase';
import { compose, withProps } from 'recompose';

const mapStateToProps = ({ firebase: { auth } }) => ({ auth });

/**
 * Enhancer to provide authentication props.
 * @type {*}
 */
const withAuth = compose(
  withFirebase,
  connect(mapStateToProps),
  withProps(({ auth }) => ({
    isAuthenticated: isLoaded(auth) && !isEmpty(auth),
    isAuthLoaded: isLoaded(auth),
    isAuthEmpty: isEmpty(auth),
  })),
);

/**
 * Auth prop types.
 * @type {Object}
 */
const propTypes = {
  auth: PropTypes.shape({}).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isAuthLoaded: PropTypes.bool.isRequired,
  isAuthEmpty: PropTypes.bool.isRequired,
};

export {
  withAuth as default,
  propTypes,
};
