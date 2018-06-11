import PropTypes from 'prop-types';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const tabBarIcon = ({ tintColor }) => (
  <Icon name="speedometer" size={24} style={{ color: tintColor }} />
);

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default tabBarIcon;
