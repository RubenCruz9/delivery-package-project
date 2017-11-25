import React from 'react';
import{App, Platform, StyleSheet, AppRegistry} from 'react-native';
import { Container, Text, Button, Header, Left, Right, Body, Title, Item, Content, Icon, List, ListItem, Input, Tab, Tabs } from "native-base";
import ClientList from './ClientList';
import CreateOrder from './CreateOrder';
import OrderList from './OrderList';

export default class SellerMenu extends React.Component {
  render() {
    return (
    <Container>

      <Header hasTabs />
      <Tabs initialPage={1}>
        <Tab heading="Clientes">
          <ClientList />
        </Tab>

        <Tab heading="Crear Orden">
          <CreateOrder/>
        </Tab>

      <Tab heading="Ordenes">
        <OrderList/>
      </Tab>
    </Tabs>

      </Container>
    );
  }
}
const styles = StyleSheet.create({

        container: {
            flex: 1,
            padding: 30,
            backgroundColor: '#bdc3c7',
        },
        title: {
            color: 'black',
            marginTop: 20,
            marginBottom: 30,
            fontSize: 20,
            width: 325,
            textAlign: 'center',
        },
        subTitle: {
            color: 'black',
            marginTop: 40,
            marginLeft: 10,
            marginBottom: 15,
            fontSize: 15,
            textAlign: 'left'
        },
    });