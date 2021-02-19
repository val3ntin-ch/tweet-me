import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

function HomeNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

function AppNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeNavigation} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
