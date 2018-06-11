import Dashboard from './Dashboard';
import style from './Dashboard.styles';
import tabBarIcon from './Dashboard.tabBarIcon';

const view = style(Dashboard);

view.navigationOptions = { tabBarIcon };

export default view;
