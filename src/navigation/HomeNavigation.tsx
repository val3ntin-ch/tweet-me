import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home/HomeScreen';
import DetailsScreen from '../screens/details/DetailsScreen';
import { TweetItem } from '../types';

import colors from '../theme/colors';
import DetailsTitle from '../components/DetailsIcon/DetailsIcon';
import LogoTitle from '../components/Logo/Logo';

export type Props = {
  Tweets: { userId?: string; userName?: string };
  Details: { tweet: TweetItem };
};

const HomeStack = createStackNavigator<Props>();

const HomeNavigation: React.FC = () => {
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
          headerTitleAlign: 'center',
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
          headerTitleAlign: 'center',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
