import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { connect } from 'react-redux';

import { update, updateEditForm } from '../actions';

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 16,
  },
  container: {
    padding: 24,
  },
});

class EditVehicle extends Component {
  constructor(props) {
    super(props);

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    const {
      category, notes, title, uid,
    } = this.props;

    this.props.onUpdate(uid, { category, notes, title });
  }

  render() {
    const { onUpdateEditForm } = this.props;

    return (
      <ScrollView style={styles.container}>
        <TextInput
          onChangeText={value => onUpdateEditForm('title', value)}
          value={this.props.title}
          placeholder="Title"
        />
        <TextInput
          onChangeText={value => onUpdateEditForm('category', value)}
          value={this.props.category}
          placeholder="Category"
        />
        <TextInput
          onChangeText={value => onUpdateEditForm('notes', value)}
          multiline
          value={this.props.notes}
          placeholder="Notes"
        />
        <View style={styles.buttonContainer}>
          <Button onPress={this.onButtonPress} title="Update vehicle" />
        </View>
      </ScrollView>
    );
  }
}

EditVehicle.propTypes = {
  // State
  category: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  // Dispatch
  onUpdate: PropTypes.func.isRequired,
  onUpdateEditForm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { title, category, notes } = state.vehicles.editForm;

  return {
    category,
    notes,
    title,
    uid: state.vehicles.editing,
  };
};

const mapDispatchToProps = dispatch => ({
  onUpdate: (...args) => dispatch(update(...args)),
  onUpdateEditForm: (...args) => dispatch(updateEditForm(...args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditVehicle);
