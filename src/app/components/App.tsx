import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigation from '../navigation/Navigation';

export type AppStackNavigation = {
  AppNavigation: object | undefined;
};
const Stack = createStackNavigator<AppStackNavigation>();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="AppNavigation" component={AppNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
