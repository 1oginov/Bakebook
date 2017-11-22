import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getTheme, MKButton, MKColor, MKTextField } from 'react-native-material-kit';
import firebase from 'firebase';

import Loader from './Loader';

const theme = getTheme();

const styles = StyleSheet.create({
  textInput: {
    color: 'white',
  },
  error: {
    color: MKColor.Red,
  },
});

const Button = MKButton.coloredButton()
  .withBackgroundColor(theme.accentColor)
  .withText('LOGIN')
  .build();

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
      isLoading: false,
    };

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({
      error: '',
      isLoading: true,
    });

    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onAuthSuccess.bind(this))
      .catch(() => {
        firebase.auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onAuthSuccess.bind(this))
          .catch(this.onAuthFailed.bind(this));
      });
  }

  onAuthSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      isLoading: false,
    });
  }

  onAuthFailed() {
    this.setState({
      error: 'Authentication failed',
      isLoading: false,
    });
  }

  renderButton() {
    if (this.state.isLoading) {
      return <Loader />;
    }

    return <Button onPress={this.onButtonPress} />;
  }

  render() {
    return (
      <View>
        <Text>Login or sign up</Text>
        <MKTextField
          text={this.state.email}
          onTextChange={email => this.setState({ email })}
          textInputStyle={styles.textInput}
          placeholder="Email"
        />
        <MKTextField
          text={this.state.password}
          onTextChange={password => this.setState({ password })}
          textInputStyle={styles.textInput}
          placeholder="Password"
          password
        />
        {this.renderButton()}
        <Text style={styles.error}>{this.state.error}</Text>
      </View>
    );
  }
}
