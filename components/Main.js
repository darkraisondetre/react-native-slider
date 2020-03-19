import React from "react";
import {
  View
} from "react-native";
import LinkButton from "./LinkButton";
import Exit from "./ExitBtn";
import SlideShow from "./SlideShow";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SoundPlayer from "./Sound";

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
        <View
          style={{
            width: "100%",
            flex: 1,
            position: "relative",
            bottom: 0,
            flexDirection: "row",
            alignItems: 'flex-end'
          }}
        >
            <Tab.Navigator>
              <Tab.Screen name="Slider" component={SlideShow} />
              <Tab.Screen name="Sound Player" component={SoundPlayer} />
              <Tab.Screen name="Q-Digital" component={LinkButton} />
              <Tab.Screen name="Exit" component={Exit} />
            </Tab.Navigator>
        </View>
      </View>
    );
  }
}

export default Main;
