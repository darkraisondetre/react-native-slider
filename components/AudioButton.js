import React from "react";
import SoundPlayer from "react-native-sound-player";
import Sound from "react-native-sound";
import { Button, View } from "react-native";

Sound.setCategory("Playback");

function AudioButton() {
  return (
    <View style={{ width: "25%" }}>
      <Button
        title="Play Music"
        onPress={() => {
          let track = new Sound("sound.mp3", Sound.MAIN_BUNDLE, error => {
            if (error) {
              console.log("failed to load the sound", error);
              console.log(Sound.MAIN_BUNDLE);
              return;
            }
            track.play();
          });
        }}
      />
    </View>
  );
}

export default AudioButton;
