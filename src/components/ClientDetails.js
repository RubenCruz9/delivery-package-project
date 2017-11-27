import React from 'react';
import{App, Platform, StyleSheet, AppRegistry, View, Image} from 'react-native';
import { Container, Thumbnail,Text, Button, Header, Left, Right,
   Body, Title, Item, Content,Footer, FooterTab, Icon, List, ListItem, Input, Tab, Tabs } from "native-base";
import api from '../Utilities/api.js';

const img = 'https://medialoot.com/preview/atmosphere-app-backgrounds/img/iphone-3.jpg';


export default class ClientDetails extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        data: this.props.navigation.state.params.data2,
      };
    }

  // componentDidMount(){
  //   api.getRovers().then((res)=>{
  //     this.setState({
  //       data: res
  //     })
  //   })
  // }

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
    <Container>
    <Content style={styles.topInfo}>
        <Thumbnail style={styles.image} large source={{uri: 'http://hd.wallpaperswide.com/thumbs/blurry_blue_background_2-t2.jpg'}} />
        <Text style={styles.title}>{this.state.data.firstname} {this.state.data.lastname}</Text>
    </Content>
    <Content>

    <Tabs initialPage={0} style={styles.optiontap}>
      <Tab heading="Informacion" >
      <Image source={{uri:img}} style={styles.container}>
      <Content scrollEnabled={true}>
      <Text style={styles.subTitle}> Id Cliente : {this.state.data._id}</Text>
      <Text style={styles.subTitle}> Empresa : {this.state.data.company}</Text>
      <Text style={styles.subTitle}> Email : {this.state.data.email}</Text>
      <Text style={styles.subTitle}> Telefono : {this.state.data.phone}</Text>
      <Text style={styles.subTitle}> Celular : {this.state.data.mobile}</Text>
      <Text style={styles.subTitle}> Direccion : {this.state.data.address.street}, {this.state.data.address.city},{this.state.data.address.country}</Text>
      </ Content>
      </Image>
      </Tab>

      <Tab heading="Ordenes">
      <Image source={{uri:img}} style={styles.container}>
      <Content scrollEnabled={true}>

      </ Content>
      </Image>

      </Tab>

  </Tabs>

        </Content>
        </Container>
      </Image>

    );
  }
}
const styles = StyleSheet.create({

        container: {
            flex: 5,

        },
        title: {
            color: 'black',
            marginTop: 20,
            fontSize: 25,
            width: 325,
            marginBottom: -40,
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
            marginTop: 40,
            marginLeft: 140,
        },
        optiontap: {
            marginTop: 1,
            //backgroundColor: '#778899',
        },
        topInfo: {
            marginBottom: -180,
            //backgroundColor: '#778899',
        },
    });
