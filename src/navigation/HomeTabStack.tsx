import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HomeStackParamList } from './types';
import HomeScreen from '../screens/home/HomeScreen';
import DetailsScreen from '../screens/details/DetailsScreen';

import colors from '../theme/colors';

const LogoTitle: React.FC = (): React.ReactElement => <Ionicons name="logo-twitter" size={42} color={colors.blue} />;

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeTabStack: React.FC = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTitle: () => <LogoTitle />,
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: colors.blue,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeTabStack;
