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

export type LoginParams = {
  Login: undefined;
};

export type TweetParams = {
  Tweets: { userId: string };
};

export type DetailsParams = {
  Details: { tweetObj: TweetItem };
};

export type SettingsParams = {
  Settings: undefined;
};

export type TweetsStackParams = {
  Tweets: { userId: string };
  Details: { tweetObj: TweetItem };
};

export type TabStackParams = {
  Home: NavigatorScreenParams<TweetsStackParams>;
  Settings: undefined;
};

export type RootStackParams = {
  Login: undefined;
  Main: NavigatorScreenParams<TabStackParams>;
};

export type LoginScreenRouteProp = RouteProp<LoginParams, 'Login'>;
export type LoginScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParams, 'Login'>,
  BottomTabNavigationProp<RootStackParams>
>;

export type TweetsScreenRouteProp = RouteProp<TweetParams, 'Tweets'>;
export type TweetsScreenNavigationProp = StackNavigationProp<TweetParams, 'Tweets'>;

export type DetailsScreenRouteProp = RouteProp<DetailsParams, 'Details'>;
export type DetailsScreenNavigationProp = StackNavigationProp<DetailsParams, 'Details'>;

export type SettingsScreenRouteProp = RouteProp<SettingsParams, 'Settings'>;
export type SettingsScreenNavigationProp = StackNavigationProp<SettingsParams, 'Settings'>;
