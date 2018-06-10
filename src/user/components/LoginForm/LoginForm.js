import PropTypes from 'prop-types';
import React from 'react';
import { Button, View } from 'react-native';
import { TextInput } from 'react-native-redux-form';

import Loader from '../../../shared/components/Loader';

const LoginForm = ({ handleSubmit, isLoading, styles }) => (
  <View>

    <TextInput
      name="email"
      placeholder="Email"
    />

    <TextInput
      name="password"
      placeholder="Password"
      secureTextEntry
    />

    <View style={styles.buttonContainer}>
      {isLoading ?
        <Loader /> :
        <Button onPress={handleSubmit} title="Login" />}
    </View>

  </View>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  styles: PropTypes.shape().isRequired,
};

export default LoginForm;
