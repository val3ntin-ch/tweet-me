import React from 'react';
import { View, Text } from 'react-native';
import { Button, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SettingsScreenRouteProp, SettingsScreenNavigationProp } from '../../navigation/types';

import styles from './SettingsScreen.styles';

type Props = {
  route: SettingsScreenRouteProp;
  navigation: SettingsScreenNavigationProp;
};

const SettingsScreen: React.FC<Props> = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Avatar
          size="large"
          rounded
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1363228426094538754/3ncXqbh-_normal.jpg',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>
            username: <Text style={styles.cardInnerTitle}>elonmusk</Text>
          </Text>
          <Text style={styles.cardSubtitle}>
            user id:
            <Text style={styles.cardInnerSubtitle}> 44196397</Text>
          </Text>
        </View>
      </View>

      <Button
        type="clear"
        icon={<Icon name="logout" size={24} color="#636469" />}
        title="Logout"
        titleStyle={styles.buttonStyle}
        containerStyle={styles.buttonContainer}
      />
    </View>
  );
};

export default SettingsScreen;
