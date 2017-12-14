import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { SectionList, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import VehicleItem from './VehicleItem';

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: 'silver',
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
  },
});

class CategoryList extends Component {
  static navigationOptions = {
    tabBarLabel: 'Categories',
    tabBarIcon: ({ tintColor }) => <Icon name="tag" size={24} style={{ color: tintColor }} />,
  };

  /**
   * TODO: Navigate to `VehicleList` when `VehicleItem.onSelect` invoked.
   */
  render() {
    return (
      <SectionList
        keyExtractor={item => item.uid}
        renderItem={({ item }) => <VehicleItem vehicle={item} />}
        renderSectionHeader={({ section }) =>
          <Text style={styles.sectionHeader}>{section.title}</Text>}
        sections={this.props.categories}
      />
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const list = Object.values(state.vehicles.list);

  const categories = _.chain(list)
    .groupBy('category')
    .map((value, key) => ({
      title: key,
      data: value,
    }))
    .value();

  return { categories };
};

export default connect(mapStateToProps)(CategoryList);
