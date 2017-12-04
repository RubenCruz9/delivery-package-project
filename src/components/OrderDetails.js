import React from 'react';
import{App, Platform, StyleSheet, AppRegistry, View, Image} from 'react-native';
import { Container, Thumbnail,Text, Button, Header, Left, Right,
   Body, Title, Item, Content,Footer, FooterTab, Icon, List, ListItem, Input, Tab, Tabs,Radio } from "native-base";
import api from '../Utilities/api.js';

const img = 'https://medialoot.com/preview/atmosphere-app-backgrounds/img/iphone-3.jpg';


export default class OrderDetails extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        data: this.props.navigation.state.params.data2,
        cheque: false,
      };
    }

    PasarDatosVista(_data)
    {
        const { navigate } = this.props.navigation;
        (props) => { navigate };
        const data2 = _data;
        console.log(navigate);
        navigate('DetalleClientePantalla', {data2});
    }

    componentWillMount(){
      if (this.state.data.CustomerRef) {
        api.getCustomer(this.state.data.CustomerRef.value).then((res)=> {
              this.state.data["CustomerObj"] = res;
        });
      }
    }


  render() {

    return (
    <Image source={{uri:img}} style={styles.container}>
    <Container>
    <Content style={styles.topInfo}>

    <Text style={styles.title}> {this.state.data.CustomerRef ? this.state.data.CustomerRef.name : 'Tiburcio'}</Text>
    <Text style={styles.subTitle}> Id Factura : {this.state.data.Id}</Text>
    <Text style={styles.subTitle}> Telefono : </Text>


    </Content>
    <Content>

    <Tabs initialPage={0} style={styles.optiontap}>
      <Tab heading="Productos" >
      <Image source={{uri:img}} style={styles.container}>
      <Content>
      <Content scrollEnabled={true}>
      <Button light
        onPress={() => this.PasarDatosVista(this.state.data.CustomerObj)}>
            <Text>GoogleMaps</Text>
      </Button>

</Content>
      </ Content>
      </Image>
      </Tab>

      <Tab heading="Pago">
      <Image source={{uri:img}} style={styles.container}>
      <Content scrollEnabled={true}>
      <Text style={styles.subTitle}> Monto: </Text>
      <Text style={styles.subTitle2} style={{ marginLeft: 125 }}> Metodo de Pago</Text>
      <View style={{ marginTop: 20, flexGrow: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.radioButon}>Efectivo</Text>
          <Right>
            <Radio selected={ !this.state.cheque }/>
          </Right>

        <Text>Cheque</Text>
          <Right>
            <View style={{flex: 1}} onPress={() => {
              this.setState({ cheque: !this.state.cheque});
            }}>
            <Radio selected={ this.state.cheque } />
            </View>
          </Right>
      </View>

      <Button light style={{ marginTop: 40, marginLeft: 150}}
      onPress={() => this.props.navigation.navigate('PantallaFirma', {})}>
            <Text>Firma</Text>
      </Button>

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
            marginTop: 60,
            marginLeft: 10,
            marginBottom: 15,
            fontSize: 15,
            textAlign: 'left',
            backgroundColor: 'rgba(0,0,0,0)',
        },
        subTitle2: {
            color: 'black',
            marginTop: 9,
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
            marginTop: 75,
            //backgroundColor: '#778899',
        },
        topInfo: {
            marginBottom: -180,
            //backgroundColor: '#778899',
        },
        radioButon: {
            marginLeft: 30,
            // marginTop: 20,
            //backgroundColor: '#778899',
        },
    });


    //
    // <Button light
    //   onPress={() => this.props.navigation.navigate('PantallaMapa', {})}>
    //       <Text>GoogleMaps</Text>
    // </Button>
