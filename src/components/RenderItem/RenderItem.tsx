import React from 'react';
import { Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import Hyperlink from 'react-native-hyperlink';

import { formatDate } from '../../utils/index';
import { TweetItem, TwitterUser } from '../../types';
import { TweetsScreenNavigationProp } from '../../screens/home/HomeScreen';

import styles from './RenderItem.styles';
import colors from '../../theme/colors';

type Item = {
  item: TweetItem;
  navigation: TweetsScreenNavigationProp;
  userData: TwitterUser;
};

const RenderItem: React.FC<Item> = ({ item, navigation, userData }: Item) => {
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

const propsAreEquals = (prevProps: Item, nextProps: Item): boolean => prevProps.item.id === nextProps.item.id;

export default React.memo<Item>(RenderItem, propsAreEquals);
