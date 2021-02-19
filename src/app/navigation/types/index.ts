import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type HomeStackParamList = {
  Home: { userName: string } | undefined;
  Details: { tweetObj: Object } | undefined;
};

export type BottomMenuStackParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Settings: undefined;
};

export type RootStackParamList = {
  Login: { userName: string } | undefined;
  Home: NavigatorScreenParams<BottomMenuStackParamList>;
};

export type StackParamList = {
  Login: { userName: string } | undefined;
  Home: { userName: string } | undefined;
  Details: { tweetObj: Object } | undefined;
  Settings: undefined;
};

export type LoginScreenRouteProp = RouteProp<StackParamList, 'Login'>;
export type LoginScreenNavigationProp = StackNavigationProp<StackParamList, 'Login'>;

export type SettingsScreenRouteProp = RouteProp<StackParamList, 'Settings'>;
export type SettingsScreenNavigationProp = StackNavigationProp<StackParamList, 'Settings'>;

export type DetailsScreenRouteProp = RouteProp<StackParamList, 'Details'>;
export type DetailsScreenNavigationProp = StackNavigationProp<StackParamList, 'Details'>;

export type HomeScreenRouteProp = RouteProp<StackParamList, 'Home'>;
export type HomeScreenNavigationProp = StackNavigationProp<StackParamList, 'Home'>;
