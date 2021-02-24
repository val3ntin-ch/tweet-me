import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import Hyperlink from 'react-native-hyperlink';

import { formatDate } from '../../utils/index';
import { TweetsScreenNavigationProp, TweetsScreenRouteProp, TweetItem, TwitterUserObj } from '../../navigation/types';
import styles from './HomeScreen.styles';
import colors from '../../theme/colors';
import { useUserTweetsList } from '../../services/tweets';

type Props = {
  route: TweetsScreenRouteProp;
  navigation: TweetsScreenNavigationProp;
};

const EmptyListView: React.FC = () => (
  <View style={styles.emptyList}>
    <Text style={styles.emptyListPlaceholder}>You don't have tweets... !</Text>
  </View>
);

const keyExtractor = (item: TweetItem) => item.id;

const renderItem = (item: TweetItem, navigation: TweetsScreenNavigationProp, userData: TwitterUserObj) => {
  console.log('item data ', item);
  const onNavigationHandler = (itemObj: TweetItem) => {
    navigation.navigate('Details', { tweetObj: itemObj });
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
  const { userId } = route.params;
  const { data: tweetsData } = useUserTweetsList(userId);

  return (
    <View style={styles.container}>
      <FlatList
        data={tweetsData?.data}
        renderItem={({ item }) => renderItem(item, navigation, tweetsData?.includes?.users[0])}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<EmptyListView />}
      />
    </View>
  );
};

export default HomeScreen;
