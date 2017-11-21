import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { getTheme } from 'react-native-material-kit';
import firebase from 'firebase';

import Loader from './Loader';
import Login from './Login';
import RecipeList from './RecipeList';
import store from '../store';

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

export default class App extends Component {
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
        return <RecipeList />;

      case false:
        return (
          <View>
            <Text style={styles.headline}>Bakebook</Text>
            <Login />
          </View>
        );

      default:
        return (
          <View>
            <Text style={styles.headline}>Bakebook</Text>
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
