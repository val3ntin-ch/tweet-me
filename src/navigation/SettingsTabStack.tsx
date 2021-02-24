import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from '../screens/settings/SettingsScreen';
import LogoTitle from '../components/Logo/Logo';

import { StackParamList } from './types';
import colors from '../theme/colors';

const SettingsStack = createStackNavigator<StackParamList>();

const SettingsTabStack: React.FC = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Home"
        component={SettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTitle: () => <LogoTitle />,
        }}
      />
    </SettingsStack.Navigator>
  );
};

export default SettingsTabStack;
