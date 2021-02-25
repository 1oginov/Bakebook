import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import VehicleForm from './VehicleForm';
import { store } from '../actions';

class CreateVehicle extends Component {
  static navigationOptions = {
    tabBarLabel: 'Create vehicle',
    tabBarIcon: ({ tintColor }) => <Icon name="plus-box" size={24} style={{ color: tintColor }} />,
  };

  constructor(props) {
    super(props);

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress({ category, notes, title }) {
    this.props.onStore({ category, notes, title });

    this.props.navigation.navigate('VehicleList');
  }

  render() {
    return (
      <ScrollView>
        <VehicleForm
          buttonTitle="Store vehicle"
          isLoading={false}
          onSubmit={this.onButtonPress}
        />
      </ScrollView>
    );
  }
}

CreateVehicle.propTypes = {
  // Dispatch
  onStore: PropTypes.func.isRequired,
  // Other
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  onStore: (...args) => dispatch(store(...args)),
});

export default connect(null, mapDispatchToProps)(CreateVehicle);
