import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamList } from './types';
import SettingsScreen from '../screens/settings/SettingsScreen';
import { LogoTitle } from './HomeTabStack';

import colors from '../theme/colors';

const SettingsStack = createStackNavigator<HomeStackParamList>();

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
