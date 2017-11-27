import React, {Component} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, statusBar,TouchableHighlight } from 'react-native';
import { Container, Text, Button, Header, Left, Right, Body, Title, Item, Content, Icon, List, ListItem, Input } from "native-base";
import { NavigationActions } from 'react-navigation';
import api from '../SellerMenu.js';

export default class LoginForm extends React.Component {

  constructor(props){
    super(props);
    this.state={

    };
  }

  render() {
    //const { navigate } = this.props.navigation;
    // (props) => {navigate};

    return (
      <Container style={styles.container}>

        <TextInput
          placeholder="Username"
          placeholderTextColor="white"
          retunKeyType="next"
          onSubmitEditing={() => this.passwordImput.focus()}
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.input}/>

        <TextInput
          placeholder="Password"
          placeholderTextColor="white"
          retunKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={(imput) => this.passwordImput = imput }/>

          <Button light
            onPress={() => this.props.navigation.navigate('SellerPantalla', {})
          }><Text> Login </Text></Button>


      </Container>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    marginBottom: 200
  },
  input: {
    height: 35,
    backgroundColor: '#bdc3c7',
    marginBottom:8,
    color: 'white',
    paddingHorizontal: 70,
    //borderWidth: 20
  },
  buttonContainer: {
    padding: 80,
    backgroundColor: '#34495e',
    paddingVertical: 10,
    marginTop: 8
  },
  buttonText: {
    textAlign: 'center',
    color: "#FFFFFF",
    fontWeight: "700"
  }

});
