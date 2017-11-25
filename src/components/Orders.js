import React from 'react';
import{
App,Platform,StyleSheet,AppRegistry,Text,View,TextInput,Image,TouchableOpacity,AsyncStorage,KeyboardAvoidingView
} from 'react-native';

import OrdersDetails from './OrdersDetails';

export default class Orders extends React.Component {
  render() {
    return (

      <View behavior="padding" style={styles.container}>
        <OrdersDetails/>
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
