import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import DetailsView from './DetailsView';
import UpdateRecipe from './UpdateRecipe';

const VehicleDetail = props => (props.isEditing ? <UpdateRecipe /> : <DetailsView />);

VehicleDetail.propTypes = {
  isEditing: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isEditing: !!state.vehicles.editing,
});

export default connect(mapStateToProps)(VehicleDetail);
