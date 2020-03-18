import React from "react";
import { View, Image } from "react-native";
import picUrl from "../res/urlStore";

function Screen() {
  return (
    <View>
      <Image
        source={{
          uri: picUrl.src1,
          method: "POST",
          headers: {
            Pragma: "no-cache"
          },
          body: "Your Body goes here"
        }}
        style={{
          width: 300,
          height: 300,
          alignSelf: "center",
          marginHorizontal: 10
        }}
      />
    </View>
  );
}

export default Screen;
