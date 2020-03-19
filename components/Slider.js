import React from "react";
import { Button, View } from "react-native";

function Slider() {
  return (
    <View style={{ width: "25%" }}>
      <Button title="Slider" onPress={console.log('Slider')} />
    </View>
  );
}

export default Slider;
