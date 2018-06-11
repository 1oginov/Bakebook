import { createBottomTabNavigator } from 'react-navigation';

import Dashboard from '../../dashboard/views/Dashboard';
import Profile from '../../user/views/Profile';
import CategoryList from '../../vehicles/components/CategoryList';
import CreateVehicle from '../../vehicles/components/CreateVehicle';
import VehicleList from '../../vehicles/components/VehicleList';

const Navigator = createBottomTabNavigator({
  Dashboard,
  VehicleList,
  CreateVehicle,
  CategoryList,
  Profile,
});

export default Navigator;
