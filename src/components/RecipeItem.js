import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import { getTheme } from 'react-native-material-kit';

import * as actions from '../actions';

const theme = getTheme();

const RecipeItem = props => (
  <TouchableWithoutFeedback onPress={() => props.selectVehicle(props.recipe.uid)}>
    <View style={theme.cardStyle}>
      <Image
        source={{ uri: 'http://www.getmdl.io/assets/demos/welcome_card.jpg' }}
        style={theme.cardImageStyle}
      />
      <Text style={theme.cardTitleStyle}>{props.recipe.title}</Text>
      <Text style={theme.cardContentStyle}>{props.recipe.category}</Text>
    </View>
  </TouchableWithoutFeedback>
);

RecipeItem.propTypes = {
  recipe: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
  }).isRequired,
  selectVehicle: PropTypes.func.isRequired,
};

export default connect(null, actions)(RecipeItem);
