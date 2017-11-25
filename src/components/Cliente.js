import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';

import CForm from './CForm';

export default class Cliente extends React.Component {
  render() {
    return (


      <View behavior="padding" style={styles.container}>


            <CForm/>

            </View>


    );
  }

}
const styles = StyleSheet.create({


container:{
  flex: 1,
  backgroundColor : '#2c3e50'


}

});
