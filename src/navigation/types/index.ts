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

export type TwitterUser = {
  username: string;
  profile_image_url: string;
  id: string;
  name: string;
  created_at: string;
};

export type ScreensParams = {
  Login: undefined;
  Main: { user: TwitterUser };
  Tweets: { user: TwitterUser };
  Details: { tweet: TweetItem };
  Settings: { params: { params: { user: TwitterUser } } };
};

export type TweetsStackParams = {
  Tweets: { user: TwitterUser };
  Details: { tweet: TweetItem };
};

export type BottomNavigationStackParams = {
  Home: NavigatorScreenParams<TweetsStackParams>;
  Settings: { user: TwitterUser };
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

export type MainRouteProp = RouteProp<ScreensParams, 'Main'>;
export type MainNavigationProp = StackNavigationProp<ScreensParams, 'Main'>;

export type MainProps = {
  route: MainRouteProp;
  navigation: MainNavigationProp;
};

export type SettingsProps = {
  route: SettingsScreenRouteProp;
  navigation: SettingsScreenNavigationProp;
};

export type LoginProps = {
  route: LoginScreenRouteProp;
  navigation: LoginScreenNavigationProp;
};

export type DetailsProps = {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
};

export type TweetsProps = {
  route: TweetsScreenRouteProp;
  navigation: TweetsScreenNavigationProp;
};
