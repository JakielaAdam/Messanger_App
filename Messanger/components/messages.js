import React, { Component } from 'react';
import { Container, Header, Content, Title, List, ListItem } from 'native-base';

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
          <List>
              <ListItem>
                  <Text>Simon Mignolet</Text>
              </ListItem>
              <ListItem>
                  <Text>Nathaniel Clyne</Text>
              </ListItem>
              <ListItem>
                  <Text>Dejan Lovren</Text>
              </ListItem>
          </List>
        </Content>
      </Container>

    );
  }
}
AppRegistry.registerComponent('MessagesComponent', () => MessagesComponent);
