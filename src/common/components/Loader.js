import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View } from 'react-native';
import { getTheme } from 'react-native-material-kit';

const theme = getTheme();

const Loader = ({ size }) => (
  <View>
    <ActivityIndicator size={size} color={theme.accentColor} />
  </View>
);

Loader.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Loader.defaultProps = {
  size: 'large',
};

export default Loader;
