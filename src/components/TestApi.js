import React from 'react';
import{App, FlatList,Platform, StyleSheet, AppRegistry, View} from 'react-native';
import { Container, Text, Button, Header, Left, Right, Body, Title, Item, Content, Icon, List, ListItem, Input, Tab, Tabs } from "native-base";
import api from '../Utilities/api.js';



export default class SellerMenu extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        data: null,
        name:"",
      };
    }

  componentDidMount(){
    api.getRovers().then((res)=>{
      this.setState({
        data: res
      })
      // this.state.name = this.state.data[0].basic_info.nombre;
      // console.log(this.state.name);
    })
  }

  render() {
    if (!this.state.data) {
      return (
        <View style={styles.container}>
            <Text>
              Loading...
            </Text>
          </View>
      );
    }

    return (

    <View style={styles.container}>
        <Text>
          {this.state.data.basic_info.appellido}
        </Text>

    </View>

    );
  }
}
const styles = StyleSheet.create({

        container: {
            flex: 1,
            padding: 30,
            marginTop: 80,
            backgroundColor: '#bdc3c7',
        },
    });
