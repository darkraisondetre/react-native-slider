import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
  Button
} from "react-native";
import Screen from "./Screen";
import AudioButton from "./AudioButton";
import LinkButton from "./LinkButton";
import Exit from "./ExitBtn";
import Slider from "./Slider";
import SlideShow from "./SlideShow";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

class Main extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 3,
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <View>
          <SlideShow />
        </View>
        <View
          style={{
            width: "100%",
            flex: 1,
            position: "absolute",
            bottom: 0,
            flexDirection: "row"
          }}
        >
          <Slider />
          <AudioButton />
          <LinkButton />
          <Exit />
        </View>
      </View>
    );
  }
}

export default Main;
