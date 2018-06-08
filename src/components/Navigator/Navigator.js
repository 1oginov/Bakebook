import { TabNavigator } from 'react-navigation';

import CategoryList from '../../vehicles/components/CategoryList';
import CreateVehicle from '../../vehicles/components/CreateVehicle';
import VehicleList from '../../vehicles/components/VehicleList';

const Navigator = TabNavigator({
  VehicleList: { screen: VehicleList },
  CreateVehicle: { screen: CreateVehicle },
  CategoryList: { screen: CategoryList },
});

export default Navigator;
