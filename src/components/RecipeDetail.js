import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image, ScrollView, Text, View } from 'react-native';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as actions from '../actions';

const theme = getTheme();

const RecipeDetail = props => (
  <ScrollView>
    <Icon name="close" size={48} onPress={() => props.selectNone()} />
    <View style={theme.cardStyle}>
      <Image
        source={{ uri: 'http://www.getmdl.io/assets/demos/welcome_card.jpg' }}
        style={theme.cardImageStyle}
      />
      <Text style={theme.cardTitleStyle}>{props.recipe.title}</Text>
      <Text style={theme.cardContentStyle}>{props.recipe.category}</Text>
      <Text style={theme.cardContentStyle}>{props.recipe.notes}</Text>
    </View>
  </ScrollView>
);

RecipeDetail.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    notes: PropTypes.string,
  }).isRequired,
  selectNone: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  recipe: state.RecipesReducer.recipeSelected,
});

export default connect(mapStateToProps, actions)(RecipeDetail);
