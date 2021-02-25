import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type TweetItem = {
  text: string;
  created_at: string;
  author_id: string;
  id: string;
};

export type TwitterUserObj = {
  username: string;
  profile_image_url: string;
  id: string;
  name: string;
  created_at: string;
};

export type ScreensParams = {
  Login: undefined;
  Main: undefined;
  Tweets: { userId: string };
  Details: { tweetObj: TweetItem };
  Settings: undefined;
};

export type TweetsStackParams = {
  Tweets: { userId: string };
  Details: { tweetObj: TweetItem };
};

export type BottomNavigationStackParams = {
  Home: NavigatorScreenParams<TweetsStackParams>;
  Settings: undefined;
};

export type AppStackParams = {
  Login: undefined;
  Main: NavigatorScreenParams<BottomNavigationStackParams>;
};

export type LoginScreenRouteProp = RouteProp<ScreensParams, 'Login'>;
export type LoginScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AppStackParams, 'Login'>,
  BottomTabNavigationProp<AppStackParams>
>;

export type TweetsScreenRouteProp = RouteProp<ScreensParams, 'Tweets'>;
export type TweetsScreenNavigationProp = StackNavigationProp<ScreensParams, 'Tweets'>;

export type DetailsScreenRouteProp = RouteProp<ScreensParams, 'Details'>;
export type DetailsScreenNavigationProp = StackNavigationProp<ScreensParams, 'Details'>;

export type SettingsScreenRouteProp = RouteProp<ScreensParams, 'Settings'>;
export type SettingsScreenNavigationProp = StackNavigationProp<ScreensParams, 'Settings'>;
