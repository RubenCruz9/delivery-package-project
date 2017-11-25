import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, statusBar} from 'react-native';
import { Container, Text, Button, Header, Left, Right, Body, Title, Item, Content, Icon, List, ListItem, Input } from "native-base";


export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>

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
            onPress={()=> navigate ('SellerMenu')}><Text> Login </Text></Button>


      </View>


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
