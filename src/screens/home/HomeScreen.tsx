import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import { TweetItem, TweetsProps } from '../../navigation/types';
import styles from './HomeScreen.styles';
import colors from '../../theme/colors';
import { useUserTweetsList } from '../../services/tweets';

import RenderItem from '../../components/RenderItem';
import EmptyListView from '../../components/EmptyListView';

const keyExtractor = (item: TweetItem) => item.id;

const HomeScreen: React.FC<TweetsProps> = ({ route, navigation }: TweetsProps) => {
  const { user } = route?.params;

  console.log('user data ', route?.params);

  const { data: tweetsData, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useUserTweetsList(user?.id);

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
          renderItem={({ item }) => <RenderItem item={item} navigation={navigation} userData={user} />}
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
