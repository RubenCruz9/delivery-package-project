import React from 'react';
import{ App, Platform, StyleSheet, AppRegistry, View, TextInput,Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { Container, Text, Button, Header, Left, Right, Body, Title, Item, Content, Icon, List, ListItem, Input } from "native-base";



export default class ProductDetail extends React.Component {
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
          <Title>Producto</Title>
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
      <Text style={styles.subTitle}> Tipo : </Text>
      <Text style={styles.subTitle}> Modelo : </Text>
      <Text style={styles.subTitle}> Precio : </Text>
      <Text style={styles.subTitle}> Cantidad Disponible : </Text>
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
