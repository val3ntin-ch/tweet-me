import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

import { HomeStackParamList } from './types';
import HomeScreen from '../screens/home/HomeScreen';
import DetailsScreen from '../screens/details/DetailsScreen';

import colors from '../theme/colors';

const LogoTitle: React.FC = (): React.ReactElement => <Ionicons name="logo-twitter" size={42} color={colors.blue} />;
const DetailsTitle: React.FC = (): React.ReactElement => <Octicons name="info" size={36} color={colors.blue} />;

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
          headerTitle: () => <DetailsTitle />,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeTabStack;
