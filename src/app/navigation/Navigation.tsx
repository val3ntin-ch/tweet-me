import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/home/Home';
import Details from '../../screens/details/Details';
import Settings from '../../screens/settings/Settings';
import Login from '../../screens/login/Login';

type RootStack = {
  Login: undefined;
  Home: undefined;
  Details: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStack>();

function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
