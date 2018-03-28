/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, View, Dimensions, PixelRatio, TextInput, Alert, Promise
} from 'react-native';

const {height, width} = Dimensions.get('window');
const pixelRatioo = PixelRatio.get();
let widthOfMargin = Dimensions.get('window').width * 0.05;

export default class LoginLeaf extends Component {

  static navigationOptions = {
    title: '登录'
  }

  constructor(props) {
    super(props);
    this.state = {
      inputedNum: '',
      inputedPW: ''
    }
    this.updatePW = this.updatePW.bind(this);
    this.jumpToWaiting = this.jumpToWaiting.bind(this);
  };

  jumpToWaiting() {
    this.props.navigation.navigate('Wait', {
      phoneNumber: this.state.inputedNum,
      userPW:this.state.inputedPW,
    });
  }

  updateNum(newText) {
    this.setState( (state) => {
      return {
        inputedNum: newText,
      };
    });
  }

  updatePW(newText) {
    this.setState(() => {
      return {
        inputedPW: newText,
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
      <TextInput style={styles.textInputStype} placeholder={'请输入手机号'}
      onChangeText={(newText) => this.updateNum(newText)}/>
      <Text style={styles.textPrompStyle}>
        您输入的手机号：{this.state.inputedNum}
      </Text>
      <TextInput style={styles.textInputStype} placeholder={'请输入密码'} secureTextEntry={true}
      onChangeText={this.updatePW}
      />

      <Text style={styles.bigTextPrompt} onPress={() => this.userPressConfirm()}> 确   定 </Text>
      <Text style={styles.bigTextPrompt} onPress={() => this.userPressAddressBook()}> 通讯录 </Text>
      </View>
    );
  }

  showWaitingModalBeforeJump() {
    this.props.screenProps.setWaitingModal(true, '请等待...');
    this.aTimer = window.setTimeout(this.jumpToWaiting, 3000);
  }

  userPressConfirm() {
    // this.props.onLoginPressed(this.state.inputedNum, this.state.inputedPW);

    Alert.alert (
      '提示',
      '确定使用' + this.state.inputedNum + '号码登录吗？',
      [
        {text: '取消', onPress:(()=>[]), style:'cancel'},
        {text: '确认', onPress:this.showWaitingModalBeforeJump}
      ]
    );

  }

  optionSelected() {
    console.log(this.props);
  }

  userPressAddressBook() {
    // console.log('clicked contact button');
    // var { NativeAppEventEmitter } = require('react-native');
    // this.NativeMsgSubscription = NativeAppEventEmitter.addListener(
    //   'NativeModuleMsg', (reminder) => {this.handleNativeInterfaceMsg(reminder.message);}
    // );

    let ExampleInterface = require('react-native').NativeModules.ExampleInterface;
    // ExampleInterface.sendMessage('{\"msgType\":\"pickContact\"}');
    ExampleInterface.sendMessage('{ "msgType" : "pickContact"}').then(
      (result)=>{
        console.log(result);
        let msgObj = JSON.parse(result);
        this.setState({inputedNum : msgObj.peerNumber});
      }
    ).catch(
      (error)=>{
        console.log( error );
        console.log( error.message );
        console.log( error.code );
        console.log( error.NativeStackIOS );
        console.log( error.NativeStackIOS.length );
      }
    );
  }

  handleNativeInterfaceMsg( aMsg ) {
    console.log(aMsg);
    let msgObj = JSON.parse( aMsg );
    this.setState({inputedNum : msgObj.peerNumber});
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textInputStype: {
    margin: widthOfMargin,
    backgroundColor: 'gray',
    fontSize: 20,
  },
  textPrompStyle: {
    margin: widthOfMargin,
    fontSize: 20,
  },
  bigTextPrompt: {
    margin: widthOfMargin,
    color: 'white',
    backgroundColor: 'gray',
    textAlign: 'center',
    fontSize: 30,
  },
});
