import React from "react";
import { Button, BackHandler, View, Text } from "react-native";

function Exit() {
  return (
    <View style={{width:'100%',flex: 6, justifyContent: 'center', alignItems: 'center'}}>
       <Text style={{fontSize: 22, marginBottom: 25, textAlign: 'center', paddingHorizontal: 10}}>If you want to quit from app press button</Text>
      <Button title="Exit" onPress={() => BackHandler.exitApp()} />
    </View>
  );
}

export default Exit;
