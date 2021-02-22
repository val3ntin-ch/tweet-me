import React from 'react';
import { View, Text } from 'react-native';
import { DetailsScreenRouteProp, DetailsScreenNavigationProp } from '../../navigation/types';

type Props = {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
};

const DetailsScreen: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
};

export default DetailsScreen;
