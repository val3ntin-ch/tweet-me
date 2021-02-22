import React from 'react';
import { View, Text } from 'react-native';
import { SettingsScreenRouteProp, SettingsScreenNavigationProp } from '../../navigation/types';

type Props = {
  route: SettingsScreenRouteProp;
  navigation: SettingsScreenNavigationProp;
};

const SettingsScreen: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;
