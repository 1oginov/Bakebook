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

    this.props.updateVehicle({
      uid, title, category, notes,
    });
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>Update recipe</Text>
        <MKTextField
          value={this.props.title}
          onChangeText={value => this.props.updateVehicleForm({ prop: 'title', value })}
          placeholder="Title"
        />
        <MKTextField
          value={this.props.category}
          onChangeText={value => this.props.updateVehicleForm({ prop: 'category', value })}
          placeholder="Category"
        />
        <MKTextField
          value={this.props.notes}
          onChangeText={value => this.props.updateVehicleForm({ prop: 'notes', value })}
          placeholder="Notes"
        />
        <Button onPress={this.onButtonPress} />
      </ScrollView>
    );
  }
}

UpdateRecipe.propTypes = {
  uid: PropType.string.isRequired,
  title: PropType.string.isRequired,
  category: PropType.string.isRequired,
  notes: PropType.string.isRequired,
  updateVehicle: PropType.func.isRequired,
  updateVehicleForm: PropType.func.isRequired,
};

const mapStateToProps = (state) => {
  const {
    uid, title, category, notes,
  } = state.RecipesReducer;

  return {
    uid, title, category, notes,
  };
};

export default connect(mapStateToProps, actions)(UpdateRecipe);
