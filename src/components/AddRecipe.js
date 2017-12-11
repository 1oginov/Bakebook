import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView, Text } from 'react-native';
import { getTheme, MKButton, MKTextField } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as actions from '../vehicles/actions';

const theme = getTheme();

const Button = MKButton.coloredButton()
  .withBackgroundColor(theme.accentColor)
  .withText('ADD')
  .build();

class AddRecipe extends Component {
  static navigationOptions = {
    tabBarLabel: 'Add recipe',
    tabBarIcon: ({ tintColor }) => <Icon name="plus-box" size={24} style={{ color: tintColor }} />,
  };

  constructor(props) {
    super(props);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    const { category, notes, title } = this.props;

    this.props.store({ category, notes, title });

    this.props.navigation.navigate('RecipeList');
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>Add recipe</Text>
        <MKTextField
          value={this.props.title}
          onChangeText={value => this.props.updateCreateForm('title', value)}
          placeholder="Title"
        />
        <MKTextField
          value={this.props.category}
          onChangeText={value => this.props.updateCreateForm('category', value)}
          placeholder="Category"
        />
        <MKTextField
          value={this.props.notes}
          onChangeText={value => this.props.updateCreateForm('notes', value)}
          placeholder="Notes"
        />
        <Button onPress={this.onButtonPress} />
      </ScrollView>
    );
  }
}

AddRecipe.propTypes = {
  category: PropType.string.isRequired,
  notes: PropType.string.isRequired,
  title: PropType.string.isRequired,
  store: PropType.func.isRequired,
  navigation: PropType.shape({ navigate: PropType.func }).isRequired,
  updateCreateForm: PropType.func.isRequired,
};

const mapStateToProps = (state) => {
  const { title, category, notes } = state.vehicles.createForm;

  return { title, category, notes };
};

export default connect(mapStateToProps, actions)(AddRecipe);
