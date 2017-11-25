import React from 'react';
import { View } from 'react-native';
import { Container, Text, Button, Header, Left, Right, Body, Title, Item, Content, Icon, List, ListItem, Input } from "native-base";

export default class CreateOrder extends React.Component {

  render() {
    const data = [
      {
        id: 0,
        desc: 'Articulo 1',
        qty: '10',
        price: '100'
      },
      {
        id: 1,
        desc: 'Articulo 2',
        qty: '15',
        price: '100'
      },
      {
        id: 2,
        desc: 'Articulo 3',
        qty: '5',
        price: '100'
      }];

    var items = data.map(item => item);

    return (
      <Container>
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Crear Orden</Title>
            </Body>
            <Right>
              <Button transparent>
                <Text></Text>
              </Button>
            </Right>
          </Header>

          <Content>
            <Container>
              <Header searchBar rounded>
                <Item>
                  <Icon name="search" />
                  <Input placeholder="Search" />
                </Item>
                <Button transparent>
                  <Text>Search</Text>
                </Button>
              </Header>


              <Content>
                <List dataArray={items}
                  renderRow={(item) =>

                    <ListItem key={item.id}>
                        <Text> {item.desc} </Text>
                        <Text note> RD: {item.price} </Text>


                      <View style={{ flexGrow: 1, flexDirection: 'row', justifyContent: 'space-between' }}>


                        <Item regular style={{ width: 100 }}>
                          <Input editable={false} value={item.qty} />

                        </Item>

                      </View>
                    </ListItem>

                          }
                >
                </List>
              </Content>
            </Container>
          </Content>
        </Container>
      </Container>
    )
  }
}
