import React from 'react';
import { View, Linking, Text } from 'react-native';
import { SocialIcon, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconLogo from 'react-native-vector-icons/Feather';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ScreensParams } from '../../types';
import { Props as AppStackParams } from '../../navigation';
import { TWITTER_USERNAME_RULES_URL } from '../../services/constants';
import { validateUsername } from '../../utils';
import { useUserProfile } from '../../services/tweets';
import colors from '../../theme/colors';
import styles from './LoginScreen.styles';

export type LoginScreenRouteProp = RouteProp<ScreensParams, 'Login'>;
export type LoginScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AppStackParams, 'Login'>,
  BottomTabNavigationProp<AppStackParams>
>;

export type Props = {
  route: LoginScreenRouteProp;
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }: Props) => {
  const [inputValue, setInputValue] = React.useState('');
  const [isInputValid, setIsInputValid] = React.useState(false);
  const [isFieldTouched, setIsFieldTouched] = React.useState(false);

  const { data: userData, isLoading, isError, isFetching } = useUserProfile(inputValue, isInputValid);

  console.log('isLoading ', isLoading, isFetching);
  console.log('data ', userData);
  React.useEffect(() => {
    console.log('data');
    if (inputValue !== 'Twitter' && inputValue !== 'Admin') {
      setIsInputValid(validateUsername(inputValue));
    }
  }, [inputValue]);

  const onChangeHandler = (value: string) => {
    console.log('data value ', value);
    setInputValue(value);
    setIsFieldTouched(true);
  };

  const navigationHandler = () => {
    if (!isLoading) {
      navigation.navigate('Main', {
        screen: 'Home',
        params: {
          screen: 'Tweets',
          params: { userId: userData?.data[0].id, userName: userData?.data[0].username },
        },
      });
    }
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
          loading={isFetching && isLoading && isInputValid}
          type="twitter"
          onPress={navigationHandler}
          style={styles.socialButton}
          disabled={isLoading || isError || !isInputValid}
          underlayColor="gray"
        />
      </View>
    </View>
  );
};

export default LoginScreen;
