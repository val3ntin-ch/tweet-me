import React from 'react';
import { View, Text } from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import { Card } from 'react-native-elements';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { ScreensParams } from '../../types';
import { formatDate } from '../../utils/index';
import styles from './DetailsScreen.styles';

export type DetailsScreenRouteProp = RouteProp<ScreensParams, 'Details'>;
export type DetailsScreenNavigationProp = StackNavigationProp<ScreensParams, 'Details'>;

export type Props = {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
};

const DetailsScreen: React.FC<Props> = ({ route }: Props) => {
  const { tweet } = route.params;
  const { text: message, created_at: date } = tweet;

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
