import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';

import { enableScreens } from 'react-native-screens';
enableScreens();

import App from './src/app/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
