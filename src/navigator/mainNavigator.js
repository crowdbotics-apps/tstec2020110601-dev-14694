import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen114504Navigator from '../features/BlankScreen114504/navigator';
// import BlankScreen014493Navigator from '../features/BlankScreen014493/navigator';
import EmailAuthNavigator from "../features/EmailAuth/navigator";

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen114504: { screen: BlankScreen114504Navigator },
// BlankScreen014493: { screen: BlankScreen014493Navigator },
EmailAuth: {screen: EmailAuthNavigator},
  
    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
