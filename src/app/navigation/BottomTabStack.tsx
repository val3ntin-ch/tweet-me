import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomMenuStackParamList } from './types';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeTabStack from './HomeTabStack';
import SettingsScreen from '../../screens/settings';

const Tab = createBottomTabNavigator<BottomMenuStackParamList>();

const BottomTabStack: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#00acee',
        inactiveTintColor: '#636469',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeTabStack}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" size={28} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={28} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
