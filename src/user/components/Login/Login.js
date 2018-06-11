import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

import LoginForm from '../LoginForm';

const Login = ({
  error, handleSubmit, isLoading, styles,
}) => (
  <View style={styles.container}>

    <Text style={styles.headline}>Login or Sign up</Text>

    <LoginForm isLoading={isLoading} onSubmit={handleSubmit} />

    {!!error &&
    <Text style={styles.error}>{error}</Text>}

  </View>
);

Login.propTypes = {
  error: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  styles: PropTypes.shape().isRequired,
};

export default Login;
