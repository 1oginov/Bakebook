import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import { fetch } from '../actions';
import VehicleDetail from './VehicleDetail';
import VehicleItem from './VehicleItem';

class VehicleList extends Component {
  static navigationOptions = {
    tabBarLabel: 'Vehicles',
    tabBarIcon: ({ tintColor }) => <Icon name="cards" size={24} style={{ color: tintColor }} />,
  };

  componentWillMount() {
    this.props.onFetch();
  }

  render() {
    if (this.props.isSelected) {
      return <VehicleDetail />;
    }

    return (
      <FlatList
        data={this.props.list}
        keyExtractor={item => item.uid}
        renderItem={({ item }) => <VehicleItem vehicle={item} />}
      />
    );
  }
}

VehicleList.propTypes = {
  // State
  isSelected: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  // Dispatch
  onFetch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isSelected: !!state.vehicles.selected,
  list: Object.values(state.vehicles.list),
});

const mapDispatchToProps = dispatch => ({
  onFetch: (...args) => dispatch(fetch(...args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleList);
