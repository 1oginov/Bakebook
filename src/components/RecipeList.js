import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from 'lodash';

import RecipeDetail from './RecipeDetail';
import RecipeItem from './RecipeItem';
import { fetchVehicles } from '../actions';

const styles = {
  container: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    flexGrow: 1,
  },
};

class RecipeList extends Component {
  static navigationOptions = {
    tabBarLabel: 'Recipes',
    tabBarIcon: ({ tintColor }) => <Icon name="cards" size={24} style={{ color: tintColor }} />,
  };

  componentWillMount() {
    this.props.fetchVehicles();
  }

  renderInitialView() {
    const ds = new ListView.DataSource({
      rowHasChanged: ((r1, r2) => r1 !== r2),
    });

    this.dataSource = ds.cloneWithRows(this.props.recipes);

    if (this.props.isVehicleSelected) {
      return <RecipeDetail />;
    }

    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={rowData => <RecipeItem recipe={rowData} />}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderInitialView()}
      </View>
    );
  }
}

RecipeList.propTypes = {
  fetchVehicles: PropTypes.func.isRequired,
  isVehicleSelected: PropTypes.bool.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  recipes: _.map(state.vehicles.list, (val, uid) => ({ ...val, uid })),
  isVehicleSelected: !!state.vehicles.selected,
});

export default connect(mapStateToProps, { fetchVehicles })(RecipeList);
