import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getTheme } from 'react-native-material-kit';
import firebase from 'firebase';

import Loader from './Loader';
import Login from './Login';

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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: null,
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyADc229G7MWz52sJ0V_KKMJWoIywjTcEfQ',
      authDomain: 'loginov-rocks-bakebook.firebaseapp.com',
      databaseURL: 'https://loginov-rocks-bakebook.firebaseio.com',
      projectId: 'loginov-rocks-bakebook',
      storageBucket: 'loginov-rocks-bakebook.appspot.com',
      messagingSenderId: '576336141494',
    });

    firebase.auth().onAuthStateChanged(user => this.setState({ isAuthenticated: !!user }));
  }

  renderInitialView() {
    switch (this.state.isAuthenticated) {
      case true:
        return <Text>Authenticated</Text>;

      case false:
        return <Login />;

      default:
        return <Loader />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Bakebook</Text>
        {this.renderInitialView()}
      </View>
    );
  }
}

export default App;
