import React from 'react';
import {View, Text} from 'react-native';
import { useTrackPlayerProgress } from 'react-native-track-player';

const PlayerBar = () => {
  const { position, duration } = useTrackPlayerProgress()

  return (
    <View>
      <Text>Track progress: {position} seconds out of {duration} total</Text>
    </View>
  )
}

export default PlayerBar;