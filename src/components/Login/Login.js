import React from 'react';
import PropTypes from 'prop-types'
import { AppRegistry, StyleSheet, Text, View, Image, KeyboardAvoidingView, NavigatorIOS,TextInput, statusBar} from 'react-native';
import { Container, Button, Header, Left, Right, Body, Title, Item, Content, Icon, List, ListItem, Input } from "native-base";
import { NavigationActions } from 'react-navigation';
import api from '../SellerMenu.js';
import LoginForm from './LoginForm';

const remote = 'https://www.colourbox.com/preview/11938474-fast-delivery-truck-icon-on-white-background.jpg';
const remote2 = 'http://hd.wallpaperswide.com/thumbs/blurry_blue_background_2-t2.jpg';

export default class Login extends React.Component {
  static navigationOptions = {
      headerStyle: {
        position: 'absolute',
        backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0
      }
    };

  constructor(props){
    super(props);
    this.state={

    };
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Image source={{uri : remote2}} style={styles.container}>
        <KeyboardAvoidingView  behavior="padding">
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              /*source={require('../../images/LoginLogo.png')}*/
              source={{uri : remote}} />

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

          </View>
        </KeyboardAvoidingView>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    //backgroundColor: '#2c3e50',
    alignItems: 'center'

  },
  container: {
    flex: 1,
    //backgroundColor: '#2c3e50',
    alignItems: 'center'

  },
  title: {
    color: '#fff',
    marginTop: 5
    //width: 160,
    //textAlign: 'center',
    //opacity: 0.9
  },
  logoContainer:{
    alignItems: "center",
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 20,
    marginBottom:20,
  },
  logo: {
    width: 100,
    height: 100
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
