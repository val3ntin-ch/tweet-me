import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/home/HomeScreen';
import DetailsScreen from '../../screens/details/DetailsScreen';
import SettingsScreen from '../../screens/settings/SettingsScreen';
import LoginScreen from '../../screens/login/LoginScreen';

type RootStack = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  DetailsScreen: undefined;
  SettingsScreen: undefined;
};

const Stack = createStackNavigator<RootStack>();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function HomeNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function AppNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="LoginScreen"
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeNavigation} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
