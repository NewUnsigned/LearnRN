/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, View, Dimensions, PixelRatio, TextInput
} from 'react-native';

const {height, width} = Dimensions.get('window');
const pixelRatioo = PixelRatio.get();
let widthOfMargin = Dimensions.get('window').width * 0.05;

export default class LearnRN extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputedNum: '',
      inputedPW: ''
    }
    this.updatePW = this.updatePW.bind(this);
  };

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
        您输入的手机号：{this.state.updateNum}
      </Text>
      <TextInput style={styles.textInputStype} placeholder={'请输入密码'} secureTextEntry={true}
      onChangeText={this.updatePW}
      />
      
      <Text style={styles.bigTextPrompt}>
        确   定
      </Text>
      </View>
    );
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

AppRegistry.registerComponent('LearnRN', () => LearnRN);
