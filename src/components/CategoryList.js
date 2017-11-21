import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class CategoryList extends Component {
  static navigationOptions = {
    tabBarLabel: 'Categories',
    tabBarIcon: ({ tintColor }) => <Icon name="tag" size={24} style={{ color: tintColor }} />,
  };

  render() {
    return (
      <View>
        <Text>Categories</Text>
      </View>
    );
  }
}
