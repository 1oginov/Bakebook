import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

const Dashboard = ({ styles }) => (
  <View style={styles.container}>
    <Text style={styles.headline}>Dashboard</Text>
  </View>
);

Dashboard.propTypes = {
  styles: PropTypes.shape().isRequired,
};

export default Dashboard;
