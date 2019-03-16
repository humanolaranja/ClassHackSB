import React, { Component } from "react";
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Text, Footer, FooterTab } from 'native-base';
import axios from 'axios';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = { events: [] }
  }

  componentWillMount() {
    axios.get('https://classappsantabarbara.000webhostapp.com/wp-json/wp/v2/event').then((response) => {
      events = response.data;
      this.setState({ events });
    })
  }

  render() {
    console.log(this.state);
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
         <Text> Oi </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
