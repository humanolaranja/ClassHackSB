import React, { Component } from "react";
import { Image } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Text, Footer, FooterTab, Card, CardItem, } from 'native-base';
import HTML from 'react-native-render-html';
import openMap from 'react-native-open-maps';
import axios from 'axios';
import Share from 'react-native-share';

export default class News extends React.Component {

  constructor(props) {
    super(props);
    this.state = { events: [] }
  }

  componentWillMount() {
    axios.get('https://classappsantabarbara.000webhostapp.com/wp-json/wp/v2/posts').then((response) => {
      events = response.data;
      this.setState({events});
    })
  /*  this.setState({ events: [{"id":62,"date":"2019-03-16T18:09:17","date_gmt":"2019-03-16T18:09:17","guid":{"rendered":"https:\/\/classappsantabarbara.000webhostapp.com\/?post_type=event&#038;p=62"},"modified":"2019-03-16T18:32:11","modified_gmt":"2019-03-16T18:32:11","slug":"blocos-percorrem-ruas-da-regiao-central-no-carnaval-em-santa-barbara-doeste","status":"publish","type":"event","link":"https:\/\/classappsantabarbara.000webhostapp.com\/events\/blocos-percorrem-ruas-da-regiao-central-no-carnaval-em-santa-barbara-doeste","title":{"rendered":"Blocos percorrem ruas da regi\u00e3o central no carnaval em Santa B\u00e1rbara do Oeste"},"content":{"rendered":"<p><!-- wp:paragraph --><\/p>\n<p>O Bloco dos Seresteiros abre, no s\u00e1bado (23), a programa\u00e7\u00e3o de carnaval na cidade. Os participantes caminham do Museu da Imigra\u00e7\u00e3o at\u00e9 a Esta\u00e7\u00e3o Cultural, com trajeto de um quil\u00f4metro.<\/p>\n<p><!-- \/wp:paragraph --><\/p>\n<p><!-- wp:paragraph --><\/p>\n<p>Haver\u00e1 tamb\u00e9m o encontro Happy Hour no Museu, no Museu da Imigra\u00e7\u00e3o.<\/p>\n<p><!-- \/wp:paragraph --><\/p>\n<p><!-- wp:paragraph --><\/p>\n<p>Segundo a prefeitura, a programa\u00e7\u00e3o busca o resgate das tradi\u00e7\u00f5es carnavalescas de Santa B\u00e1rbara d&#8217;Oeste, com a reprodu\u00e7\u00e3o das marchinhas de carnaval e atividades organizadas por volunt\u00e1rios.<\/p>\n<p><!-- \/wp:paragraph --><\/p>\n<p><!-- wp:list --><\/p>\n<ul>\n<li>Bloco dos Seresteiros &#8211; trajeto de 1,1 km<br \/>18h &#8211; Concentra\u00e7\u00e3o no Museu da Imigra\u00e7\u00e3o<br \/>19h &#8211; Passa pelas ruas Santa B\u00e1rbara, General Os\u00f3rio, XV de Novembro.&nbsp;<br \/>20h &#8211; Chega na Esta\u00e7\u00e3o Cultural<br \/>22h &#8211; Dispers\u00e3o<\/li>\n<\/ul>\n<p><!-- \/wp:list --><\/p>\n<p><!-- wp:paragraph --><\/p>\n<p><strong><br \/><\/strong><\/p>\n<p><!-- \/wp:paragraph --><\/p>\n\r\n","protected":false},"excerpt":{"rendered":"<p>23\/02\/2019 &#8211; 23\/03\/2019 @ 6:00 pm &#8211; 10:00 pm &#8211; O Bloco dos Seresteiros abre, no s\u00e1bado (23), a programa\u00e7\u00e3o de carnaval na cidade. Os participantes caminham do Museu da Imigra\u00e7\u00e3o at\u00e9 a Esta\u00e7\u00e3o Cultural, com trajeto de um quil\u00f4metro. Haver\u00e1 tamb\u00e9m o encontro Happy Hour no Museu, no Museu da Imigra\u00e7\u00e3o. Segundo a prefeitura, a programa\u00e7\u00e3o busca o resgate das tradi\u00e7\u00f5es carnavalescas de Santa [&#8230;]<\/p>\n","protected":false},"author":1,"featured_media":63,"comment_status":"open","ping_status":"closed","template":"","event-tags":[24,13],"event-categories":[16],"0":null,"_edit_last":"1","_edit_lock":"1552761359:1","_event_id":"8","_event_timezone":"America\/Sao_Paulo","_event_start_time":"18:00:00","_event_end_time":"22:00:00","_event_start":"2019-02-23 21:00:00","_event_end":"2019-03-24 01:00:00","_event_start_date":"2019-02-23","_event_end_date":"2019-03-23","_location_id":"6","_event_start_local":"2019-02-23 18:00:00","_event_end_local":"2019-03-23 22:00:00","_links":{"self":[{"href":"https:\/\/classappsantabarbara.000webhostapp.com\/wp-json\/wp\/v2\/event\/62"}],"collection":[{"href":"https:\/\/classappsantabarbara.000webhostapp.com\/wp-json\/wp\/v2\/event"}],"about":[{"href":"https:\/\/classappsantabarbara.000webhostapp.com\/wp-json\/wp\/v2\/types\/event"}],"author":[{"embeddable":true,"href":"https:\/\/classappsantabarbara.000webhostapp.com\/wp-json\/wp\/v2\/users\/1"}],"replies":[{"embeddable":true,"href":"https:\/\/classappsantabarbara.000webhostapp.com\/wp-json\/wp\/v2\/comments?post=62"}],"wp:featuredmedia":[{"embeddable":true,"href":"https:\/\/classappsantabarbara.000webhostapp.com\/wp-json\/wp\/v2\/media\/63"}],"wp:attachment":[{"href":"https:\/\/classappsantabarbara.000webhostapp.com\/wp-json\/wp\/v2\/media?parent=62"}],"wp:term":[{"taxonomy":"event-tags","embeddable":true,"href":"https:\/\/classappsantabarbara.000webhostapp.com\/wp-json\/wp\/v2\/event-tags?post=62"},{"taxonomy":"event-categories","embeddable":true,"href":"https:\/\/classappsantabarbara.000webhostapp.com\/wp-json\/wp\/v2\/event-categories?post=62"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}},{"id":44,"date":"2019-03-16T16:23:41","date_gmt":"2019-03-16T16:23:41","guid":{"rendered":"https:\/\/classappsantabarbara.000webhostapp.com\/?post_type=event&#038;p=44"},"modified":"2019-03-16T17:42:49","modified_gmt":"2019-03-16T17:42:49","slug":"festa-confederada-brasil-estados","status":"publish","type":"event","link":"https:\/\/classappsantabarbara.000webhostapp.com\/events\/festa-confederada-brasil-estados","title":{"rendered":"Festa Confederada Brasil-Estados"},"content":{"rendered":"<p><!-- wp:paragraph --><\/p>\n<p>Neste domingo,a Fraternidade Descend\u00eancia Americana, realizara a <em>Festa Confederada Brasil-Estados Unidos<\/em>. A Festa recebe visitantes de v\u00e1rias localidades do&nbsp;Brasil&nbsp;e do&nbsp;Mundo.H\u00e1 23&nbsp;anos&nbsp;\u00e9 realizada no mesmo local e tem como foco retomar a tradi\u00e7\u00e3o e a cultura dos&nbsp;imigrantes&nbsp;norte-americanos sulistas.&nbsp;<\/p>\n<p><!-- \/wp:paragraph --><\/p>\n<p><!-- wp:paragraph --><\/p>\n<p>Durante o evento h\u00e1 barracas de comidas tipicamente americanas, como frango empanado, hamb\u00fargueres e milho cozido; bandas tocando&nbsp;<em>jazz<\/em><em>,&nbsp;<\/em><em>dixieland<\/em><em>,&nbsp;<\/em><em>country<\/em><em>&nbsp;tradicional e&nbsp;<\/em><em>folk<\/em><em>americano<\/em><em>, al\u00e9m disso, \u00e9 poss\u00edvel ver a&nbsp;<\/em>bandeira&nbsp;Dixie,o&nbsp;s\u00edmbolo dos estados&nbsp;rebeldes,espalhadas&nbsp;por todo lado. As dan\u00e7as folcl\u00f3ricas norte-americanas s\u00e3o o ponto alto do evento.&nbsp;&nbsp;<\/p>\n<p><!-- \/wp:paragraph --><\/p>\n\r\n","protected":false},"excerpt":{"rendered":"<p>28\/04\/2019 @ 10:00 am &#8211; 5:00 pm &#8211; Neste domingo,a Fraternidade Descend\u00eancia Americana, realizara a Festa Confederada Brasil-Estados Unidos. A Festa recebe visitantes de v\u00e1rias localidades do&nbsp;Brasil&nbsp;e do&nbsp;Mundo.H\u00e1 23&nbsp;anos&nbsp;\u00e9 realizada no mesmo local e tem como foco retomar a tradi\u00e7\u00e3o e a cultura dos&nbsp;imigrantes&nbsp;norte-americanos sulistas.&nbsp; Durante o evento h\u00e1 barracas de comidas tipicamente americanas, como frango empanado, hamb\u00fargueres e milho cozido; bandas tocando&nbsp;jazz,&nbsp;dixieland,&nbsp;country&nbsp;tradicional [&#8230;]<\/p>\n","protected":false},"author":1,"featured_media":34,"comment_status":"open","ping_status":"closed","template":"","event-tags":[14,12,15,13],"event-categories":[16],"0":null,"_edit_last":"1","_edit_lock":"1552758100:1","_event_id":"5","_event_timezone":"America\/Sao_Paulo","_event_start_time":"10:00:00","_event_end_time":"17:00:00","_event_start":"2019-04-28 13:00:00","_event_end":"2019-04-28 20:00:00","_event_start_date":"2019-04-28","_event_end_date":"2019-04-28","_location_id":"2","_event_start_local":"2019-04-28 10:00:00","_event_end_local":"2019-04-28 17:00:00","_links":{"self":[{"href":"https:\/\/classappsantabarbara.000webhostapp.com\/wp-json\/wp\/v2\/event\/44"}],"collection":[{"href":"https:\/\/classappsantabarbara.000webhostapp.com\/wp-json\/wp\/v2\/event"}],"about":[{"href":"https:\/\/classappsantabarbara.000webhostapp.com\/wp-json\/wp\/v2\/types\/event"}],"author":[{"embeddable":true,"href":"https:\/\/classappsantabarbara.000webhostapp.com\/wp-json\/wp\/v2\/users\/1"}],"replies":[{"embeddable":true,"href":"https:\/\/classappsantabarbara.000webhostapp.com\/wp-json\/wp\/v2\/comments?post=44"}],"wp:featuredmedia":[{"embeddable":true,"href":"https:\/\/classappsantabarbara.000webhostapp.com\/wp-json\/wp\/v2\/media\/34"}],"wp:attachment":[{"href":"https:\/\/classappsantabarbara.000webhostapp.com\/wp-json\/wp\/v2\/media?parent=44"}],"wp:term":[{"taxonomy":"event-tags","embeddable":true,"href":"https:\/\/classappsantabarbara.000webhostapp.com\/wp-json\/wp\/v2\/event-tags?post=44"},{"taxonomy":"event-categories","embeddable":true,"href":"https:\/\/classappsantabarbara.000webhostapp.com\/wp-json\/wp\/v2\/event-categories?post=44"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}}] });*/
  }

