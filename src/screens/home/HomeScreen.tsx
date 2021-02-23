import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import moment from 'moment';
import Hyperlink from 'react-native-hyperlink';
import { HomeScreenRouteProp, HomeScreenNavigationProp } from '../../navigation/types';
import allData from '../../mock-data/data.json';
import styles from './HomeScreen.styles';
import colors from '../../theme/colors';

type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

type Item = {
  text: string;
  created_at: string;
  author_id: string;
  id: string;
};

const formatDate = (value: string): string => {
  return moment(value).format('HH:mm - D.MM.YYYY');
};

const HomeScreen: React.FC<Props> = ({ navigation }: Props) => {
  const {
    data,
    includes: { users },
  } = allData;

  const onNavigationHandler = () => {
    navigation.navigate('Details');
  };

  const keyExtractor = (item: Item) => item.id;

  const renderItem = ({ item }: { item: Item }) => (
    <ListItem onPress={onNavigationHandler} bottomDivider topDivider pad={20} containerStyle={styles.listItemContainer}>
      <Avatar
        containerStyle={styles.avatarContainer}
        rounded
        source={{ uri: users[0].profile_image_url }}
        size="medium"
      />
      <ListItem.Content>
        <ListItem.Title style={styles.usernameContainer}>
          <Text style={styles.usernameStyle}>{users[0].name}</Text>
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
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

export default HomeScreen;
