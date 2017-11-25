import React from 'react';
import{App, Platform, StyleSheet, AppRegistry} from 'react-native';
import { Container, Text, Button, Header, Left, Right, Body, Title, Item, Content, Icon, List, ListItem, Input, Tab, Tabs } from "native-base";
import ClientList from './ClientList';
import CreateOrder from './CreateOrder';
import OrderList from './OrderList';

export default class DriverMenu extends React.Component {
  render() {
    return (
    <Container>

      <Header hasTabs />
      <Tabs initialPage={1}>
        <Tab heading="Ordenes">
          <OrderList />
        </Tab>

        <Tab heading="Facturas">
          <CreateOrder/>
        </Tab>

      <Tab heading="Mapa">
        <OrderList/>
      </Tab>
    </Tabs>

      </Container>
    );
  }
}
