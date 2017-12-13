import { TabNavigator } from 'react-navigation';
import { getTheme } from 'react-native-material-kit';

import AddRecipe from '../../vehicles/components/AddRecipe';
import CategoryList from '../../vehicles/components/CategoryList';
import RecipeList from '../../vehicles/components/RecipeList';

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
