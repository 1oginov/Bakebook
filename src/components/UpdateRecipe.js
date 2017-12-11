import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView, Text } from 'react-native';
import { getTheme, MKButton, MKTextField } from 'react-native-material-kit';

import * as actions from '../actions';

const theme = getTheme();

const Button = MKButton.coloredButton()
  .withBackgroundColor(theme.accentColor)
  .withText('UPDATE')
  .build();

class UpdateRecipe extends Component {
  constructor(props) {
    super(props);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    const {
      uid, title, category, notes,
    } = this.props;

    this.props.updateVehicle(uid, { category, notes, title });
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>Update recipe</Text>
        <MKTextField
          value={this.props.title}
          onChangeText={value => this.props.updateVehicleEditForm('title', value)}
          placeholder="Title"
        />
        <MKTextField
          value={this.props.category}
          onChangeText={value => this.props.updateVehicleEditForm('category', value)}
          placeholder="Category"
        />
        <MKTextField
          value={this.props.notes}
          onChangeText={value => this.props.updateVehicleEditForm('notes', value)}
          placeholder="Notes"
        />
        <Button onPress={this.onButtonPress} />
      </ScrollView>
    );
  }
}

UpdateRecipe.propTypes = {
  category: PropType.string.isRequired,
  notes: PropType.string.isRequired,
  title: PropType.string.isRequired,
  uid: PropType.string.isRequired,
  updateVehicle: PropType.func.isRequired,
  updateVehicleEditForm: PropType.func.isRequired,
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

export default connect(mapStateToProps, actions)(UpdateRecipe);
