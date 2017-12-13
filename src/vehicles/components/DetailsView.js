import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image, ScrollView, Text, View } from 'react-native';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as actions from '../actions';

const theme = getTheme();

const DetailsView = props => (
  <ScrollView>
    <Icon name="close" size={48} onPress={() => props.deselect()} />
    <Icon name="pencil" size={48} onPress={() => props.edit(props.recipe.uid)} />
    <Icon name="delete" size={48} onPress={() => props.destroy(props.recipe.uid)} />
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

DetailsView.propTypes = {
  recipe: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
  }).isRequired,
  deselect: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  destroy: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  recipe: state.vehicles.selected,
});

export default connect(mapStateToProps, actions)(DetailsView);
