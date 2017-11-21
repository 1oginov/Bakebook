import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import RecipeDetail from './RecipeDetail';
import RecipeItem from './RecipeItem';

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

  renderInitialView() {
    const ds = new ListView.DataSource({
      rowHasChanged: ((r1, r2) => r1 !== r2),
    });

    this.dataSource = ds.cloneWithRows(this.props.recipes);

    if (this.props.isRecipeSelected) {
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
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  isRecipeSelected: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  recipes: state.RecipesReducer.recipes,
  isRecipeSelected: state.RecipesReducer.isRecipeSelected,
});

export default connect(mapStateToProps)(RecipeList);
