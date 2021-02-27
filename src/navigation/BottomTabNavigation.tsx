import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import HomeTabStack from './HomeNavigation';
import SettingsTabStack from './SettingsNavigation';
import { ScreensParams } from '../types';
import { Props as HomeScreenParams } from '../navigation/HomeNavigation';
import colors from '../theme/colors';

export type MainRouteProp = RouteProp<ScreensParams, 'Main'>;
export type MainNavigationProp = StackNavigationProp<ScreensParams, 'Main'>;

export type Props = {
  route: MainRouteProp;
  navigation: MainNavigationProp;
};

export type NavigationStackParams = {
  Home: NavigatorScreenParams<HomeScreenParams>;
  Settings: { userId?: string };
};
const BottomStack = createBottomTabNavigator<NavigationStackParams>();

const BottomTabNavigation: React.FC<Props> = ({ route }: Props) => {
  return (
    <BottomStack.Navigator
      tabBarOptions={{
        activeTintColor: colors.blue,
        inactiveTintColor: colors.gray,
        style: {
          backgroundColor: colors.white,
          borderTopColor: colors.gray2,
        },
        keyboardHidesTabBar: true,
        allowFontScaling: true,
        showLabel: false,
      }}
    >
      <BottomStack.Screen
        name="Home"
        component={HomeTabStack}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" size={30} color={color} />,
        }}
      />
      <BottomStack.Screen
        name="Settings"
        component={SettingsTabStack}
        initialParams={route.params}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={30} color={color} />,
        }}
      />
    </BottomStack.Navigator>
  );
};

export default BottomTabNavigation;
