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

export type LoginScreenParams = {
  Login: undefined;
};

export type TweetScreenParams = {
  Tweets: { userId: string };
};

export type DetailsScreenParams = {
  Details: { tweetObj: TweetItem };
};

export type SettingsScreenParams = {
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

export type LoginScreenRouteProp = RouteProp<LoginScreenParams, 'Login'>;
export type LoginScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AppStackParams, 'Login'>,
  BottomTabNavigationProp<AppStackParams>
>;

export type TweetsScreenRouteProp = RouteProp<TweetScreenParams, 'Tweets'>;
export type TweetsScreenNavigationProp = StackNavigationProp<TweetScreenParams, 'Tweets'>;

export type DetailsScreenRouteProp = RouteProp<DetailsScreenParams, 'Details'>;
export type DetailsScreenNavigationProp = StackNavigationProp<DetailsScreenParams, 'Details'>;

export type SettingsScreenRouteProp = RouteProp<SettingsScreenParams, 'Settings'>;
export type SettingsScreenNavigationProp = StackNavigationProp<SettingsScreenParams, 'Settings'>;
