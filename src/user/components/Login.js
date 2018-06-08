import firebase from 'firebase';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import Loader from '../../shared/components/Loader';

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 16,
  },
  container: {
    alignSelf: 'stretch',
    marginLeft: 32,
    marginRight: 32,
  },
  error: {
    alignSelf: 'center',
    color: 'red',
    marginTop: 24,
  },
  headline: {
    alignSelf: 'center',
    marginBottom: 8,
  },
});

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      error: '',
      isLoading: false,
      password: '',
    };

    this.onAuthFailed = this.onAuthFailed.bind(this);
    this.onAuthSuccess = this.onAuthSuccess.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onAuthFailed() {
    this.setState({
      error: 'Authentication failed',
      isLoading: false,
      password: '',
    });
  }

  onAuthSuccess() {
    this.setState({
      email: '',
      error: '',
      isLoading: false,
      password: '',
    });
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({
      error: '',
      isLoading: true,
    });

    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onAuthSuccess)
      .catch(() => {
        firebase.auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onAuthSuccess)
          .catch(this.onAuthFailed);
      });
  }

  renderButton() {
    if (this.state.isLoading) {
      return <Loader />;
    }

    return <Button onPress={this.onButtonPress} title="Login" />;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Login or Sign up</Text>
        <TextInput
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          placeholder="Email"
        />
        <TextInput
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          placeholder="Password"
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          {this.renderButton()}
        </View>
        <Text style={styles.error}>{this.state.error}</Text>
      </View>
    );
  }
}

export default Login;
