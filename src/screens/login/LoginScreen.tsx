import React, { useState, useEffect } from 'react';
import { View, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconLogo from 'react-native-vector-icons/Feather';
import { SocialIcon, Input, Button, Text } from 'react-native-elements';
import { LoginScreenRouteProp, LoginScreenNavigationProp } from '../../navigation/types';
import colors from '../../theme/colors';
import styles from './LoginScreen.styles';

type Props = {
  route: LoginScreenRouteProp;
  navigation: LoginScreenNavigationProp;
};

const validateUsername = (username: string): boolean => {
  const pattern = new RegExp('^@?([a-zA-Z0-9_]){1,15}$');
  return pattern.test(username);
};

const TWITTER_USERNAME_RULES_URL = 'https://help.twitter.com/en/managing-your-account/twitter-username-rules';

const LoginScreen: React.FC<Props> = ({ navigation }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [isInputValid, setIsInputValid] = useState(false);
  const [isFieldTouched, setIsFieldTouched] = useState(false);

  useEffect(() => {
    if (inputValue !== 'Twitter' && inputValue !== 'Admin') {
      setIsInputValid(validateUsername(inputValue));
    }
  }, [inputValue]);

  const onChangeHandler = (value: string) => {
    setInputValue(value);
    setIsFieldTouched(true);
  };

  const navigationHandler = () => {
    navigation.navigate('Home');
  };

  const openRefInBrowserHandler = () => {
    Linking.canOpenURL(TWITTER_USERNAME_RULES_URL).then((supported) => {
      if (supported) {
        Linking.openURL(TWITTER_USERNAME_RULES_URL);
      } else {
        console.log("Don't know how to open URI: " + TWITTER_USERNAME_RULES_URL);
      }
    });
  };

  return (
    <View style={styles.layout}>
      <View style={styles.logoContainer}>
        <IconLogo name="twitter" size={80} color={colors.gray} />
      </View>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Login to your Account</Text>
        </View>
        <Input
          autoCapitalize="none"
          onChangeText={onChangeHandler}
          defaultValue={inputValue}
          selectionColor={colors.gray}
          placeholder="username"
          placeholderTextColor={colors.gray}
          inputStyle={styles.input}
          leftIcon={<Icon name="user-o" size={20} color={colors.gray} />}
          containerStyle={styles.inputContainer}
          errorMessage={!isInputValid && isFieldTouched ? 'Invalid username' : ''}
          errorStyle={styles.inputError}
        />
        <Button
          title="Need help with your username?"
          type="clear"
          titleStyle={styles.buttonTitle}
          containerStyle={styles.buttonContainer}
          onPress={openRefInBrowserHandler}
        />
        <SocialIcon title="Login" button type="twitter" onPress={navigationHandler} style={styles.socialButton} />
      </View>
    </View>
  );
};

export default LoginScreen;
