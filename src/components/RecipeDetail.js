import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';

import * as actions from '../actions';
import DetailsView from './DetailsView';
import UpdateRecipe from './UpdateRecipe';

const RecipeDetail = props => <View>{props.isUpdating ? <UpdateRecipe /> : <DetailsView />}</View>;

RecipeDetail.propTypes = {
  isUpdating: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isUpdating: state.RecipesReducer.isUpdating,
});

export default connect(mapStateToProps, actions)(RecipeDetail);
