import React , {Component }from 'react';
import{
App,
Platform,
StyleSheet,
AppRegistry,
Text,
View,
TextInput,
Image,
TouchableOpacity,
AsyncStorage,
Button

} from 'react-native';

import MapView from 'react-native-maps';


export default class RutaView extends React.Component {
  render() {
    return (
  
    <View>
     < MapView style= {styles.mapa}

     initialRegion={{
       latitude:18.4595772,
       longitude: -69.9322057,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421,
     }} >


    <MapView.Marker 
    coordinate = {{
     latitude:18.4595772,
     longitude: -69.9322057,
    }}

    />
    </MapView>


 </View>

      
  );
}

}

const styles = StyleSheet.create({
    
    
    mapa:{
      
      backgroundColor : '#95a5a6',
      marginTop: 200,
      height: 500,
    }

});


