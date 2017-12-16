import PropTypes from 'prop-types';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import { deselect, destroy, edit } from '../actions';

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  category: {
    color: 'black',
    fontSize: 16,
  },
  container: {
    padding: 24,
  },
  headline: {
    borderBottomWidth: 1,
    borderColor: 'silver',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    fontSize: 32,
    padding: 8,
  },
  notes: {
    fontSize: 16,
    marginTop: 8,
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
});

const VehicleView = (props) => {
  const {
    category, notes, title, uid,
  } = props.vehicle;

  return (
    <ScrollView>
      <View style={styles.headline}>
        <Icon name="arrow-left" onPress={() => props.onDeselect()} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.container}>
        {category ? <Text style={styles.category}>Category: {category}</Text> : null}
        {notes ? <Text style={styles.notes}>Notes: {notes}</Text> : null}
        <View style={styles.buttonContainer}>
          <Button onPress={() => props.onEdit(uid)} title="Edit" />
          <Button onPress={() => props.onDestroy(uid)} title="Delete" />
        </View>
      </View>
    </ScrollView>
  );
};

VehicleView.propTypes = {
  // State
  vehicle: PropTypes.shape({
    category: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
  }).isRequired,
  // Dispatch
  onDeselect: PropTypes.func.isRequired,
  onDestroy: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  vehicle: state.vehicles.selected,
});

const mapDispatchToProps = dispatch => ({
  onDeselect: (...args) => dispatch(deselect(...args)),
  onDestroy: (...args) => dispatch(destroy(...args)),
  onEdit: (...args) => dispatch(edit(...args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleView);
