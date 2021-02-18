import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStack } from './types';
import Home from '../../../screens/home';
import Details from '../../../screens/details';
import Settings from '../../../screens/settings';
import Login from '../../../screens/login';

const Stack = createStackNavigator<RootStack>();

function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
