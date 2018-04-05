import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

class Dashboard extends Component {
  static navigationOptions = {
    tabBarLabel: 'Dashboard',
    tabBarIcon: ({ tintColor }) => <Icon name="cards" size={24} style={{ color: tintColor }} />,
  };

  render() {
    return <View>Dashboard</View>;
  }
}

const mapStateToProps = state => state.dashboard;

const mapDispatchToProps = dispatch => ({
  //
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
