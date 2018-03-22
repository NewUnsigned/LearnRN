/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Image
} from 'react-native';

let nativeImageSource = require('nativeImageSource');

export default class TextUI extends Component {
  render() {
    let aLongString = '我很长，显示不下怎么办？';
    let ads = {
      ios:'80',
      width : 30,
      height : 30,
    }
    var aImage = nativeImageSource(ads);

    return (
      <View style={styles.container}>
          <Text style={styles.welcome}> 
            Welcome to <Image source={aImage} style={styles.imageInTextStype} /> React Native
          </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent : 'center',
    alignItems : 'center'
  },

  welcome : {
    fontSize : 30,
    textAlign : 'center',
    margin : 10,
  },

  imageInTextStype : {
    height : 30,
    width : 30,
    resizeMode: 'cover',
  }
});
