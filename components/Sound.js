import TrackPlayer from "react-native-track-player";
import React from "react";
import { View, Button, Text } from "react-native";
import PlayerBar from "./playerBar.js";
import PlayOrNot from "./PlayOrNot.js";

class SoundPlayer extends React.Component {
  componentDidMount() {
    TrackPlayer.setupPlayer({});
    TrackPlayer.registerPlaybackService(() => require("./SoundService.js"));
    let track1 = {
      id: "track",
      url:
        "http://tegos.kz/new/mp3_full/Luis_Fonsi_feat._Daddy_Yankee_-_Despacito.mp3",
      title: "Despacito",
      artist: "Luis Fonsi Feat. Daddy Yankee",
      artwork:
        "https://images-eu.ssl-images-amazon.com/images/I/61JH2ggghmL._AC_US160_.jpg"
    };
    let track2 = {
      id: "track1",
      url: "http://tegos.kz/new/mp3_full/Akcent_Feat._Chante_-_Inshallah.mp3",
      title: "Inshallah",
      artist: "Akcent Feat Chante",
      artwork:
        "https://www.ecopetit.cat/wpic/mpic/224-2243324_high-resolution-nasa-space.jpg"
    };
    TrackPlayer.add([track1, track2]);
  }

  componentWillUnmount() {
    TrackPlayer.remove();
  }

  render() {
    return (
      <View
        style={{
          flex: 3,
          flexDirection: "column",
          justifyContent: "space-around"
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 22 }}>Music Player</Text>
          {/* <PlayOrNot /> */}
          <PlayerBar />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "flex-end"
          }}
        >
          <Button
            title="<"
            onPress={() => {
              this.prev();
            }}
          />
          <Button
            title="Play Music"
            onPress={() => {
              this.play();
            }}
          />
          <Button
            title="Pause Music"
            onPress={() => {
              this.pause();
            }}
          />
          <Button
            title="Stop Music"
            onPress={() => {
              this.stop();
            }}
          />
          <Button
            title=">"
            onPress={() => {
              this.next();
            }}
          />
        </View>
      </View>
    );
  }

  play() {
    TrackPlayer.play();
  }
  stop() {
    TrackPlayer.stop();
  }
  pause() {
    TrackPlayer.pause();
  }
  trackName() {
    let trackId = TrackPlayer.getCurrentTrack();
    TrackPlayer.getTrack(trackId);
  }
  next() {
    TrackPlayer.skipToNext();
  }
  prev() {
    TrackPlayer.skipToPrevious();
  }
}

export default SoundPlayer;
