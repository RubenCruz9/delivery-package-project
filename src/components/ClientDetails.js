import React from 'react';
import{App, Platform, StyleSheet, AppRegistry, View, Image} from 'react-native';
import { Container, Thumbnail,Text, Button, Header, Left, Right,
   Body, Title, Item, Content,Footer, FooterTab, Icon, List, ListItem, Input, Tab, Tabs } from "native-base";
import api from '../Utilities/api.js';

const img = 'https://img00.deviantart.net/e668/i/2012/041/2/5/apps_background_images_by_jemet49-d4pb9m4.png';

export default class ClientDetails extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        data: this.props.navigation.state.params.data2,
      };
    }

    // componentWillMount(){
    //   if (this.state.data.CustomerRef) {
    //     api.getCustomer(this.state.data.CustomerRef.value).then((res)=> {
    //           this.state.data["CustomerObj"] = res;
    //     });
    //   }
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
        <Thumbnail style={styles.image}
        large source={{uri: 'https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/13466045_1071759252891049_3195163375681519002_n.jpg?oh=db4dd93a7b0e14055c47d83271fce38e&oe=5AD3790D'}} />
        <Text style={styles.title}>{this.state.data.GivenName} {this.state.data.FamilyName}</Text>
    </Content>
    <Content>

    <Tabs initialPage={0} style={styles.optionta}>
      <Tab heading="Informacion" >
        <Image source={{uri:img}} style={styles.container}>
          <Content >
            <Content scrollEnabled={true}>
              <Text style={styles.subTitle}> Id Cliente : {this.state.data.Id}</Text>
              <Text style={styles.subTitle}> Empresa : {this.state.data.CompanyName}</Text>
              <Text style={styles.subTitle}> Email : {this.state.data.PrimaryEmailAddr ? this.state.data.PrimaryEmailAddr.Address : 'N/D'}</Text>
              <Text style={styles.subTitle}> Telefono : {this.state.data.PrimaryPhone ? this.state.data.PrimaryPhone.FreeFormNumber : 'N/D'}</Text>
              <Text style={styles.subTitle}> Direccion : {this.state.data.BillAddr.Line1}, {this.state.data.BillAddr.City}</Text>
              </Content>
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
  <Button light
    style={{marginLeft: 120}}
    onPress={() => this.props.navigation.navigate('PantallaMapa', {
      "Longitude" : this.state.data.Longitud,
      "Latitude" : this.state.data.Latitud,
    })}>
        <Text>GoogleMaps</Text>
  </Button>

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
            backgroundColor: 'black',

        },
        topInfo: {
            marginBottom: -180,
            //backgroundColor: '#778899',
        },
    });
