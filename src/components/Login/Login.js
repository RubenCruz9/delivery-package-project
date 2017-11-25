import React from 'react';
import PropTypes from 'prop-types'
import { AppRegistry, StyleSheet, Text, View, Image, KeyboardAvoidingView, NavigatorIOS} from 'react-native';
import LoginForm from './LoginForm';

const remote = 'https://www.colourbox.com/preview/11938474-fast-delivery-truck-icon-on-white-background.jpg';
const remote2 = 'http://hd.wallpaperswide.com/thumbs/blurry_blue_background_2-t2.jpg';

export default class Login extends React.Component {
  render() {
    return (
      <Image source={{uri : remote2}} style={styles.container}>
        <KeyboardAvoidingView  behavior="padding">
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              /*source={require('../../images/LoginLogo.png')}*/
              source={{uri : remote}} />

            <Text style={styles.title}></Text>
          </View>
          <View>

            <LoginForm />

          </View>
        </KeyboardAvoidingView>
      </Image>
    );
  }
}

/*onLogin(){
  Alert.alert(
    'Acceso',
    'Has entrado a ClienteDetails',
    [
      {
        text: 'Acpetar',
        onPress: (this.aceptar.bind(this))
      },
      {
        text: 'Cancelar',
        onPress: (this.canelar.bind(this))
      }
    ]
  )
}

aceptar(){
  this.props.navigator.push({
    title: 'ClientDetails',
    name: 'ClientDetails',
    passProps: {}
  });
}
cancelar(){
  console.log('LoginCancelado')
}*/

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
    marginTop: 100
  },
  logo: {
    width: 100,
    height: 100
  }

});
