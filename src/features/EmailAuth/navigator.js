import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SignUp from './screens/index';

const emailAuthStack = createStackNavigator();

const EmailAuthStackScreen = props => (
  <emailAuthStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName={props.initialRoute}>
    <emailAuthStack.Screen name="SignUp" component={SignUp} />
  </emailAuthStack.Navigator>
);

export default EmailAuthStackScreen;