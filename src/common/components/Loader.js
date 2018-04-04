import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator } from 'react-native';

import config from '../../config';

const Loader = ({ color, size }) => (
  <ActivityIndicator color={color} size={size} />
);

Loader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Loader.defaultProps = {
  color: config.colors.hintText,
  size: 'large',
};

export default Loader;
