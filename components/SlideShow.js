import React from "react";
import { View, Text } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { nextImage, prevImage } from "../actions/actions";

import SliderButtonLeft from "./buttons/SliderButtonLeft";
import SliderButtonRight from "./buttons/SliderButtonRight";
import SliderScreen from "./SliderScreen";

class SlideShow extends React.Component {
  render() {
    let currentImageID = this.props.currentImageID;
    return (
      <View>
        <Text style={{ textAlign: "center", fontSize: 20, paddingTop: 20 }}>
          This is Slider
        </Text>
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center"
          }}
        >
          <SliderButtonLeft
            handleClick={() => this.props.prevImage(currentImageID.currentImageID)}
          />
          <SliderScreen currentImageID={currentImageID} />
          <SliderButtonRight
            handleClick={() => this.props.nextImage(currentImageID.currentImageID)}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentImageID: state.currentImageID
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { nextImage: nextImage, prevImage: prevImage },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(SlideShow);
