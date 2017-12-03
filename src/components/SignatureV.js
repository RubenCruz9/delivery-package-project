import React from 'react';
import {
 View,
 Component,
 StyleSheet,
 TouchableHighlight,
 TouchableOpacity,
 Text
 }from 'react-native';
 //import {GoBack} from 'react-base';

import SignaturePad from 'react-native-signature-pad';

export default class SignatureV extends  React.Component {
  constructor(objProps) {
    super(objProps);
    this.state = {
      hasImage: null
    }
  }

  renderPad = () => {
    if (this.state.hasImage) {
      return <View style={{flex: 1, backgroundColor: 'white'}} />;
    }

    return (
      <SignaturePad onError={this._signaturePadError}
      onChange={this._signaturePadChange}
      style={{flex: 1, backgroundColor: 'white'}}
      ref="sign"
      />
    );
  }
 render = () => {
const {goBack} = this.props.navigation;
   return (
     <View style={{flex: 1}}>

      { this.renderPad() }
<View style={{ flex: 1, flexDirection: "row" }}>
                    <TouchableOpacity style={styles.buttonStyle}
                         onPress={() => goBack(null) }>
                        <Text>Save</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => { this.resetSign() } } >
                        <Text>Reset</Text>
                    </TouchableOpacity>

                </View>

     </View>
   )
 };

 _signaturePadError = (error) => {
   console.error(error);
 };

 _signaturePadChange = ({base64DataUrl}) => {
   console.log("Got new signature: " + base64DataUrl);
 };



 saveSign() {


   // this.refs["sign"].saveImage();
}

resetSign() {
  this.setState({ hasImage: true}, () => {
    this.setState({ hasImage: false });
  });
  // this.refs["sign"].resetImage();


}

}

const styles = StyleSheet.create({

    buttonStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        backgroundColor: "#eeeeee",
        margin: 10
    }
});


//  onPress={() => { this.saveSign() } }
