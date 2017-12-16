import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator } from 'react-native';

const Loader = ({ color, size }) => (
  <ActivityIndicator color={color} size={size} />
);

Loader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Loader.defaultProps = {
  color: 'gray',
  size: 'large',
};

export default Loader;
