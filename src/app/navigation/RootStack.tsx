import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';

import LoginScreen from '../../screens/login/LoginScreen';
import BottomTabStack from './BottomTabStack';

const StackRoot = createNativeStackNavigator<RootStackParamList>();

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
        <StackRoot.Screen name="Home" component={BottomTabStack} />
      </StackRoot.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
