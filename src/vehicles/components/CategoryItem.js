import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';
import { getTheme } from 'react-native-material-kit';

const theme = getTheme();

const CategoryItem = props => (
  <View style={theme.cardStyle}>
    <Image
      source={{ uri: 'http://www.getmdl.io/assets/demos/welcome_card.jpg' }}
      style={theme.cardImageStyle}
    />
    <Text style={theme.cardTitleStyle}>{props.category.title}</Text>
    {props.category.recipes
      .map(recipe => <Text key={recipe.uid} style={theme.cardContentStyle}>{recipe.title}</Text>)}
  </View>
);

CategoryItem.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    recipes: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default CategoryItem;
