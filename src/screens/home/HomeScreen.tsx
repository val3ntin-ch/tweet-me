import React from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import Hyperlink from 'react-native-hyperlink';

import { formatDate } from '../../utils/index';
import { TweetItem, TwitterUser, TweetsProps, TweetsScreenNavigationProp } from '../../navigation/types';
import styles from './HomeScreen.styles';
import colors from '../../theme/colors';
import { useUserTweetsList } from '../../services/tweets';

import RenderItem from './RenderItem';

const keyExtractor = (item: TweetItem) => item.id;

// const renderItem = (item: TweetItem, navigation: TweetsScreenNavigationProp, userData: TwitterUser) => {
//   const onNavigationHandler = (itemObj: TweetItem) => {
//     navigation.navigate('Details', { tweet: itemObj });
//   };
//   return (
//     <ListItem
//       onPress={() => onNavigationHandler(item)}
//       bottomDivider
//       topDivider
//       pad={20}
//       containerStyle={styles.listItemContainer}
//     >
//       <Avatar
//         containerStyle={styles.avatarContainer}
//         rounded
//         source={{ uri: userData?.profile_image_url }}
//         size="medium"
//       />
//       <ListItem.Content>
//         <ListItem.Title style={styles.usernameContainer}>
//           <Text style={styles.usernameStyle}>{userData?.name}</Text>
//         </ListItem.Title>
//         <Hyperlink linkDefault={true} linkStyle={styles.linkStyle}>
//           <Text style={styles.listItemTitle} numberOfLines={1}>
//             {item.text}
//           </Text>
//         </Hyperlink>
//         <ListItem.Subtitle style={styles.listItemSubtitle}>{formatDate(item.created_at)}</ListItem.Subtitle>
//       </ListItem.Content>
//       <ListItem.Chevron color={colors.gray} size={26} />
//     </ListItem>
//   );
// };

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
        />
      )}
    </View>
  );
};

export default HomeScreen;
