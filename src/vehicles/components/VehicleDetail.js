import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import EditVehicle from './EditVehicle';
import VehicleView from './VehicleView';

const VehicleDetail = props => (props.isEditing ? <EditVehicle /> : <VehicleView />);

VehicleDetail.propTypes = {
  isEditing: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isEditing: !!state.vehicles.editing,
});

export default connect(mapStateToProps)(VehicleDetail);
