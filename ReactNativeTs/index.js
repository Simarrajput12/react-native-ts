/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/screens/App';
import Todo  from './src/screens/Todo';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Todo);
