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

export default class DiaryList extends Component {

  updateSearchKeyword(newWord) {

  }

  render() {
    return (
      <View style={MCV.container}>
        <StatusBar hidden={false} />
        <View style={MCV.firstRow}>
           <View style={{marginTop: 2}}>
              <TextInput
                autoCapitaliz="none"
                placeholder='请输入搜索关键字'
                onChangeText={this.updateSearchKeyword}
                style={MCV.searchBarTextInput}
              />
           </View>

           <TouchableOpacity >
             <View style={MCV.middleButtonContainer}>
              <Text style={MCV.middleButton}>
                写日记
              </Text>
             </View>
           </TouchableOpacity>
        </View>
        <View style={MCV.diaryAbstractList}>
          <View style={MCV.secondRow}> 
            <Image style={MCV.moodStyle} 
              source={angryMood}
            />
            <View style={MCV.subViewInReader}>
              <TouchableOpacity onPress={this.props.selectListisItem}>
                <Text style={MCV.textInReader}>
                  某变量记录假日记列表标题
                </Text>
              </TouchableOpacity>
              <Text style={MCV.textInReader}>
                某变量记录假日记列表时间
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}