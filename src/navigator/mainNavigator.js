import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
// import BlankScreen114504Navigator from '../features/BlankScreen114504/navigator';
// import BlankScreen014493Navigator from '../features/BlankScreen014493/navigator';
import EmailAuthNavigator from "../features/EmailAuth/navigator";
/**
 * new navigators can be imported here
 */
const switchScreens = {
  EmailAuthNavigator,
  DrawerAppNavigator,
  SplashScreen: {
    screen: SplashScreen
  }
};
const switchSettings = {
  // initialRouteName: 'TestScreen',
  //backBehavior:'initialRoute'
};
const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);
const AppNavigator = createSwitchNavigator(switchScreens, switchSettings);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;