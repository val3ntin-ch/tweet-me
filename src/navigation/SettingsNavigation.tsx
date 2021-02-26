import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from '../screens/settings/SettingsScreen';
import LogoTitle from '../components/Logo/Logo';

import { ScreensParams, SettingsProps } from './types';
import colors from '../theme/colors';

const SettingsStack = createStackNavigator<ScreensParams>();

const SettingsNavigation: React.FC<SettingsProps> = ({ route }: SettingsProps) => {
  // console.log('route stack ', route.params);
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        initialParams={route.params}
        options={{
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTitle: () => <LogoTitle />,
          headerTitleAlign: 'center',
        }}
      />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigation;
