import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useQueryClient } from 'react-query';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { ScreensParams, TwitterUser, TweetItem } from '../../types';

import styles from './HomeScreen.styles';
import colors from '../../theme/colors';
import { useUserTweetsList } from '../../services/tweets';

import RenderItem from '../../components/RenderItem';
import EmptyListView from '../../components/EmptyListView';

export type TweetsScreenRouteProp = RouteProp<ScreensParams, 'Tweets'>;
export type TweetsScreenNavigationProp = StackNavigationProp<ScreensParams, 'Tweets'>;

export type Props = {
  route: TweetsScreenRouteProp;
  navigation: TweetsScreenNavigationProp;
};

export type UserCache = {
  data: TwitterUser[];
};

const keyExtractor = (item: TweetItem) => item.id;

const HomeScreen: React.FC<Props> = ({ route, navigation }: Props) => {
  const { userId, userName } = route?.params;
  const client = useQueryClient();

  const { data: userData } = client.getQueryData(`user-data-${userName}`) as UserCache;
  const { data: tweetsData, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useUserTweetsList(userId);

  const listData = tweetsData?.pages.reduce((acc, curr) => acc.concat([...(curr.data || [])]), []);

  const onListEndReachedHandler = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const onLoadingHandler = () => (
    <View>{isFetchingNextPage && <ActivityIndicator size="large" color={colors.blue} />}</View>
  );

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.containerLoader}>
          <ActivityIndicator size="large" color={colors.blue} />
        </View>
      )}
      {!isLoading && listData && (
        <FlatList
          data={listData}
          initialNumToRender={10}
          renderItem={({ item }) => <RenderItem item={item} navigation={navigation} userData={userData[0]} />}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.listContainer}
          onEndReached={onListEndReachedHandler}
          onEndReachedThreshold={0.4}
          ListFooterComponent={onLoadingHandler}
          ListEmptyComponent={<EmptyListView />}
        />
      )}
    </View>
  );
};

export default HomeScreen;
