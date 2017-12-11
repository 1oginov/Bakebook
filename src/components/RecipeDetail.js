import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';

import * as actions from '../actions';
import DetailsView from './DetailsView';
import UpdateRecipe from './UpdateRecipe';

const RecipeDetail = props => (
  <View>
    {props.isEditingVehicle ? <UpdateRecipe /> : <DetailsView />}
  </View>
);

RecipeDetail.propTypes = {
  isEditingVehicle: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isEditingVehicle: !!state.RecipesReducer.editingVehicle,
});

export default connect(mapStateToProps, actions)(RecipeDetail);
