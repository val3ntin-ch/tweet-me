import React from 'react';
import { View, Text } from 'react-native';
import { Button, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useQueryClient } from 'react-query';

import { ScreensParams, TwitterUser } from '../../types';
import styles from './SettingsScreen.styles';

export type SettingsScreenRouteProp = RouteProp<ScreensParams, 'Settings'>;
export type SettingsScreenNavigationProp = StackNavigationProp<ScreensParams, 'Settings'>;

export type Props = {
  route: SettingsScreenRouteProp;
  navigation: SettingsScreenNavigationProp;
};

export type UserCache = {
  data: TwitterUser[];
};

const SettingsScreen: React.FC<Props> = ({ route, navigation }: Props) => {
  const { params } = route.params;
  const client = useQueryClient();

  const { data: userData } = client.getQueryData(`user-data-${params.params.userName}`) as UserCache;

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
            uri: userData[0].profile_image_url,
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>
            username: <Text style={styles.cardInnerTitle}>{userData[0].username}</Text>
          </Text>
          <Text style={styles.cardSubtitle}>
            user id:
            <Text style={styles.cardInnerSubtitle}> {userData[0].id}</Text>
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
