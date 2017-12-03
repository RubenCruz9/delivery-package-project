import React from 'react';
import{App, Platform, StyleSheet, AppRegistry} from 'react-native';
import { Container, Text, Button, Header, Left, Right, Body, Title, Item, Content, Icon, List, ListItem, Input, Tab, Tabs } from "native-base";
import InvoiceList from './InvoiceList';
import CreateOrder from './CreateOrder';
import OrderList from './OrderList';

export default class DriverMenu extends React.Component {
  render() {
    return (
    <Container>

      <Tabs initialPage={0}>
        <Tab heading="Ordenes">
          <OrderList navigation={this.props.navigation}/>
        </Tab>

        <Tab heading="Facturas">
          <InvoiceList navigation={this.props.navigation}/>
        </Tab>

      <Tab heading="Mapa">
        <OrderList/>
      </Tab>
    </Tabs>

      </Container>
    );
  }
}
