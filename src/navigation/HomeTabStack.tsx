import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home/HomeScreen';
import DetailsScreen from '../screens/details/DetailsScreen';
import { TweetsStackParams } from './types';

import colors from '../theme/colors';
import DetailsTitle from '../components/DetailsIcon/DetailsIcon';
import LogoTitle from '../components/Logo/Logo';

const HomeStack = createStackNavigator<TweetsStackParams>();

const HomeTabStack: React.FC = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Tweets"
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
