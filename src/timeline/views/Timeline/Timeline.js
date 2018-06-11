import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

const Timeline = ({ styles }) => (
  <View style={styles.container}>
    <Text style={styles.headline}>Timeline</Text>
  </View>
);

Timeline.propTypes = {
  styles: PropTypes.shape().isRequired,
};

export default Timeline;
