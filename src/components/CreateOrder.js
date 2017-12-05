import React from 'react';
import { View, TextInput } from 'react-native';
import { Container, Text, Button, Header, Left, Right, Body, Title, Content,
   Icon, List, ListItem, InputLeft, Picker, Form, Item as FormItem } from "native-base";

import api from '../Utilities/api.js';
const Item = Picker.Item;

export default class CreateOrder extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          data: [],
          customers: [],
          cliente: '',
          selectedProducts: []
      }
  }

  componentWillMount(){
    api.getProduct().then((res)=> {

      res = res.filter((item, index) => {
        if (item.TrackQtyOnHand) {
          return item;
        }
      });
          this.setState({
              data: res
          })
    });

    api.getRovers().then((res)=> {
          // var tempCustomers = [];
          // for (var i=0; i < res.length; i++) {
          //     tempCustomers.push(res[i]["GivenName"] + " "+ );
          // }
          this.setState({
              customers: res
          })
    });
  }

  onValueChange3(value: string) {
    this.setState({
      selected3: value
    });
  }

  prepareOrderJson() {
      var order = {
        "Line": [],
        "CustomerRef" : {}
      };
      // console.log(this.state.selectedProducts);
      order["CustomerRef"]["value"] = this.state.cliente.Id;
      order["CustomerRef"]["name"] = this.state.cliente.DisplayName;
      for (var i = 0; i < this.state.selectedProducts.length ; i++) {
          var tempData = {
              "Description": this.state.selectedProducts[i].Description,
              "Amount": this.state.selectedProducts[i].UnitPrice * this.state.selectedProducts[i].count,
              "DetailType": "SalesItemLineDetail",
              "SalesItemLineDetail": {
                  "ItemRef": {
                      "value": this.state.selectedProducts[i].Id,
                      "name": this.state.selectedProducts[i].Name
                  },
                  "UnitPrice": this.state.selectedProducts[i].UnitPrice,
                  "Qty": this.state.selectedProducts[i].count
              }
          };
          order["Line"].push(tempData);
      }

      api.createOrder(order).then((res)=> {
          console.log(res);
      });
  }

  onAddPress = (intIndex) => {
    const objData = this.state.data[intIndex] || {};
    const newData = { count: 0, ...objData };
    newData.count = newData.count ? newData.count + 1 : 1;
    const test = this.state.data.map((item, index) => {
      if (intIndex == index) {
        return newData;
      }
      return item;
    });
    const products = test.filter((item, index) => {
      if (item.count) {
        return item;
      }
    });
    this.setState({ selectedProducts: products, data: test });
  }

  onValueChange(value: string) {
      this.setState({
        cliente: value
      });
    }


  selectClient = () => {
    return (<Form>
      <Picker
        mode="dropdown"
        placeholder="Select One"
        note={false}
        selectedValue={this.state.cliente}
        onValueChange={this.onValueChange.bind(this)}
      >

      {
        this.state.customers.map((objCustomer) => {
          return (<Item label={`${objCustomer.GivenName} ${objCustomer.FamilyName}`} value={ objCustomer } />);
        })
      }
      </Picker>
    </Form>)

  }



  onRemovePress = (intIndex) => {
    const objData = this.state.data[intIndex] || {};
    const newData = { count: 0, ...objData };
    newData.count = newData.count ? newData.count - 1 : 0;
    const test = this.state.data.map((item, index) => {
      if (intIndex == index) {
        return newData;
      }
      return item;
    });
    const products = test.filter((item, index) => {
      if (item.count) {
        return item;
      }
    });
    this.setState({ selectedProducts: products, data: test });
  }

  render() {
    const data = this.state.data;
    //console.log(this.state.customers);
    var items = data.map(item => item);

    return (
        <Container>
              <Header>
              <Left>
              { this.selectClient() }
              </Left>
              <Right>
              <Button
                style={{marginRight: 0}}
                disabled={!this.state.cliente}
                onPress={ () => { this.prepareOrderJson() }}>
                <Text>Realizar Orden</Text>
              </Button>
              </Right>

              </Header>

              <Content>

                <List dataArray={items}
                  renderRow={(item, key, index) =>
                    <ListItem key={item.Id} style={{marginLeft:1, marginRight:-14}}>
                      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'space-between',}}>
                        <View >
                          <Text> {item.Name } </Text><Text note>RD${item.UnitPrice} </Text>
                        </View>
                      <View style={{ flexGrow: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Button bordered primary onPress={ () => { this.onRemovePress(index) }}>
                         <Text>-</Text>
                        </Button>


                        <Text> {item.count} </Text>


                      <Button bordered primary onPress={ () => { this.onAddPress(index) }}>
                          <Text>+</Text>
                      </Button>
                        </View>
                      </View>
                    </ListItem> }>
                </List>
              </Content>
            </Container>
    )
  }
}
  /*<Text>{ item.count }</Text>*/
// <Content>
//   <List dataArray={items}
//     renderRow={(item) =>
//       <ListItem key={item._id}>
//           <Text> {item.name } </Text>
//         <View>
//           <Item regular style={{ width: 100 }}>
//             <Input editable={false} value={item.qty} />
//           </Item>
//         </View>
//       </ListItem>        }>

// <Header>
//   <Left>
//     <Button transparent>
//       <Icon name='arrow-back' />
//     </Button>
//   </Left>
//   <Body>
//     <Title>Crear Orden</Title>
//   </Body>
//   <Right>
//     <Button transparent>
//       <Text></Text>
//     </Button>
//   </Right>
// </Header>

// <List dataArray={items}
//               renderRow={(item) =>
//                 <ListItem key={item.id}>
//                   <View style={{ flexGrow: 1, flexDirection: 'column' }}>
//                     <Text> {item.desc} </Text>
//                     <Text note> USD: {item.price} </Text>
//                   </View>
//                   <View style={{ flexGrow: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
//                     <Button bordered primary>
//                       <Text>-</Text>
//                     </Button>
//                     <Item regular style={{ width: 100 }}>
//                       <Input editable={false} value={item.qty} />
//                     </Item>
//                     <Button bordered primary>
//                       <Text>+</Text>
//                     </Button>
//                   </View>
//                 </ListItem>
