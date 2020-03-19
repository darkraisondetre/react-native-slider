import React from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import InstagramLogin from "react-native-instagram-login";

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
        <Text style={{ fontSize: 20, marginBottom: 10 }}>
          Log In with Instagram:
        </Text>
        <View>
          <TouchableOpacity
            onPress={() => {
              alert(this.instagramLogin.props.onLoginSuccess);
              navigation.navigate("Main");
            }}
          >
            <Text style={{ color: "cyan", fontSize: 20 }}>Login</Text>
          </TouchableOpacity>
          <InstagramLogin
            ref={ref => (this.instagramLogin = ref)}
            appId="263458"
            appSecret="136421236"
            redirectUrl="https://www.google.com"
            scopes={["user_profile", "user_media"]}
            onLoginSuccess={this.setIgToken}
            onLoginFailure={(data) => console.log(data)}
          />
        </View>
      </View>
    );
  }
}

export default Home;
