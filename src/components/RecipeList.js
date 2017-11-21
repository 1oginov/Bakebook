import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListView, Text, View } from 'react-native';

const styles = {
  container: {
    backgroundColor: 'white',
  },
};

class RecipeList extends Component {
  renderInitialView() {
    const ds = new ListView.DataSource({
      rowHasChanged: ((r1, r2) => r1 !== r2),
    });

    this.dataSource = ds.cloneWithRows(this.props.recipes);

    if (this.props.isRecipeSelected) {
      return <Text>Some recipe is selected</Text>;
    }

    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={rowData => <Text>{JSON.stringify(rowData)}</Text>}
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
