/* eslint-disable prettier/prettier */
import {AppRegistry} from 'react-native';
import App from '../App';
import {name as appName} from '../app.json';

// Đăng ký component App
AppRegistry.registerComponent(appName, () => App);

// Render ra web
console.log('index.web.tsx is running');
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
});
