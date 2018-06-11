import Profile from './Profile';
import enhance from './Profile.enhancer';
import style from './Profile.styles';
import tabBarIcon from './Profile.tabBarIcon';

const view = enhance(style(Profile));

view.navigationOptions = { tabBarIcon };

export default view;
