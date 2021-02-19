import React from 'react';
import { View, Text, Button } from 'react-native';
import { SocialIcon } from 'react-native-elements';
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
      <SocialIcon title="Some Twitter Message" button type="twitter" />
    </View>
  );
};

export default LoginScreen;
