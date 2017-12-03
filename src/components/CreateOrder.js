import React from 'react';
import { View } from 'react-native';
import { Container, Text, Button, Header, Left, Right, Body, Title, Item, Content, Icon, List, ListItem, Input } from "native-base";

import api from '../Utilities/api.js';


export default class CreateOrder extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          data: [],
          qty: 0,
      }
  }

  componentWillMount(){
    api.getProduct().then((res)=> {
          this.setState({
              data: res
          })
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
    this.setState({ data: test });
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
    this.setState({ data: test });
  }

  render() {
    const data = this.state.data;
    console.log(data[0]);

    var items = data.map(item => item);

    return (
        <Container>
              <Header searchBar rounded>
                <Item>
                  <Icon name="search" />
                  <Input placeholder="Search" />
                </Item>
                <Button transparent>
                  <Text>Search</Text>
                </Button>
              </Header>

              <Content>
                <List dataArray={items}
                  renderRow={(item, key, index) =>
                    <ListItem key={item._id}>
                      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'space-between',}}>
                        <View>
                          <Text> {item.name } </Text><Text note>RD${item.price} </Text>
                        </View>
                      <View style={{ flexGrow: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Button bordered primary onPress={ () => { this.onRemovePress(index) }}>
                         <Text>-</Text>
                        </Button>

                      <Item regular style={{ width: 80}}>
                        <Input editable={false} value={item.count} style={{ marginLeft:100 }} />
                        </Item>
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
