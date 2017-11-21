import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getTheme } from 'react-native-material-kit';

import Loader from './Loader';

const theme = getTheme();

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.primaryColor,
    flex: 1,
    justifyContent: 'center',
  },
  headline: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <Text style={styles.headline}>Bakebook</Text>
    <Loader />
  </View>
);

export default App;
