import React from 'react';
import { StyleSheet, Text, View, Navigator,TouchableHighlight, FlatList} from 'react-native';

//const Login = require("./src/component/loginView")
import Login from './src/components/Login/Login.js';
import Test from './src/components/Test.js';
import ClientDetails from './src/components/ClientDetails.js';
import Orders from './src/components/Orders.js';
import CreateOrder from './src/components/CreateOrder.js';
import ProductDetail from './src/components/ProductDetail.js';
import ClientList from './src/components/ClientList.js';
import OrdersDetails from './src/components/OrdersDetails.js';
import SellerMenu from './src/components/SellerMenu.js';
import DriverMenu from './src/components/DriverMenu.js';
import TestApi from './src/components/TestApi.js';
import ProductList from './src/components/ProductList.js';

import {StackNavigator} from 'react-navigation';

const Navigation = StackNavigator({

LoginPantalla : {
  screen: Login
  },
SellerPantalla: {
  screen: SellerMenu
  },
ListaClientePantalla: {
  screen: ClientList
  },
DetalleClientePantalla: {
  screen: ClientDetails
  },
ListaProductoPantalla: {
  screen: ProductList
  },
DetalleProductoPantalla: {
  screen: ProductDetail
  },







});

export default Navigation;

// export default class App extends React.Component {
//
//
//   render() {
//
//
//     return (
//       //<View style={StyleSheet.container}>
//       //<OrdersDetails/>
//       //<CreateOrder/>
//       //<ClientList/>
//       //<ProductDetail/>
//       //<ClientDetails/>
//       //<SellerMenu/>
//       //<DriverMenu/>
//       //<TestApi/>
//       //<Test/>
//       <Login></Login>
//
//       // <FlatList
//       //   data={this.state.data}
//       //   keyExtractior={(x,i) => i}
//       //   renderItem={({item}) =>
//       //   <Text>
//       //     {`${item.name.fist} ${item.name.last}`}
//       //   </Text>}
//       // />
//       // </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftButton: {
    marginTop: 10,
    marginLeft: 20,
    color: '#007AFF'
  } ,
  textNavigator:{
    marginTop: 10,
    color: '#007AFF'
  }
});
