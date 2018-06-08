import firebase from 'firebase';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import config from '../../config';
import Navigator from '../Navigator';
import { watchAuthState } from '../../user/actions';
import Guest from '../../guest/components/Guest';
import Splash from '../../guest/components/Splash';

class Root extends Component {
  componentDidMount() {
    firebase.initializeApp(config.firebase);

    this.props.actions.watchAuthState();
  }

  render() {
    switch (this.props.isLoggedIn) {
      case true:
        return <Navigator />;

      case false:
        return <Guest />;

      default:
        return <Splash />;
    }
  }
}

Root.propTypes = {
  // State
  isLoggedIn: PropTypes.bool,
  // Dispatch
  actions: PropTypes.shape({
    watchAuthState: PropTypes.func,
  }).isRequired,
};

Root.defaultProps = {
  isLoggedIn: null,
};

const mapStateToProps = state => state.user;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ watchAuthState }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
