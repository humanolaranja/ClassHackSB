import React, { Component } from "react";
import { Image } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Text, Footer, FooterTab, Card, CardItem, } from 'native-base';
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
          {this.state.events.map((event, i) =>
            <Card style={{flex: 0}} key={i}>
              <CardItem>
                <Left>
                  <Body>
                    <Text>{event.title.rendered}</Text>
                    <Text note>{event._event_start}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://www.omelhordaculturasp.com/wp-content/uploads/2016/04/maxresdefault.jpg'}} style={{height: 200, width: 350, flex: 1}}/>
                  <Text>
                    {event.excerpt.rendered}
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}}>
                    <Icon name="logo-github" />
                    <Text>1,926 stars</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
          )}
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
