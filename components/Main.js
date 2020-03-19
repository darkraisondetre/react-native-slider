import React from "react";
import { View, Image } from "react-native";
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
            alignItems: "flex-end"
          }}
        >
          <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused}) => {
              let iconName;
  
              if (route.name === 'Slider') {
                iconName = 'https://cdn3.iconfinder.com/data/icons/online-shop-2/100/service-07-512.png';
              } else if (route.name === 'Sound Player') {
                iconName = 'https://cdn4.iconfinder.com/data/icons/cartoon-media-player-set/100/Player_-_Audio_Full-512.png';
              }
              else if (route.name === 'Q-Digital') {
                iconName = 'https://w0.pngwave.com/png/371/614/kitten-american-shorthair-maine-coon-dog-looking-after-cats-kitten-png-clip-art.png';
              }
              else if (route.name === 'Exit') {
                iconName = 'https://w1.pngwave.com/png/401/726/420/arrow-icon-exit-icon-log-out-icon-right-icon-line-electric-blue-symbol-logo-rectangle-square-png-clip-art.png';
              }
  
              return <Image source={{uri:iconName} } style={{position: 'absolute', width: 30, height: 30}} />;
            },
          })}
  
          >
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
