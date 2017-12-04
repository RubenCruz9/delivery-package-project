import React , {Component }from 'react';
import{
App,
Platform,
StyleSheet,
AppRegistry,
Text,
View,
Alert,
TextInput,
Image,
TouchableOpacity,
AsyncStorage,
Button,
Linking

} from 'react-native';

import MapView from 'react-native-maps';

import getDirections from 'react-native-google-maps-directions';



export default class MapsView extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        data: props.navigation.state.params
      };
      console.log(this.state.data);
  }

  handleGetDirections = () => {
    const data = {
      destination: {
        latitude: this.state.data.Latitude * 1,
        longitude: this.state.data.Longitude * 1
      },
      params: [
        {
          key: "dirflg",
          value: "w"
        }
      ]
    }

    getDirections(data)
  }


//Gmap() {
  //var origin="18.486058,-69.931212";
  //var destiny="18.433864,-68.965882";

  //Linking.openURL('comgooglemaps://?saddr=' + origin + '&daddr=' + destiny + '&directionsmode=driving');
//}


  render() {
    return (

    <View>

<Button
      onPress={() =>this.handleGetDirections()}title="ir a ruta"></Button>
     < MapView style= {styles.mapa}

     initialRegion={{
       latitude:18.486058,
       longitude:-69.931212,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421,
     }} >


    <MapView.Marker
    coordinate = {{
     latitude:18.486058,
     longitude: -69.931212,
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
    },



});
