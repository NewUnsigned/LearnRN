/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text, View, TextInput, Image, StatusBar, TouchableOpacity, ListView, RefreshControl
} from 'react-native';

import MCV from "./MCV";

let angryMood = require('./image/80.png');

export default class DiaryList extends Component {

  static navigationOptions() {
    title: '我的'
  }

  constructor(props) {
    super(props);

    this.state = {
      diaryListDataSource: new ListView.DataSource({
        rowHasChanged: (oldRow, newRow) => oldRow !== newRow
      })
    };

    this.updateSearchKeyword = this.updateSearchKeyword.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
    this.onRefresh = this._onRefresh.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  _onRefresh() {
    console.log('onFresh');
  }

  onScroll() {
    console.log('onScroll');
  }

  componentWillMount() {
    if (this.props.diaryList === null) {
      return;
    }
    this.setState({
      diaryListDataSource: this.state.diaryListDataSource.cloneWithRows(this.props.diaryList)
    });
  }

  componentWillReceiveProps( nextProps ) {
    this.setState({
      diaryListDataSource: this.state.diaryListDataSource.cloneWithRows(nextProps.diaryList)
    });
  }

  updateSearchKeyword(newWord) {
    this.props.searchKeyword(newWord);

  }

  renderListItem(log, sectionID, rowID) {
    return (
      <TouchableOpacity onPress={()=>this.props.selectListisItem(rowID)}>
          <View style={MCV.secondRow}> 
            <Image style={MCV.moodStyle} 
              source={log.mood}
            />
            <View style={MCV.subViewInReader}>
              <Text style={MCV.textInReader}>
                {log.title}
              </Text>
              <Text style={MCV.textInReader}>
                {log.time}
              </Text>
            </View>
          </View>
      </TouchableOpacity>
    );
  }

  renderHeader() {
    return (
      <View>
        <Text style={{height: 40,backgroundColor: 'grey'}}> 我是header </Text>
      </View>
    )
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
        {
          (
            (this.props.diaryList.length !== 0) ?
            (
              <ListView dataSource={this.state.diaryListDataSource} renderRow={this.renderListItem}
                renderHeader={this.renderHeader}
                onScroll={this.onScroll}
                refreshControl={
                  <RefreshControl refreshing={false}
                    onRefresh={this._onRefresh}
                    tintColor='#ff0000'
                    colors={['#ff0000','#00ff00','#0000ff']}
                    progressBackgroundColor='#ffff00'>
                    
                  </RefreshControl>
                }>
              </ListView>
            ):
            (
              <View style={{flex:1, justifyContent: 'center'}}>
                <Text style={{fontSize: 18}}> 您还没有写日记哦 </Text>
              </View>
            )
          )
        }
      </View>
    );
  }
}