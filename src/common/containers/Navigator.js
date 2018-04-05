import { TabNavigator } from 'react-navigation';

import CategoryList from '../../vehicles/components/CategoryList';
import CreateVehicle from '../../vehicles/components/CreateVehicle';
import Dashboard from '../../dashboard/containers/Dashboard';
import VehicleList from '../../vehicles/components/VehicleList';

const Navigator = TabNavigator({
  Dashboard: { screen: Dashboard },
  VehicleList: { screen: VehicleList },
  CreateVehicle: { screen: CreateVehicle },
  CategoryList: { screen: CategoryList },
});

export default Navigator;
