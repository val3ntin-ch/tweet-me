import React from 'react';
import { View, Text, Button } from 'react-native';
import { LoginScreenRouteProp, LoginScreenNavigationProp } from '../../app/navigation/types';

type Props = {
  route: LoginScreenRouteProp;
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }: Props) => {
  const handleNavigation = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        onPress={() => handleNavigation()}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default LoginScreen;