  _goToYosemite() {
    openMap({ start: "Campinas - SP", end: "Santa Bárbara D'Oeste - SP"});
    // openMap({ longitude: -22.758675, latitude: -47.420490 });
  }

  render() {
    console.log(this.state);
    let shareOption = {
      title: "Evento em SBO",
      message: "Venha curtir esse evento mara"
    }

    return (
      <Container>
        <Header style={{backgroundColor:"#35b78c"}}>
          <Left>
            <Button transparent>
              <Icon name='search' />
            </Button>
          </Left>
          <Body>
            <Title>Notícias</Title>
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
                  <HTML html= {event.content.rendered} />
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}}>
                    <Icon name="pin" />
                    <Text onPress={this._goToYosemite} > Santa Bárbara do Oeste </Text>
                  </Button>
                </Left>
                <Right>
                  <Button transparent textStyle={{color: '#87838B'}} onPress={() => { Share.open(shareOption) }}>
                    <Icon name="share" />
                    <Text> Compartilhar </Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
          )}
        </Content>
        <Footer  style={{backgroundColor:"#35b78c"}}>
          <FooterTab style={{backgroundColor:"#35b78c"}}>
            <Button vertical onPress={() => this.props.navigation.navigate('Main')}>
              <Icon name="calendar" />
              <Text>Eventos</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('News')}>
              <Icon active name="paper" />
              <Text>Notícias</Text>
            </Button>
            <Button vertical>
              <Icon name="book" />
              <Text>História</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
