import React from 'react';
import{App, Platform, StyleSheet, AppRegistry, View, Image,TouchableOpacity,ScrollView} from 'react-native';
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
        //console.log(navigate);
        navigate('DetalleProductoPantalla', {data2});
    }
    PasarDatosVista2(_data)
    {
        const { navigate } = this.props.navigation;
        (props) => { navigate };
        const data2 = _data;
        //console.log(navigate);
        navigate('DetalleClientePantalla', {data2});
    }

    componentWillMount(){
      //console.log(this.state.data);
      if (this.state.data.CustomerRef) {
        api.getCustomer(this.state.data.CustomerRef.value).then((res)=> {
              this.state.data["CustomerObj"] = res;
        });
      }
    }

    renderProduct = (objCustomer) => {
      console.log(objCustomer.SalesItemLineDetail.ItemRef.name);
        const { navigate } = this.props.navigation;
        return (
        <View key = {objCustomer.Id}>
          <View style={styles.container2}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.PasarDatosVista(objCustomer)}>
                <Text style={styles.buttonText}> {objCustomer.GivenName} {objCustomer.SalesItemLineDetail.ItemRef.name} </Text>
                <Text note> Cantidad: {objCustomer.SalesItemLineDetail.Qty} </Text>
                </TouchableOpacity>
                <View style={{ width: 50, height: 80, backgroundColor: 'gray', marginTop: 10 }} />
            </View>
          </View>
        </View>
        );
    }


  render() {
    var  products=[]
    for (var i=0; i < this.state.data.Line.length-1; i++) {
      products.push(this.renderProduct(this.state.data.Line[i]))
    }



    return (
    <Image source={{uri:img}} style={styles.container}>
    <Container>
    <Content style={styles.topInfo}>

    <Text style={styles.title}> {this.state.data.CustomerRef ? this.state.data.CustomerRef.name : 'Tiburcio'}</Text>
    <Text style={styles.subTitle3}> Id Factura : {this.state.data.Id}</Text>
    <Text style={styles.subTitle}> Cliente : {this.state.data.CustomerRef.name}</Text>
    <Text style={styles.subTitle}> Telefono : {this.state.data.CustomerRef.name}</Text>
    <Text style={styles.subTitle}> Direccion : {this.state.data.BillAddr.Line1} {this.state.data.BillAddr.city}</Text>
    <Content>
    <Button light
      onPress={() => this.PasarDatosVista2(this.state.data.CustomerObj)}>
          <Text>GoogleMaps</Text>
    </Button>
    </Content>
    </Content>
    <Content>

    <Tabs initialPage={0} style={styles.optiontap}>
      <Tab heading="Productos" >
      <Image source={{uri:img}} style={styles.container}>
      <Content>
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.container2}>
                    { products }
            </View>
        </ScrollView>

        </Content>

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
        container2: {
            flex: 1,
            backgroundColor: '#607D8B'

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
            marginTop: 15,
            marginLeft: 10,
            marginBottom: 15,
            fontSize: 15,
            textAlign: 'left',
            backgroundColor: 'rgba(0,0,0,0)',
        },
        subTitle3: {
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

        contentContainer: {
            paddingVertical: 2
        },

        buttonContainer: {
            flex: 10,
            marginTop: 10,
            backgroundColor: '#34495e',
            paddingVertical: 15,
            width: 300
        },

        buttonText: {

            color: '#FFFFFF',
            fontSize: 18,
            fontWeight: '800',
            marginLeft: 3
        },
    });


    //
    // <Button light
    //   onPress={() => this.props.navigation.navigate('PantallaMapa', {})}>
    //       <Text>GoogleMaps</Text>
    // </Button>

    //
    // for (let x in this.state.data)
    // {
    //     products.push(this.renderProduct(this.state.data.Line[count]))
    //     count+1;
    // }
