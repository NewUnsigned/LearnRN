/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component,PropTypes} from 'react';
import {
  View, NativeModules, requireNativeComponent
} from 'react-native';

var {ScaleToFill, ScaleAspectFit, ScaleAspectFill} = NativeModules.RNFLAnimatedImageManager;
var RNFLAnimatedImage = requireNativeComponent('RNFLAnimatedImage', FLAnimatedImage);
var MODES = {
  'stretch': ScaleToFill,
  'contain': ScaleAspectFit,
  'cover': ScaleAspectFill,
}

export default class FLAnimatedImage extends Component {

  render() {
    var contentMode = MODES[this.props.resizeMode] || MODES.stretch;
    return (
      <RNFLAnimatedImage
        {...this.props}
        contentMode={contentMode} />
    );
  }
}

// FLAnimatedImage.propTypes = {
//   contentMode: PropTypes.number,
//   src: PropTypes.string,
//   resizeMode: PropTypes.string,
//   onFrameChange: PropTypes.func,
//   ...View.propTypes
// };

module.exports = FLAnimatedImage;
