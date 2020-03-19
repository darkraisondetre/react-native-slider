import React, { useState } from "react";
import { Text, View } from "react-native";
import {
  useTrackPlayerEvents,
  TrackPlayerEvents,
  STATE_PLAYING,
  STATE_PAUSED
} from "react-native-track-player";

const events = [
  TrackPlayerEvents.PLAYBACK_STATE,
  TrackPlayerEvents.PLAYBACK_ERROR
];

const PlayOrNot = () => {
    const [playerState, setState] = useState(null);

    useTrackPlayerEvents(events, event => {
      if (event.type === TrackPlayerEvents.PLAYBACK_ERROR) {
        console.warn("An error occurred while playing the current track.");
      }
      if (event.type === TrackPlayerEvents.PLAYBACK_STATE) {
        setState(STATE_PLAYING);
      }
    });

    let isPlaying = playerState === STATE_PLAYING;

    return (
      <View>
        <Text>The TrackPlayer is {isPlaying ? "playing" : "not playing"}</Text>
      </View>
    );
}

export default PlayOrNot;
