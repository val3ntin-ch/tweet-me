import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { AppStackParams } from './types';
import LoginScreen from '../screens/login/LoginScreen';
import BottomTabStack from './BottomTabNavigation';

const AppStack = createNativeStackNavigator<AppStackParams>();

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
