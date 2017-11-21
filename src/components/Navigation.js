import { TabNavigator } from 'react-navigation';
import { getTheme } from 'react-native-material-kit';

import AddRecipe from './AddRecipe';
import CategoryList from './CategoryList';
import RecipeList from './RecipeList';

const theme = getTheme();

const Navigation = TabNavigator(
  {
    RecipeList: { screen: RecipeList },
    AddRecipe: { screen: AddRecipe },
    CategoryList: { screen: CategoryList },
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'rgba(255, 255, 255, 0.7)',
      indicatorStyle: {
        backgroundColor: theme.accentColor,
      },
      showIcon: true,
      style: {
        backgroundColor: theme.primaryColor,
      },
      tabStyle: {
        paddingTop: 16,
      },
    },
  },
);

export default Navigation;
