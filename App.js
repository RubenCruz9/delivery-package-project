import React from 'react';
import { StyleSheet, Text, View, Navigator,TouchableHighlight, FlatList} from 'react-native';

import Login from './src/components/Login/Login.js';
import Test from './src/components/Test.js';
import ClientDetails from './src/components/ClientDetails.js';
import CreateOrder from './src/components/CreateOrder.js';
import ProductDetail from './src/components/ProductDetail.js';
import ClientList from './src/components/ClientList.js';
import OrderDetails from './src/components/OrderDetails.js';
import SellerMenu from './src/components/SellerMenu.js';
import DriverMenu from './src/components/DriverMenu.js';
import TestApi from './src/components/TestApi.js';
import ProductList from './src/components/ProductList.js';
import RutaView from './src/components/RutaView.js';
import InvoiceList from './src/components/InvoiceList.js';
import SignatureV from './src/components/SignatureV.js';
import MapsView from './src/components/MapsView.js';

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
PantallaChofer: {
  screen: DriverMenu
},
DetalleOrden: {
  screen: OrderDetails
},
PantallaFirma:{
  screen: SignatureV
},
PantallaMapa:{
  screen: MapsView
},
PantallaCrearOrden:{
  screen: CreateOrder
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
