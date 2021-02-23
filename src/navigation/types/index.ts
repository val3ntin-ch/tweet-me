import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type ITweetItem = {
  text: string;
  created_at: string;
  author_id: string;
  id: string;
};

export type ITwitterUserObj = {
  username: string;
  profile_image_url: string;
  id: string;
  name: string;
  created_at: string;
};

export type HomeStackParamList = {
  Home: { userName: string } | undefined;
  Details: { tweetObj: ITweetItem } | undefined;
};

export type BottomMenuStackParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Settings: { twitterUserObj: ITwitterUserObj };
};

export type RootStackParamList = {
  Login: { userName: string } | undefined;
  Home: NavigatorScreenParams<BottomMenuStackParamList>;
};

export type StackParamList = {
  Login: { userName: string } | undefined;
  Home: { userName: string } | undefined;
  Details: { tweetObj: ITweetItem };
  Settings: { twitterUserObj: ITwitterUserObj };
};

export type LoginScreenRouteProp = RouteProp<StackParamList, 'Login'>;
export type LoginScreenNavigationProp = StackNavigationProp<StackParamList, 'Login'>;

export type SettingsScreenRouteProp = RouteProp<StackParamList, 'Settings'>;
export type SettingsScreenNavigationProp = StackNavigationProp<StackParamList, 'Settings'>;

export type DetailsScreenRouteProp = RouteProp<StackParamList, 'Details'>;
export type DetailsScreenNavigationProp = StackNavigationProp<StackParamList, 'Details'>;

export type HomeScreenRouteProp = RouteProp<StackParamList, 'Home'>;
export type HomeScreenNavigationProp = StackNavigationProp<StackParamList, 'Home'>;
