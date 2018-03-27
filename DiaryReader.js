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

  render() {
    return (
      <View style={MCV.container}>
        <StatusBar hidden={false} />
        <View style={MCV.firstRow}>
           <TouchableOpacity onPress={this.props.returnPressed}>
              <Text style={MCV.middleButton}>
                返回
              </Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={this.props.readingPreviousPressed}>
              <Text style={MCV.middleButton}>
                上一篇
              </Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={this.props.readingNextPressed}>
              <Text style={MCV.middleButton}>
                下一篇
              </Text>
           </TouchableOpacity>
        </View>
        <View style={MCV.secondRow}>
          <Image style={MCV.moodStyle} source={this.props.diaryMood} />
          <View style={MCV.subViewInReader}>
            <TextInput style={MCV.textInReader} editable={false}>
              {this.props.diaryTitle}
            </TextInput>
            <TextInput style={MCV.textInReader} editable={false}>
              {this.props.diaryTime}
            </TextInput>
          </View>
        </View>
        <TextInput style={[MCV.diaryBodyStyle, {color:'black'}]}
          multiline={true}
          editable={false}
          value={this.props.diaryBody}
        >
        </TextInput>
      </View>
    );
  }
}