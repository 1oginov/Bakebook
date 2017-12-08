import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { getTheme } from 'react-native-material-kit';
import firebase from 'firebase';

import Loader from './Loader';
import Login from './Login';
import Navigation from './Navigation';
import store from '../store';

const theme = getTheme();

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  splash: {
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

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: null,
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAS2IZMyU2IkRsKoVFuUOrcVZ4EE-9VNeE',
      authDomain: 'loginov-rocks-carbook.firebaseapp.com',
      databaseURL: 'https://loginov-rocks-carbook.firebaseio.com',
      projectId: 'loginov-rocks-carbook',
      storageBucket: 'loginov-rocks-carbook.appspot.com',
      messagingSenderId: '740978136427',
    });

    firebase.auth().onAuthStateChanged(user => this.setState({ isAuthenticated: !!user }));
  }

  renderInitialView() {
    switch (this.state.isAuthenticated) {
      case true:
        return <Navigation />;

      case false:
        return (
          <View style={styles.splash}>
            <Text style={styles.headline}>Carbook</Text>
            <Login />
          </View>
        );

      default:
        return (
          <View style={styles.splash}>
            <Text style={styles.headline}>Carbook</Text>
            <Loader />
          </View>
        );
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {this.renderInitialView()}
        </View>
      </Provider>
    );
  }
}
