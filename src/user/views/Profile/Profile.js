import PropTypes from 'prop-types';
import React from 'react';
import { Button, Text, View } from 'react-native';

const Profile = ({ handleLogout, styles }) => (
  <View style={styles.container}>

    <Text style={styles.headline}>Profile</Text>

    <Button onPress={handleLogout} title="Logout" />

  </View>
);

Profile.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  styles: PropTypes.shape().isRequired,
};

export default Profile;
