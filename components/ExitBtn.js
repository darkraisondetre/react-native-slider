import React from "react";
import { Button, BackHandler, View } from "react-native";

function Exit() {
  return (
    <View style={{ width: "25%" }}>
      <Button title="Exit" onPress={() => BackHandler.exitApp()} />
    </View>
  );
}

export default Exit;
