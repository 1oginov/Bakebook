import { TabNavigator } from 'react-navigation';

import AddVehicle from '../../vehicles/components/AddRecipe';
import CategoryList from '../../vehicles/components/CategoryList';
import VehicleList from '../../vehicles/components/RecipeList';

const Navigation = TabNavigator({
  VehicleList: { screen: VehicleList },
  AddVehicle: { screen: AddVehicle },
  CategoryList: { screen: CategoryList },
});

export default Navigation;
