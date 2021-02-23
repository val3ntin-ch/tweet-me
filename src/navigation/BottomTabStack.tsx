import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeTabStack from './HomeTabStack';
import SettingsTabStack from './SettingsTabStack';
import { BottomMenuStackParamList } from './types';
import colors from '../theme/colors';

const Tab = createBottomTabNavigator<BottomMenuStackParamList>();

const BottomTabStack: React.FC = () => {
  return (
    <Tab.Navigator
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
      <Tab.Screen
        name="Home"
        component={HomeTabStack}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsTabStack}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={30} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
