import firebase from 'firebase';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import Loader from './common/components/Loader';
import Login from './user/components/Login';
import Navigation from './common/components/Navigation';
import store from './store';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  headline: {
    color: 'black',
    fontSize: 32,
    marginBottom: 16,
    textAlign: 'center',
  },
  splash: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
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
      apiKey: 'AIzaSyAS2IZMyU2IkRsKoVFuUOrcVZ4EE-9VNeE',
      authDomain: 'loginov-rocks-carbook.firebaseapp.com',
      databaseURL: 'https://loginov-rocks-carbook.firebaseio.com',
      projectId: 'loginov-rocks-carbook',
      storageBucket: 'loginov-rocks-carbook.appspot.com',
      messagingSenderId: '740978136427',
    });

    firebase.auth()
      .onAuthStateChanged(user => this.setState({
        isAuthenticated: !!user,
      }));
  }

  renderContents() {
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
          {this.renderContents()}
        </View>
      </Provider>
    );
  }
}

export default App;
