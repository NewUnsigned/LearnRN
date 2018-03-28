/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Modal, ActivityIndicator
} from 'react-native';

export default class WaitingModel extends Component {
  render() {
    return (
      <Modal transparent={true}
        onRequestClose={()=>{}}
        visible={this.props.show}>
        <View style={styles.mainViewStyle}>
          <View style={styles.contentViewStyle}>
            <Text style={styles.textStyle}>
              {this.props.prompt}
            </Text>
            <ActivityIndicator animating={true}
              color={'blue'}
              size={'large'}>
            </ActivityIndicator>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
  },

  contentViewStyle: {
    backgroundColor: 'white',
  },

  textStyle: {
    margin: 30,
    fontSize: 30,
  }
});
