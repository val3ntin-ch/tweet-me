import React, { useState, useEffect } from 'react';
import { View, Linking, Text } from 'react-native';
import { SocialIcon, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconLogo from 'react-native-vector-icons/Feather';

import { LoginProps } from '../../navigation/types';
import { TWITTER_USERNAME_RULES_URL } from '../../services/constants';
import { validateUsername } from '../../utils';
import { useUserProfile } from '../../services/tweets';

import colors from '../../theme/colors';
import styles from './LoginScreen.styles';

const LoginScreen: React.FC<LoginProps> = ({ navigation }: LoginProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isInputValid, setIsInputValid] = useState(false);
  const [isFieldTouched, setIsFieldTouched] = useState(false);
  const { data: userData, isLoading, isError } = useUserProfile(inputValue, isInputValid);

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
    navigation.navigate('Main', {
      screen: 'Home',
      params: {
        screen: 'Tweets',
        params: { user: userData.data[0] },
      },
    });
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
        <IconLogo name="twitter" size={80} color={colors.darkGray} />
      </View>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Get tweets by username</Text>
        </View>
        <Input
          autoCapitalize="none"
          onChangeText={onChangeHandler}
          defaultValue={inputValue}
          selectionColor={colors.darkBlue}
          placeholder="username"
          placeholderTextColor={colors.darkBlue}
          inputStyle={styles.input}
          leftIcon={<Icon name="user-o" size={20} color={colors.darkBlue} />}
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
        <SocialIcon
          title="Get tweets"
          button
          type="twitter"
          onPress={navigationHandler}
          style={styles.socialButton}
          disabled={isLoading || isError || !isInputValid}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
