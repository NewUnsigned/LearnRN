/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet, Text, View
} from 'react-native';

export default class Flexbox extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.vs}> </View>
          <View style={styles.vs2}> </View>
          <View style={styles.vs}> </View>
          <View style={styles.vs1}> </View>
          <View style={styles.vs}> </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    // flex: 1,
    width : 200,
    height : 200,
    backgroundColor: 'white',
    justifyContent : 'space-around'
  },

  firstRow : {
    height : 140,
    top : 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    flexWrap : 'wrap',
    justifyContent : 'space-around'
  },

  test1 : {
    width: 68,
    height : 24,
    backgroundColor: 'white',
  },

  test2 : {
    width: 40,
    height : 24,
    backgroundColor: 'white',
  },

  test3 : {
    width: 100,
    height : 24,
    backgroundColor: 'white',
  },

  testPosition : {
    backgroundColor : 'grey',
    height : 60,
    width : 60,
    position : 'absolute',
    top : 150,
    right : 50
  },

  vs : {
    height : 50,
    backgroundColor : 'gray'
  },

  vs1 : {
    flex : 1,
    height : 50,
    backgroundColor : 'black'
  },

  vs2 : {
    flex : 2,
    backgroundColor : 'black',
    height : 50,
  }
});
