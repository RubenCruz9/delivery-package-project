import React from 'react';
import{App, Platform, StyleSheet, AppRegistry, View, Image} from 'react-native';
import { Container, Thumbnail,Text, Button, Header, Left, Right, Body, Title, Item, Content,Footer, FooterTab, Icon, List, ListItem, Input } from "native-base";
import api from '../Utilities/api.js';

const img = 'https://medialoot.com/preview/atmosphere-app-backgrounds/img/iphone-3.jpg';


export default class ClientDetails extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        data: null,
        name:"",
      };
    }

  componentDidMount(){
    api.getRovers().then((res)=>{
      this.setState({
        data: res
      })
      // this.state.name = this.state.data[0].basic_info.nombre;
      // console.log(this.state.name);
    })
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
        <Thumbnail style={styles.image} large source={{uri: 'http://hd.wallpaperswide.com/thumbs/blurry_blue_background_2-t2.jpg'}} />
        <Text style={styles.title}>{this.state.data.basic_info.nombre} {this.state.data.basic_info.appellido}</Text>
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

        <Text style={styles.subTitle}> Id Cliente : {this.state.data._id}</Text>
        <Text style={styles.subTitle}> Email : {this.state.data.basic_info.email}</Text>
        <Text style={styles.subTitle}> Direccion : </Text>
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
            marginTop: 25,
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
