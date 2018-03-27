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

  constructor(props) {
    super(props);
    this.updateSearchKeyword = this.updateSearchKeyword.bind(this);
  }

  updateSearchKeyword(newWord) {
    this.props.searchKeyword(newWord);

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

           <TouchableOpacity onPress={this.props.writeDiary}>
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
              source={this.props.fakeListMood}
            />
            <View style={MCV.subViewInReader}>
              <TouchableOpacity onPress={this.props.selectListisItem}>
                <Text style={MCV.textInReader}>
                  {this.props.fakeListTitle}
                </Text>
              </TouchableOpacity>
              <Text style={MCV.textInReader}>
                {this.props.fakeListTime}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

// showDiaryList() {
//   return (
//       <DiaryList fakeListTitle={this.state.diaryTitle}
//           fakeListTime={this.state.diaryTime}
//           fakeListMood={this.state.diaryMood}
//           selectListisItem={this.selectListisItem}
//           writeDiary={this.writeDiary}/>
//   );
// }