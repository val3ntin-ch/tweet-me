import React, { useState, useEffect } from 'react';
import { View, Linking, Text } from 'react-native';
import { SocialIcon, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconLogo from 'react-native-vector-icons/Feather';
import { useQuery, useMutation, useQueryClient } from 'react-query';

import { LoginScreenRouteProp, LoginScreenNavigationProp } from '../../navigation/types';
import TWITTER_USERNAME_RULES_URL from '../../services/constants';
import { validateUsername } from '../../utils/index';
import colors from '../../theme/colors';
import styles from './LoginScreen.styles';
import getUserId from '../../services/authentication';

type Props = {
  route: LoginScreenRouteProp;
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [isInputValid, setIsInputValid] = useState(false);
  const [isFieldTouched, setIsFieldTouched] = useState(false);

  const { data, isLoading, error } = useQuery(['fetchUserObj', inputValue], getUserId(inputValue));

  console.log('data', data);

  useEffect(() => {
    if (inputValue !== 'Twitter' && inputValue !== 'Admin') {
      setIsInputValid(validateUsername(inputValue));
    }
  }, [inputValue]);

  useEffect(() => {
    console.log('test app ');
    if (isInputValid) {
      getUserId(inputValue);
    }
  }, [inputValue, isInputValid]);

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
        <IconLogo name="twitter" size={80} color={colors.darkGray} />
      </View>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Login to your Account</Text>
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
        <SocialIcon title="Login" button type="twitter" onPress={navigationHandler} style={styles.socialButton} />
      </View>
    </View>
  );
};

export default LoginScreen;
