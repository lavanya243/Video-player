import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import video from './assets/video.mp4';
import Video1 from './video.mp4';
export default function App() {
  return (
    <Video
      source={Video1}
      // ref={ref => {
      //   this.player = ref;
      // }}
      // onBuffer={this.onBuffer}
      // onError={this.videoError}
      paused={false}
      style={styles.backgroundVideo}
      controls={true}
      repeat={true}
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
    //margin: 10,
  },
});
