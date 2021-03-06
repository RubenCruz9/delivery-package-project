import React from 'react';
import PropTypes from 'prop-types'
import { AppRegistry, StyleSheet, Text, View, Image, KeyboardAvoidingView, NavigatorIOS,TextInput, statusBar} from 'react-native';
import { Container, Button, Header, Left, Right, Body, Title, Item, Content, Icon, List, ListItem, Input } from "native-base";
import { NavigationActions } from 'react-navigation';
import LoginForm from './LoginForm';
import SellerMenu from '../SellerMenu.js';
import DriverMenu from '../SellerMenu.js';
import api from '../../Utilities/api.js';


const remote = 'https://d30y9cdsu7xlg0.cloudfront.net/png/100245-200.png';
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
      data: [],
      email : '',
      password : '',
    };
  }

  // componentWillMount(){
  //   api.getRovers().then((res)=> {
  //         this.setState({
  //             data: res
  //         })
  //     });
  // }
  getUserInfo(Id) {
    api.getEmployee(Id).then((res)=> {
      if (res && res.Type =='Vendedor') {
          this.props.navigation.navigate('SellerPantalla', res)
      }
    });
  }

  validation(){
//this.props.navigation.navigate('SellerPantalla', {})
//this.props.navigation.navigate('PantallaChofer', {})

    if (this.state.email.trim() && this.state.password.trim()) {
      api.validateUser(this.state.email.trim()).then((res)=> {
              if (res && res.userId) {
                this.getUserInfo(res.userId);
              } else {
                alert('Usuario o contrasena incorrecta')
              }
      });
    } else {
      alert('Llene los campos de email y contrasena')
    }

  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <Image source={{uri : remote2}} style={styles.container}>

        <KeyboardAvoidingView  behavior="padding">
          <Container style={styles.logoContainer}>
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
                  style={styles.input}
                  onChangeText={(email) => this.setState({email})}/>

                <TextInput
                  placeholder="Password"
                  placeholderTextColor="white"
                  retunKeyType="go"
                  secureTextEntry
                  style={styles.input}
                  ref={(imput) => this.passwordImput = imput }
                  onChangeText={(password) => this.setState({password})}/>

                  <Button light
                  style={styles.buttonContainer}
                      onPress={() => this.validation()}
                    // onPress={() => this.props.navigation.navigate('SellerPantalla', {})
                  ><Text> Login </Text></Button>

          </Container>
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
    height: 100,
    alignItems: 'center',
    marginBottom: 80
  },
  input: {
    height: 40,
    backgroundColor: '#bdc3c7',
    marginBottom:8,
    color: 'white',
    paddingHorizontal: 90,
    //borderWidth: 20
  },
  buttonContainer: {
    padding: 80,
    backgroundColor: '#34495e',
    paddingVertical: 10,
    marginTop: 8,
    alignItems: 'center',
    marginLeft: 30
  },
  buttonText: {
    textAlign: 'center',
    color: "#FFFFFF",
    fontWeight: "700",

  }

});
