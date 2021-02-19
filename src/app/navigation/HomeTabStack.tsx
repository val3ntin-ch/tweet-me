import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamList } from './types';

import HomeScreen from '../../screens/home/HomeScreen';
import DetailsScreen from '../../screens/details/DetailsScreen';

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeTabStack: React.FC = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeTabStack;
