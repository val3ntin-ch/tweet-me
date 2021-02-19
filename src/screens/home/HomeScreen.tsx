import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../app/navigation/types';

type HomeScreenNavigationProp = StackNavigationProp<StackParamList, 'Login'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Details')}
        title="Details"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default HomeScreen;
