import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomMenuStackParamList } from './types';

import HomeTabStack from './HomeTabStack';
import SettingsScreen from '../../screens/settings';

const Tab = createBottomTabNavigator<BottomMenuStackParamList>();

const BottomTabStack: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeTabStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
