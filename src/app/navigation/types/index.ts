import { NavigatorScreenParams } from '@react-navigation/native';

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
