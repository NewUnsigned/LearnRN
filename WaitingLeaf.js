/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  StyleSheet, Text, View
} from "react-native";

export default class WaitingLeaf extends Component {

  static navigationOptions = {
    title: '登录中'
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.textPromptStyle}> 
         登录使用的名字：{this.props.phoneNumber}
        </Text>

        <Text style={styles.textPromptStyle}>
         登录使用的面面：{this.props.userPW}
        </Text>
        <Text style={styles.bigTextPrompt} onPress={()=>this.onGobackPressed()}>
          返  回
        </Text>

      </View>
    );
  }

  onGobackPressed() {
    this.props.onGobackPressed();
  }
}

WaitingLeaf.propTypes = {
  phoneNumber: PropTypes.string,
  userPW: PropTypes.string
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },

  textPromptStyle: {
    fontSize: 20,
  },

  bigTextPrompt: {
    width: 300,
    color: "white",
    backgroundColor: "gray",
    textAlign: "center",
    fontSize: 60,
  }
});
