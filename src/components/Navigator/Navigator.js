import { createBottomTabNavigator } from 'react-navigation';

import Profile from '../../user/views/Profile';
import CategoryList from '../../vehicles/components/CategoryList';
import CreateVehicle from '../../vehicles/components/CreateVehicle';
import VehicleList from '../../vehicles/components/VehicleList';

const Navigator = createBottomTabNavigator({
  Profile,
  VehicleList,
  CreateVehicle,
  CategoryList,
});

export default Navigator;
