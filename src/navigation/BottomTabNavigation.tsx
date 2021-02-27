import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeTabStack from './HomeNavigation';
import SettingsTabStack from './SettingsNavigation';
import { BottomNavigationStackParams, MainProps } from './types';
import colors from '../theme/colors';

const BottomStack = createBottomTabNavigator<BottomNavigationStackParams>();

const BottomTabNavigation: React.FC<MainProps> = ({ route }: MainProps) => {
  const { user } = route.params;
  console.log('Params xx', JSON.stringify(user, null, 4));

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
