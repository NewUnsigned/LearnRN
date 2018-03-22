/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Dimensions, PixelRatio, TextInput, Platform, BackHandler } from "react-native";

import LoginLeaf from "./LoginLeaf";
import WaitingLeaf from "./WaitingLeaf";
import Flexbox from "./Flexbox";
import TextUI from "./TextUI";
import KeyboardView from "./KeyboardView";

export default class NaviModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScene: "Login",
            phoneNumber: "",
            userPW: "",
        };

        this.handleBackSignal = this.handleBackSignal.bind(this);
        this.onLoginPressed = this.onLoginPressed.bind(this);
    }

    onLoginPressed(aNumber, aPW) {
        this.setState ({
            currentScene: "Waiting",
            phoneNumber: aNumber,
            userPW: aPW,
        });
    }

    render() {
        if (this.state.currentScene === "Login") {
            return <KeyboardView/>
            // return <LoginLeaf onLoginPressed={this.onLoginPressed} />;
        } return (
            <WaitingLeaf
                phoneNumber={this.state.phoneNumber}
                onGobackPressed={this.handleBackSignal}
                userPW={this.state.userPW}
            />
        );
    }

    handleBackSignal() {
        if (this.state.currentScene === "Waiting") {
            this.setState({ currentScene: "Login" });
            return true;
        }
    }

    componentDidMount() {
        if (Platform.OS === "android") {
            BackHandler.addEventListener("hardwareBackPress", this.handleBackSignal);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === "android") {
            BackHandler.removeEventListener("hardwareBackPress", this.handleBackSignal);
        }
    }
}

AppRegistry.registerComponent("LearnRN", () => NaviModule);
