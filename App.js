/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { 
    AppRegistry, StyleSheet, View, Text 
} from 'react-native';

import FLAnimatedImage from "./FLAnimatedImage";

export default class LearnRN extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FLAnimatedImage style={styles.container}
                    src='http://img2.imgtn.bdimg.com/it/u=3588772980,2454248748&fm=27&gp=0.jpg'
                    resizeMode='contain'>
                </FLAnimatedImage>
                <Text style={styles.textStyle}>
                    Hello world.
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container1: {
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5'
    },
    textStyle: {
        position: 'absolute',
        top: 320,
        left: 50,
        height: 40,
        fontSize: 30,
        backgroundColor: 'transparent',
    }
});

AppRegistry.registerComponent("LearnRN", () => LearnRN);

/*
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import LoginLeaf from "./LoginLeaf";
import WaitingLeaf from "./WaitingLeaf";
import DiaryWriter from "./DiaryWriter";

const MainScreenNavigator = StackNavigator({
    Login: {screen: LoginLeaf},
    Wait: {screen: WaitingLeaf}
});

const SimpleApp = DrawerNavigator({
    Login: { screen: LoginLeaf },
    Wait: {screen: WaitingLeaf},
    List: { screen: DiaryWriter },
  });

export default class LearnRN extends Component {
    render() {
        return (
            <SimpleApp />
        );
    }
}

AppRegistry.registerComponent("LearnRN", () => LearnRN);


import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginLeaf from "./LoginLeaf";
import WaitingLeaf from "./WaitingLeaf";
import WaitingModel from "./WaitingModel";

const SimpleApp = StackNavigator({
  Home: { screen: LoginLeaf },
  Wait: { screen: WaitingLeaf },
});

export default class LearnRN extends Component {

    constructor(props) {
        super(props);
        this.state={
            showWaitngModal: false,
            modalPrompt: '加载中...',
        }
        this.setWaitingModal = this.setWaitingModal.bind(this);
        // this.jumpToWaiting = this.jumpToWaiting.bind(this);
        // this.aTimer = window.setTimeout(this.jumpToWaiting, 3000);
    }

    componentWillMount() {
        let REQUEST_URL = 'http://localhost:8090/test.json';
        let map = {
            method: 'POST'
        };
        let privateHeaders = {
            'Private-header1' : 'value1',
            'Private-header2' : 'value2',
            'Content-Type' : 'text/plain',
            'User-Agent' : 'testAgent',
        };
        map.headers = privateHeaders;
        map.follow = 20;
        map.timeout = 0;
        map.size = 0;
        map.body = 'This is a message body for test.';
        fetch(REQUEST_URL, map).then(
            (result)=>{
                console.log( result.url );
                console.log( result.ok );
                console.log( result.status );
                console.log( result.statusText );
                console.log( result.heads );
                result.json().then(
                    (obj)=>{
                        console.log('the response body after json.');
                        console.log(obj);
                    }
                ).catch(
                    (error)=>{
                        console.log('a error occour while parse response body.');
                        console.log( error );
                    }
                )
            }
        ).catch(
            (error)=> {
                console.log(error);
            }
        );
    }

    // jumpToWaiting() {
    //     this.setState({showWaitngModal: false});
    // }

    setWaitingModal( show, aPrompt) {
        this.setState({showWaitngModal: show, modalPrompt: aPrompt});
    }

    render() {
        return (
            <View style={{flex: 1}}>
              <SimpleApp screenProps={{ setWaitingModal: this.setWaitingModal, themeColor: 'red'}} />
              <WaitingModel show={this.state.showWaitngModal} 
                prompt={this.state.modalPrompt}>
              
              </WaitingModel>
            </View>
        );
    }
}

/*
AppRegistry.registerComponent("LearnRN", () => LearnRN);

import React, { Component } from "react";
import { AppRegistry } from "react-native";

import DiaryList from "./DiaryList";
import DiaryWriter from "./DiaryWriter";
import DiaryReader from "./DiaryReader";
import DataHandler from "./DataHandler";

export default class LearnRN extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uiCode: 1,
            diaryTime: '读取中......' ,
            diaryTitle: '读取中......' ,
            diaryBody: '读取中......' ,
            diaryMood: null,
            diaryList: [],
        }
        this.bindAllMyFunction();
        DataHandler.getAllTheDiary().then(
            (result)=>{
                this.setState({diaryList: result});
            }
        ).catch(
            (error)=>{
                console.log(error);
            }
        )
    }

    bindAllMyFunction() {
        this.selectListisItem = this.selectListisItem.bind(this);
        this.writeDiary = this.writeDiary.bind(this);
        this.returnPressed = this.returnPressed.bind(this);
        this.saveDiaryAndReturn = this.saveDiaryAndReturn.bind(this);
        this.readingPreviousPressed = this.readingPreviousPressed.bind(this);
        this.readingNextPrssed = this.readingNextPrssed.bind(this);
    }

    readingPreviousPressed() {
        let previousDiary = DataHandler.getPreviousDiary();
        if (previousDiary === null) {
            return;
        }
        this.setState(previousDiary);
    }

    readingNextPrssed() {
        let nextDiary = DataHandler.nextDiary();
        if (nextDiary === null) {
            return;
        }
        this.setState(nextDiary);
    }

    returnPressed() {
        this.setState({uiCode: 1});
    }

    saveDiaryAndReturn(newDiaryMood, newDiaryBody, newDiaryTitle) {
        DataHandler.saveDiary( newDiaryMood, newDiaryBody, newDiaryTitle ).then(
            (result)=>{
                this.setState( result );
            }
        ).catch (
            (error)=>{
                console.log(error);
            }
        )
    }

    writeDiary() {
        this.setState( ()=> {
            return {
                uiCode: 3
            };
        });
    }

    searchKeyword(keyword) {
        console.log('search keyword is:' + keyword);
    }

    selectListisItem( aIndex ) {
        let rValue = DataHandler.getDiaryAtIndex(aIndex);
        this.setState( rValue );
    }

    showDiaryList() {
        return (
            <DiaryList fakeListTitle={this.state.diaryTitle}
                fakeListTime={this.state.diaryTime}
                fakeListMood={this.state.diaryMood}
                diaryList={this.state.diaryList}
                selectListisItem={this.selectListisItem}
                searchKeyword={this.searchKeyword}
                writeDiary={this.writeDiary}/>
        );
    }

    showDiaryWriter() {
        return (
            <DiaryWriter 
                returnPressed={this.returnPressed}
                saveDiary={this.saveDiaryAndReturn}/>
        );
    }

    showDiaryReader() {
        return (
            <DiaryReader returnToDiaryList={this.returnPressed}
                diaryTitle={this.state.diaryTitle}
                diaryMood={this.state.diaryMood}
                diaryTime={this.state.diaryTime}
                returnPressed={this.returnPressed}
                readingNextPrssed={this.readingNextPrssed}
                diaryBody={this.state.diaryBody}/>
        );
    }

    render() {
        if(this.state.uiCode === 1) return this.showDiaryList();
        if(this.state.uiCode === 2) return this.showDiaryReader();
        if(this.state.uiCode === 3) return this.showDiaryWriter();
    }
}
AppRegistry.registerComponent("LearnRN", () => SimpleApp);
*/
