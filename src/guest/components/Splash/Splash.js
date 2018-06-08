import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Loader from '../../../shared/components/Loader';
import theme from '../../../theme';

let styles = {
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    flex: 1,
    justifyContent: 'center',
  },
  headline: {
    color: theme.colors.primaryText,
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
