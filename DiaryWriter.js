/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text, View, TextInput, Image, StatusBar, TouchableOpacity, Alert
} from 'react-native';

import MCV from "./MCV";

let angryMood = require('./image/80.png');

export default class DiaryWriter extends Component {

  returnPressed() {
    Alert.alert(
      '请确认',
      '你确定要退回日记列表吗？',
      [
        {text: '确定'},
        {text: '取消'}
      ]
    );
  }

  render() {
    return (
      <View style={MCV.container}>
        <StatusBar hidden={false} />
        <View style={MCV.firstRow}>
           <TouchableOpacity onPress={this.returnPressed}>
              <Text style={MCV.smallButton}>
                返回
              </Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={this.selectMood}>
              <Text style={MCV.longButton}>
                某变量单签按钮文字
              </Text>
           </TouchableOpacity>
           <TouchableOpacity >
              <Text style={MCV.smallButton}>
                保存
              </Text>
           </TouchableOpacity>
        </View>
        <TextInput style={MCV.titleInputStyle}
          placeholder='写个日记标题吧'
        />
        <TextInput style={MCV.diaryBodyStyle} multiline={true}
          placeholder='日记正文在此输入'
          />
      </View>
    );
  }
}