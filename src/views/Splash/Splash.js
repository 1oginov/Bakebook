import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

import Loader from '../../shared/components/Loader';

const Splash = ({ styles }) => (
  <View style={styles.container}>
    <Text style={styles.headline}>Carbook</Text>
    <Loader />
  </View>
);

Splash.propTypes = {
  styles: PropTypes.shape().isRequired,
};

export default Splash;
