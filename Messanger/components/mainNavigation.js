import React, { Component } from 'react';
import { Container, Header, Content, Title, Footer, FooterTab, Button, Icon, Badge } from 'native-base';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from '../styles';

import AroundMeComponent from './aroundMe'
import MessagesComponent from './messages'
import AccountComponent from './account'


const TAB_STATE = {
  AROUND_ME: 0,
  MESSAGES: 1,
  ACCOUNT: 2
}

export default class MainNavigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tabState : TAB_STATE.MESSAGES
    }
  }

  renderContent() {
    switch(this.state.tabState) {
      case TAB_STATE.AROUND_ME:
        return(<AroundMeComponent/>)
      case TAB_STATE.MESSAGES:
        return(<MessagesComponent/>)
      case TAB_STATE.ACCOUNT:
        return(<AccountComponent/>)
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          {this.renderContent()}
        </Content>
        <Footer >
            <FooterTab>
                <Button>
                    Around Me
                    <Icon name='ios-navigate-outline' />
                </Button>
                <Button active>
                    Messages
                    <Icon name='ios-chatbubbles-outline' />
                </Button>
                <Button>
                    Account
                    <Icon name='ios-contact-outline' />
                </Button>
            </FooterTab>
        </Footer>
      </Container>

    );
  }
}
AppRegistry.registerComponent('MainNavigation', () => MainNavigation);
