import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';

import HomeTabStack from './HomeTabStack';
import LoginScreen from '../../screens/login/LoginScreen';

const StackRoot = createStackNavigator<RootStackParamList>();

const RootStack: React.FC = () => {
  return (
    <NavigationContainer>
      <StackRoot.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"
      >
        <StackRoot.Screen name="Login" component={LoginScreen} />
        <StackRoot.Screen name="Home" component={HomeTabStack} />
      </StackRoot.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
