import React from "react";
import SoundPlayer from "react-native-sound-player";
import Sound from 'react-native-sound';
import { Button, View } from "react-native";
// import sound1 from '../android/app/src/main/res/raw/sound1.mp3';

Sound.setCategory('Playback');


function AudioButton() {
  // let Sound1 = new Sound(sound1);
  // let soundTrack = require('../android/app/src/main/res/raw/sound1.mp3');
    return (
      <View style={{width:'25%'}}>
        <Button
          title="Play Music"
          onPress={() => {
            let track = new Sound('../sound.mp3', '/', (error) => {
              if (error) {
                console.log('failed to load the sound', error);
                console.log(Sound.MAIN_BUNDLE);
                return;
              }
              track.play()
            });
          }}
        />
      </View>
    );
}

export default AudioButton;
