import React from 'react';
import{
App, Platform, StyleSheet, AppRegistry, Text, View, TextInput,Image, TouchableOpacity, AsyncStorage,Button
} from 'react-native';


export default class OrdersDetails extends React.Component {
  render() {
    return (

        <View style={styles.container}>


          <Text style={styles.title}> Detalle Orden</Text>
          <Text style={styles.subTitle}> Contacto : </Text>
          <Text style={styles.subTitle}> Telefono : </Text>
          <Text style={styles.subTitle}> Direccion : </Text>
          <Text style={styles.subTitle}> Vendedor : </Text>

          <Button style={styles.button} title="Salir"
          />
          </View>
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
            marginTop: 15,
            marginBottom: 15,
            fontSize: 15,
            textAlign: 'left'
        },

        button:{
            color: '#27ae60',
            height: 40,
            width:250,
            backgroundColor: "black",
            paddingHorizontal: 100,
            marginTop: 600
        }
    });
