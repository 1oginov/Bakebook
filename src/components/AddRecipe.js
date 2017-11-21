import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class AddRecipe extends Component {
  static navigationOptions = {
    tabBarLabel: 'Add recipe',
    tabBarIcon: ({ tintColor }) => <Icon name="plus-box" size={24} style={{ color: tintColor }} />,
  };

  render() {
    return (
      <View>
        <Text>Add recipe</Text>
      </View>
    );
  }
}
