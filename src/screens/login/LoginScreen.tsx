import React, { useState } from 'react';
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
  const [inputValue, setInputValue] = useState('');
  const [validInput, setValidInput] = useState(false);

  const validateUsername = (username: string) => {
    const pattern = new RegExp('^@?([a-zA-Z0-9_]){1,15}$');
    return pattern.test(username);
  };

  const handleOnChange = (text: string) => {
    const value = text.toLowerCase();
    if (value !== 'Twitter' && value !== 'Admin') {
      const isValid = validateUsername(value);
      isValid ? setInputValue(value) : setValidInput(!isValid);
    }
    if (value === '') {
      setValidInput(false);
    }
  };

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
        <IconLogo name="twitter" size={80} color="#636469" />
      </View>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Login to your Account</Text>
        </View>
        <Input
          autoCapitalize="none"
          onChangeText={(text) => handleOnChange(text)}
          defaultValue={inputValue}
          selectionColor="#636469"
          placeholder="username"
          placeholderTextColor="#636469"
          inputStyle={styles.input}
          leftIcon={<Icon name="user-o" size={20} color="#636469" />}
          containerStyle={styles.inputContainer}
          errorMessage={validInput ? 'Invalid username' : ''}
          errorStyle={styles.inputError}
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
