/**
 * @format
 */
import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import StorybookUI from './storybook';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => StorybookUI);
