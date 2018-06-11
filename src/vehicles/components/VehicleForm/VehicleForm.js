import PropTypes from 'prop-types';
import React from 'react';
import { Button, View } from 'react-native';
import { TextInput } from 'react-native-redux-form';

import Loader from '../../../shared/components/Loader';

const VehicleForm = ({
  buttonTitle, handleSubmit, isLoading, styles,
}) => (
  <View style={styles.container}>

    <TextInput
      name="title"
      placeholder="Title"
    />

    <TextInput
      name="category"
      placeholder="Category"
    />

    <TextInput
      multiline
      name="notes"
      placeholder="Notes"
    />

    <View styles={styles.buttonContainer}>
      {isLoading ?
        <Loader /> :
        <Button onPress={handleSubmit} title={buttonTitle} />}
    </View>

  </View>
);

VehicleForm.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  styles: PropTypes.shape().isRequired,
};

export default VehicleForm;
