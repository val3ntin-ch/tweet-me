import React from 'react';
import { View, Text } from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import { Card } from 'react-native-elements';

import { DetailsScreenRouteProp, DetailsScreenNavigationProp } from '../../navigation/types';
import { formatDate } from '../../utils/index';
import styles from './DetailsScreen.styles';

type Props = {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
};

const DetailsScreen: React.FC<Props> = ({ route }: Props) => {
  const { tweetObj } = route.params;
  const { text: message, created_at: date } = tweetObj;

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>Tweet</Card.Title>
        <Card.Divider />
        <Hyperlink linkDefault={true} linkStyle={styles.linkStyle}>
          <Text style={styles.messageStyle}>{message}</Text>
        </Hyperlink>
        <Text style={styles.dateStyle}>{formatDate(date)}</Text>
      </Card>
    </View>
  );
};

export default DetailsScreen;
