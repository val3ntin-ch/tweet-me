import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NavigatorScreenParams } from '@react-navigation/native';

import LoginScreen from '../screens/login/LoginScreen';
import BottomTabStack, { NavigationStackParams } from './BottomTabNavigation';

export type Props = {
  Login: undefined;
  Main: NavigatorScreenParams<NavigationStackParams>;
};

const AppStack = createNativeStackNavigator<Props>();

const AppNavigation: React.FC = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Login"
  >
    <AppStack.Screen name="Login" component={LoginScreen} />
    <AppStack.Screen name="Main" component={BottomTabStack} />
  </AppStack.Navigator>
);

export default AppNavigation;
