import React from "react";
import { View, Button } from "react-native";

function SliderButtonLeft(props) {
  return (
    <View>
        <Button title="<" onPress={props.handleClick} />
    </View>
  );
}

export default SliderButtonLeft;
