import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParams } from './types';
import LoginScreen from '../screens/login/LoginScreen';
import BottomTabStack from './BottomTabStack';

const StackRoot = createNativeStackNavigator<RootStackParams>();

const RootStack: React.FC = () => (
  <NavigationContainer>
    <StackRoot.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <StackRoot.Screen name="Login" component={LoginScreen} />
      <StackRoot.Screen name="Main" component={BottomTabStack} />
    </StackRoot.Navigator>
  </NavigationContainer>
);

export default RootStack;
