import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeTabStack from './HomeNavigation';
import SettingsTabStack from './SettingsNavigation';
import { BottomNavigationStackParams } from './types';
import colors from '../theme/colors';

const BottomStack = createBottomTabNavigator<BottomNavigationStackParams>();

const BottomTabNavigation: React.FC = () => {
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
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={30} color={color} />,
        }}
      />
    </BottomStack.Navigator>
  );
};

export default BottomTabNavigation;
