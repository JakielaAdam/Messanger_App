/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MainNavigation from './components/mainNavigation'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from './styles';

export default class Messanger extends Component {
  render() {
    return (
      <MainNavigation/>
    );
  }
}
AppRegistry.registerComponent('Messanger', () => Messanger);
