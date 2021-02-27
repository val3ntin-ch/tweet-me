import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from '../screens/settings/SettingsScreen';
import LogoTitle from '../components/Logo/Logo';

import { ScreensParams } from '../types';
import { Props } from '../screens/settings';
import colors from '../theme/colors';

const SettingsStack = createStackNavigator<ScreensParams>();

const SettingsNavigation: React.FC<Props> = ({ route }: Props) => {
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
