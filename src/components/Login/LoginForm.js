import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, statusBar} from 'react-native';
import { Container, Text, Button, Header, Left, Right, Body, Title, Item, Content, Icon, List, ListItem, Input } from "native-base";
import { StackNavigator } from 'react-navigation';

export default class LoginForm extends React.Component {


 constructor() {
    super();
    this.state = {
      isReady: false
    };
  }


async componentWillMount() {
  await Expo.Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
  });

  this.setState({ isReady: true });
}
  

 
    
  render() {

   
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
   

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
           
            onPress={() => navigate("SellerPantalla",{})}><Text> Login </Text></Button>
             

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
