import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

import Login from '../../user/components/Login';

const Guest = ({ styles }) => (
  <View style={styles.container}>
    <Text style={styles.headline}>Carbook</Text>
    <Login />
  </View>
);

Guest.propTypes = {
  styles: PropTypes.shape().isRequired,
};

export default Guest;
