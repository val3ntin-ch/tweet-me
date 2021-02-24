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

export type StackParams = {
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

export type TabStackParams = {
  Home: NavigatorScreenParams<TweetsStackParams>;
  Settings: undefined;
};

export type RootStackParams = {
  Login: undefined;
  Main: NavigatorScreenParams<TabStackParams>;
};

export type LoginScreenRouteProp = RouteProp<StackParams, 'Login'>;
export type LoginScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParams, 'Login'>,
  BottomTabNavigationProp<RootStackParams>
>;

export type TweetsScreenRouteProp = RouteProp<StackParams, 'Tweets'>;
export type TweetsScreenNavigationProp = StackNavigationProp<StackParams, 'Tweets'>;

export type DetailsScreenRouteProp = RouteProp<StackParams, 'Details'>;
export type DetailsScreenNavigationProp = StackNavigationProp<StackParams, 'Details'>;

export type SettingsScreenRouteProp = RouteProp<StackParams, 'Settings'>;
export type SettingsScreenNavigationProp = StackNavigationProp<StackParams, 'Settings'>;
