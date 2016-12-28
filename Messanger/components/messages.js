import React, { Component } from 'react';
import { Container, Header, Content, Title } from 'native-base';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from '../styles';

export default class MessagesComponent extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Title>Messages</Title>
        </Header>
        <Content>

        </Content>
      </Container>

    );
  }
}
AppRegistry.registerComponent('MessagesComponent', () => MessagesComponent);
