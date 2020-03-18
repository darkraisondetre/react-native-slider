import React from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  Button
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LogIn from './LogIn';
import SoundPlayer from "react-native-sound";

// import LogIn from './LogIn'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  render() {
    const { navigation } = this.props;
    if (this.state.isLoading) {
      <View style={{ flex: 1, padding: 20 }}>
        <ActivityIndicator />
      </View>;
    }
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
        }}
      >
        <Image
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
          }}
          style={{ width: 200, height: 200 }}
        />
        <Text style={{ fontSize: 24 }}>Welcome to React Native App!</Text>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Log In with Socials:</Text>

        <Button 
        title="Log In" 
        onPress={() => navigation.navigate('Main')} 
        />
        {/* <LogIn /> */}
      </View>
    );
  }
}

export default Home;
