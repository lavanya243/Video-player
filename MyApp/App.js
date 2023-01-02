import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Video from 'react-native-video';

export default function App() {
  return (
    <Video
      source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
      ref={ref => {
        this.player = ref;
      }}
      onBuffer={this.onBuffer}
      onError={this.videoError}
      style={styles.backgroundVideo}
      controls={true}
      hls={true}
    />
  );
}
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
