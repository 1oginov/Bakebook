import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView, Text } from 'react-native';
import { getTheme, MKButton, MKTextField } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as actions from '../actions';

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
    const { title, category, notes } = this.props;

    this.props.createNewRecipe({ title, category, notes });

    this.props.navigation.navigate('RecipeList');
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>Add recipe</Text>
        <MKTextField
          value={this.props.title}
          onChangeText={value => this.props.formUpdate({ prop: 'title', value })}
          placeholder="Title"
        />
        <MKTextField
          value={this.props.category}
          onChangeText={value => this.props.formUpdate({ prop: 'category', value })}
          placeholder="Category"
        />
        <MKTextField
          value={this.props.notes}
          onChangeText={value => this.props.formUpdate({ prop: 'notes', value })}
          placeholder="Notes"
        />
        <Button onPress={this.onButtonPress} />
      </ScrollView>
    );
  }
}

AddRecipe.propTypes = {
  title: PropType.string.isRequired,
  category: PropType.string.isRequired,
  notes: PropType.string.isRequired,
  createNewRecipe: PropType.func.isRequired,
  navigation: PropType.shape({ navigate: PropType.func }).isRequired,
  formUpdate: PropType.func.isRequired,
};

const mapStateToProps = (state) => {
  const { title, category, notes } = state.RecipesReducer;

  return { title, category, notes };
};

export default connect(mapStateToProps, actions)(AddRecipe);
