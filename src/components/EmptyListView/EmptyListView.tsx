import React from 'react';
import { View, Text } from 'react-native';
import styles from './EmptyListView.styles';

const EmptyListView: React.FC = () => (
  <View style={styles.emptyList}>
    <Text style={styles.emptyListPlaceholder}>You don't have tweets... !</Text>
  </View>
);

export default EmptyListView;
