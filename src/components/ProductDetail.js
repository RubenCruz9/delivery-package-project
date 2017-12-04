import React from 'react';
import{App, Platform, StyleSheet, AppRegistry, View, Image} from 'react-native';
import { Container, Thumbnail,Text, Button, Header, Left, Right, Body, Title, Item, Content,Footer, FooterTab, Icon, List, ListItem, Input } from "native-base";
import api from '../Utilities/api.js';

const img = 'https://medialoot.com/preview/atmosphere-app-backgrounds/img/iphone-3.jpg';


export default class ProductDetails extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        data: this.props.navigation.state.params.data2,
      };
    }

  render() {
    if (!this.state.data) {
      return (
        <View style={styles.container}>
            <Text>
              Loading...
            </Text>
          </View>
      );
    }

    return (
    <Image source={{uri:img}} style={styles.container}>
      <View>
        <Thumbnail style={styles.image} large source={{uri: this.state.data.url}} />
        <Text style={styles.title}>{this.state.data.Name}</Text>
        <
        Footer style={styles.optiontap}>
            <FooterTab>
              <Button vertical>
                <Text style={styles.subTitle}>Informacion</Text>
              </Button>
              <Button vertical>
                <Text style={styles.subTitle}>Ordenes</Text>
              </Button>
            </FooterTab>
          </Footer>

        <Text style={styles.subTitle}> Id : {this.state.data.Id}</Text>
        <Text style={styles.subTitle}> Categoria : {this.state.data.Description}</Text>
        <Text style={styles.subTitle}> Cantidad : {this.state.data.quantity}</Text>
        <Text style={styles.subTitle}> Precio :  {this.state.data.UnitPrice} {this.state.data.currency}</Text>
        </View>
      </Image>

    );
  }
}
const styles = StyleSheet.create({

        container: {
            flex: 1,

        },
        title: {
            color: 'black',
            marginTop: 20,
            fontSize: 25,
            width: 325,
            textAlign: 'center',
            backgroundColor: 'rgba(0,0,0,0)',

        },
        subTitle: {
            color: 'black',
            marginTop: 10,
            marginLeft: 10,
            marginBottom: 15,
            fontSize: 15,
            textAlign: 'left',
            backgroundColor: 'rgba(0,0,0,0)',
        },
        image: {
            alignItems: 'center',
            marginTop: 60,
            marginLeft: 140,
        },
        optiontap: {
            marginTop: 30,
            //backgroundColor: '#778899',
        },
    });
