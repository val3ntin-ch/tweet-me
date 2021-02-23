import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/login/LoginScreen';
import BottomTabStack from './BottomTabStack';
import { RootStackParamList } from './types';

const StackRoot = createNativeStackNavigator<RootStackParamList>();

const RootStack: React.FC = () => (
  <NavigationContainer>
    <StackRoot.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <StackRoot.Screen name="Login" component={LoginScreen} />
      <StackRoot.Screen name="Home" component={BottomTabStack} />
    </StackRoot.Navigator>
  </NavigationContainer>
);

export default RootStack;
