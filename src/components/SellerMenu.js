import React from 'react';
import{App, Platform, StyleSheet, AppRegistry, Image} from 'react-native';
import { Container, Text, Button, Header, Left, Right, Body, Title, Item, Content, Icon, List, ListItem, Input, Tab, Tabs,ScrollableTab } from "native-base";
import ClientList from './ClientList';
import CreateOrder from './CreateOrder';
import OrderList from './OrderList';
import ProductList from './ProductList';

const img = 'https://medialoot.com/preview/atmosphere-app-backgrounds/img/iphone-3.jpg';

export default class SellerMenu extends React.Component {

  constructor(props){
    super(props);
    this.state={
      data: this.props.navigation.state.params,
    };
  }

  render() {
    return (
    <Container>


      <Tabs initialP age={0} renderTabBar={()=> <ScrollableTab />}>
        <Tab heading="Clientes">
        <Image source={{uri:img}} style={styles.container}>
        <Content>
        <ClientList navigation={this.props.navigation} user={this.state.data}/>
        </Content>
        </Image>
        </Tab>

        <Tab heading="Crear Orden">
        <Image source={{uri:img}} style={styles.container}>
        <CreateOrder navigation={this.props.navigation} user={this.state.data}/>
        </Image>
        </Tab>

      <Tab heading="Ordenes">
      <Image source={{uri:img}} style={styles.container}>
      <OrderList navigation={this.props.navigation} user={this.state.data}/>
      </Image>
      </Tab>

    <Tab heading="Productos">
    <Image source={{uri:img}} style={styles.container}>
    <ProductList navigation={this.props.navigation}/>
    </Image>
    </Tab>
    </Tabs>

      </Container>
    );
  }
}
const styles = StyleSheet.create({

        container: {
            flex: 5,
            //padding: 30,
            //backgroundColor: '#bdc3c7',
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
