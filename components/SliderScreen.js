import React from "react";
import { View, Image } from "react-native";
import picStore from "../res/imgStore";

class SliderScreen extends React.Component {
  selectedImage = () => {
    return picStore[`src${this.props.currentImageID.currentImageID}`];
  };
  render() {
    return (
      <View>
        <Image
          style={{
            width: 300,
            height: 300,
            alignSelf: "center",
            marginHorizontal: 10
          }}
          source={this.selectedImage()}
        />
      </View>
    );
  }
}

export default SliderScreen;
