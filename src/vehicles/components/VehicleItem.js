import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { select } from '../actions';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
});

const VehicleItem = (props) => {
  const { category, title, uid } = props.vehicle;

  return (
    <TouchableOpacity onPress={() => props.onSelect(uid)} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{category}</Text>
    </TouchableOpacity>
  );
};

VehicleItem.propTypes = {
  vehicle: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
  }).isRequired,
  // Dispatch
  onSelect: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSelect: (...args) => dispatch(select(...args)),
});

export default connect(null, mapDispatchToProps)(VehicleItem);
