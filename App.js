/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
        }
        this.bindAllMyFunction();
        DataHandler.getAllTheDiary().then(
            (result)=>{
                this.setState(result);
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

    selectListisItem() {
        this.setState( {uiCode: 2} );
    }

    showDiaryList() {
        return (
            <DiaryList fakeListTitle={this.state.diaryTitle}
                fakeListTime={this.state.diaryTime}
                fakeListMood={this.state.diaryMood}
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

AppRegistry.registerComponent("LearnRN", () => LearnRN);
