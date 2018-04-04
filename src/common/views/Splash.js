import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Loader from '../components/Loader';
import config from '../../config';

let styles = {
  container: {
    alignItems: 'center',
    backgroundColor: config.colors.background,
    flex: 1,
    justifyContent: 'center',
  },
  headline: {
    color: config.colors.primaryText,
    fontSize: 32,
    marginBottom: 16,
    textAlign: 'center',
  },
};

styles = StyleSheet.create(styles);

const Splash = () => (
  <View style={styles.container}>
    <Text style={styles.headline}>Carbook</Text>
    <Loader />
  </View>
);

export default Splash;
