import React from 'react';
import { View, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconLogo from 'react-native-vector-icons/Feather';
import { SocialIcon, Input, Button, Text } from 'react-native-elements';
import { LoginScreenRouteProp, LoginScreenNavigationProp } from '../../app/navigation/types';

import styles from './LoginScreenStyles';

type Props = {
  route: LoginScreenRouteProp;
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }: Props) => {
  const handleNavigation = () => {
    navigation.navigate('Home');
  };

  const handleOpenRefInBrowser = () => {
    const url = 'https://help.twitter.com/en/managing-your-account/twitter-username-rules';
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  return (
    <View style={styles.layout}>
      <View style={styles.logoContainer}>
        <IconLogo name="twitter" size={80} color="gray" />
      </View>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Login to your Account</Text>
        </View>
        <Input
          selectionColor="gray"
          placeholder="Username"
          placeholderTextColor="gray"
          inputStyle={styles.input}
          leftIcon={<Icon name="user-o" size={20} color="gray" />}
          containerStyle={styles.inputContainer}
          errorStyle={styles.inputErrorColor}
        />
        <Button
          title="Need help with your username?"
          type="clear"
          titleStyle={styles.buttonTitle}
          containerStyle={styles.buttonContainer}
          onPress={() => handleOpenRefInBrowser()}
        />
        <SocialIcon
          title="Login"
          button
          type="twitter"
          onPress={() => handleNavigation()}
          style={styles.socialButton}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
