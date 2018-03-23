/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text, View, TextInput, Image, StatusBar, TouchableOpacity
} from 'react-native';

import MCV from "./MCV";

let angryMood = require('./image/80.png');

export default class DiaryReader extends Component {

  updateSearchKeyword(newWord) {

  }

  render() {
    return (
      <View style={MCV.container}>
        <StatusBar hidden={false} />
        <View style={MCV.firstRow}>
           <TouchableOpacity >
              <Text style={MCV.middleButton}>
                返回
              </Text>
           </TouchableOpacity>
           <TouchableOpacity >
              <Text style={MCV.middleButton}>
                上一篇
              </Text>
           </TouchableOpacity>
           <TouchableOpacity >
              <Text style={MCV.middleButton}>
                下一篇
              </Text>
           </TouchableOpacity>
        </View>
        <View style={MCV.secondRow}>
          <Image style={MCV.moodStyle} source={angryMood} />
          <View style={MCV.subViewInReader}>
            <TextInput style={MCV.textInReader} editable={false}>
              日记标题：某变量  
            </TextInput>
            <TextInput style={MCV.textInReader} editable={false}>
              时间：某变量
            </TextInput>
          </View>
        </View>
        <TextInput style={[MCV.diaryBodyStyle, {color:'black'}]}
          multiline={true}
          editable={false}
          value={'某变量记录日记正文'}
        >
        </TextInput>
      </View>
    );
  }
}