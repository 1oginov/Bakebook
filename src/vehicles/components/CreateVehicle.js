import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import { store, updateCreateForm } from '../actions';

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 16,
  },
  container: {
    padding: 24,
  },
});

class CreateVehicle extends Component {
  static navigationOptions = {
    tabBarLabel: 'Create vehicle',
    tabBarIcon: ({ tintColor }) => <Icon name="plus-box" size={24} style={{ color: tintColor }} />,
  };

  constructor(props) {
    super(props);

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    const { category, notes, title } = this.props;

    this.props.onStore({ category, notes, title });

    this.props.navigation.navigate('VehicleList');
  }

  render() {
    const { onUpdateCreateForm } = this.props;

    return (
      <ScrollView style={styles.container}>
        <TextInput
          onChangeText={value => onUpdateCreateForm('title', value)}
          value={this.props.title}
          placeholder="Title"
        />
        <TextInput
          onChangeText={value => onUpdateCreateForm('category', value)}
          value={this.props.category}
          placeholder="Category"
        />
        <TextInput
          onChangeText={value => onUpdateCreateForm('notes', value)}
          multiline
          value={this.props.notes}
          placeholder="Notes"
        />
        <View style={styles.buttonContainer}>
          <Button onPress={this.onButtonPress} title="Store vehicle" />
        </View>
      </ScrollView>
    );
  }
}

CreateVehicle.propTypes = {
  // State
  category: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // Dispatch
  onStore: PropTypes.func.isRequired,
  onUpdateCreateForm: PropTypes.func.isRequired,
  // Other
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};

const mapStateToProps = (state) => {
  const { title, category, notes } = state.vehicles.createForm;

  return { title, category, notes };
};

const mapDispatchToProps = dispatch => ({
  onStore: (...args) => dispatch(store(...args)),
  onUpdateCreateForm: (...args) => dispatch(updateCreateForm(...args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateVehicle);
