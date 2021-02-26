import React from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import Hyperlink from 'react-native-hyperlink';

import { formatDate } from '../../utils/index';
import { TweetsScreenNavigationProp, TweetsScreenRouteProp, TweetItem, TwitterUser } from '../../navigation/types';
import styles from './HomeScreen.styles';
import colors from '../../theme/colors';
import { useUserTweetsList, useUserTweetsPaginationList } from '../../services/tweets';

type Props = {
  route: TweetsScreenRouteProp;
  navigation: TweetsScreenNavigationProp;
};

const renderItem = (item: TweetItem, navigation: TweetsScreenNavigationProp, userData: TwitterUser) => {
  const onNavigationHandler = (itemObj: TweetItem) => {
    navigation.navigate('Details', { tweet: itemObj });
  };

  return (
    <ListItem
      onPress={() => onNavigationHandler(item)}
      bottomDivider
      topDivider
      pad={20}
      containerStyle={styles.listItemContainer}
    >
      <Avatar
        containerStyle={styles.avatarContainer}
        rounded
        source={{ uri: userData?.profile_image_url }}
        size="medium"
      />
      <ListItem.Content>
        <ListItem.Title style={styles.usernameContainer}>
          <Text style={styles.usernameStyle}>{userData?.name}</Text>
        </ListItem.Title>
        <Hyperlink linkDefault={true} linkStyle={styles.linkStyle}>
          <Text style={styles.listItemTitle} numberOfLines={1}>
            {item.text}
          </Text>
        </Hyperlink>
        <ListItem.Subtitle style={styles.listItemSubtitle}>{formatDate(item.created_at)}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron color={colors.gray} size={26} />
    </ListItem>
  );
};

const HomeScreen: React.FC<Props> = ({ route, navigation }: Props) => {
  const { userId } = route?.params;
  const [page, setPage] = React.useState('');
  const [isEndOfList, setIsEndOfList] = React.useState(false);
  const [tweetsList, setTweetsList] = React.useState(null);

  const { data: tweetsData, isLoading } = useUserTweetsList(userId);

  const { data: newData } = useUserTweetsPaginationList(userId, page, isEndOfList);

  console.log('data ', tweetsData);
  React.useEffect(() => {
    if (tweetsData) {
      if (!tweetsList) {
        setTweetsList(tweetsData.data);
        setPage(tweetsData?.meta?.next_token);
      }
    }
  }, [tweetsData, tweetsList]);

  React.useEffect(() => {
    if (newData && isEndOfList) {
      setTweetsList(newData?.data.hasMore);
      setPage(newData?.meta?.next_token);
      setIsEndOfList(false);
    }
  }, [newData, isEndOfList, tweetsList]);

  const onEndReachedHandler = () => {
    setIsEndOfList(true);
  };

  const onLoadingHandler = () => <View>{isEndOfList && <ActivityIndicator size="large" color={colors.blue} />}</View>;
  const keyExtractor = (item: TweetItem) => item.id;

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.containerLoader}>
          <ActivityIndicator size="large" color={colors.blue} />
        </View>
      )}
      <FlatList
        data={tweetsList}
        renderItem={({ item }) => renderItem(item, navigation, tweetsData?.includes?.users[0])}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.listContainer}
        onEndReached={onEndReachedHandler}
        onEndReachedThreshold={0.1}
        ListFooterComponent={onLoadingHandler}
      />
    </View>
  );
};

export default HomeScreen;
