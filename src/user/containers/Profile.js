import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    return <View>Profile</View>;
  }
}

const mapStateToProps = state => state.user;

const mapDispatchToProps = dispatch => ({
  //
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
