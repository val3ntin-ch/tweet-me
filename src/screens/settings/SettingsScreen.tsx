import React from 'react';
import { View, Text } from 'react-native';
import { Button, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { SettingsProps } from '../../navigation/types';
import styles from './SettingsScreen.styles';

const SettingsScreen: React.FC<SettingsProps> = ({ route, navigation }: SettingsProps) => {
  const { params } = route.params;

  const onNavigationHandler = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Avatar
          size="large"
          rounded
          source={{
            uri: params.params.user.profile_image_url,
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>
            username: <Text style={styles.cardInnerTitle}>{params.params.user.username}</Text>
          </Text>
          <Text style={styles.cardSubtitle}>
            user id:
            <Text style={styles.cardInnerSubtitle}> {params.params.user.id}</Text>
          </Text>
        </View>
      </View>

      <Button
        type="clear"
        icon={<Icon name="logout" size={24} color="#636469" />}
        title="Logout"
        titleStyle={styles.buttonStyle}
        containerStyle={styles.buttonContainer}
        onPress={onNavigationHandler}
      />
    </View>
  );
};

export default SettingsScreen;
