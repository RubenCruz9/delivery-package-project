import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class ListDividerExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>Ordenes Pendientes</Text>
            </ListItem>
            <ListItem >
              <Text>Ordene 1</Text>
            </ListItem>
            <ListItem>
              <Text>Ordene 2</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Ordenes Aprobadas</Text>
            </ListItem>
            <ListItem>
              <Text>Ordene 5</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
