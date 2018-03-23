/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry } from "react-native";

import DiaryList from "./DiaryList";
// import DiaryWriter from "./DiaryWriter";
// import DiaryReader from "./DiaryReader";

export default class LearnRN extends Component {

    showDiaryList() {
        return (
            <DiaryList/>
        );
    }

    showDiaryWriter() {
        return (
            <DiaryWriter/>
        );
    }

    showDiaryReader() {
        return (
            <DiaryReader/>
        );
    }

    render() {
        return this.showDiaryList();
        return this.showDiaryWriter();
        return this.showDiaryReader();
    }
}

AppRegistry.registerComponent("LearnRN", () => LearnRN);
