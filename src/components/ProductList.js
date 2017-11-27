import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, statusBar, ScrollView} from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text } from 'native-base';
import { NavigationActions } from 'react-navigation';

import api from '../Utilities/api.js';


export default class ProductList extends React.Component {

      constructor(props){
          super(props);
          this.state = {
              data: []
          }
      }

      PasarDatosVista(_data)
      {
          const { navigate } = this.props.navigation;
          (props) => { navigate };
          const data2 = _data;
          console.log(navigate);
          navigate('DetalleProductoPantalla', {data2});
      }

      componentWillMount(){
        api.getProduct().then((res)=> {
              this.setState({
                  data: res
              })
          });
      }

      renderClient = (objCustomer) => {
          const { navigate } = this.props.navigation;
          return (
          <View key = {objCustomer._id}>
            <View style={styles.container}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                  <TouchableOpacity style={styles.buttonContainer} onPress={() => this.PasarDatosVista(objCustomer)}>
                      <Text style={styles.buttonText}> {objCustomer.name} </Text>
                      <Text note>    {objCustomer.category} </Text>
                  </TouchableOpacity>
                  <View style={{ width: 50, height: 80, backgroundColor: 'gray', marginTop: 10 }} />
              </View>
            </View>
          </View>
          );
      }

      render() {
          var payments =[]

          for (let x in this.state.data)
          {
              payments.push(this.renderClient(this.state.data[x]))
          }

          return (
            <Container>
              <Header>
                <Text style={styles.title}>Lista Producto </Text>
              </Header>
              <ScrollView contentContainerStyle={styles.contentContainer}>
                  <View style={styles.container}>
                          { payments }
                  </View>
              </ScrollView>
            </Container>
          );
      }
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: '#607D8B'

      },


      title: {
          color: 'black',
           marginTop:4,
          // width: 360,
          // fontSize: 35,
          textAlign: 'center'
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

      contentContainer: {
          paddingVertical: 2
      }




  });
