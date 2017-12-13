import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from 'lodash';

import CategoryItem from './CategoryItem';

class CategoryList extends Component {
  static navigationOptions = {
    tabBarLabel: 'Categories',
    tabBarIcon: ({ tintColor }) => <Icon name="tag" size={24} style={{ color: tintColor }} />,
  };

  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: ((r1, r2) => r1 !== r2),
    });

    this.dataSource = ds.cloneWithRows(this.props.categories);

    return (
      <View>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={rowData => <CategoryItem category={rowData} />}
        />
      </View>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const recipes = _.map(state.vehicles.list, (val, uid) => ({ ...val, uid }));

  const categories = _.chain(recipes)
    .groupBy('category')
    .map((value, key) => ({
      title: key,
      recipes: value,
    }))
    .value();

  return { categories };
};

export default connect(mapStateToProps)(CategoryList);
