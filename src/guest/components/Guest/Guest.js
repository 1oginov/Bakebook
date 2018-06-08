import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import theme from '../../../theme';
import Login from '../../../user/components/Login';

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

const Guest = () => (
  <View style={styles.container}>
    <Text style={styles.headline}>Carbook</Text>
    <Login />
  </View>
);

export default Guest;
