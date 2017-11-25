import React from 'react';
import{
App, Platform, StyleSheet, AppRegistry, Text, View, TextInput,Image, TouchableOpacity, AsyncStorage,Button
} from 'react-native';


export default class OrdersDetails extends React.Component {
  render() {
    return (
      <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>Detalle Orden</Title>
        </Body>
        <Right>
          <Button transparent>
            <Text></Text>
          </Button>
        </Right>
      </Header>
      <Text style={styles.subTitle}> Id Producto : </Text>
      <Item regular>
        <Input placeholder='Id Producto'/>
        </Item>
      <Text style={styles.subTitle}> Id Orden : </Text>
      <Text style={styles.subTitle}> Cotnacto : </Text>
      <Text style={styles.subTitle}> Telefono : </Text>
      <Text style={styles.subTitle}> Direccion : </Text>
      <Text style={styles.subTitle}> Vendedor : </Text>
      </Container>
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
            height: 40,
            width:250,
           backgroundColor: "black",
            paddingHorizontal: 100,
            marginTop: 600
        }
    });
