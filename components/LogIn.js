import * as React from 'react';
import {View,TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import InstagramLogin from 'react-native-instagram-login'


function LogIn() {
  return (
    <View>
    <TouchableOpacity onPress={()=> this.refs.instagramLogin.show()}>
        <Text style={{color: 'white'}}>LogIn</Text>
    </TouchableOpacity>
    <InstagramLogin
        ref='instagramLogin'
        clientId='xxxxxxxxxx'
        scopes={['public_content', 'follower_list']}
        onLoginSuccess={(token) => this.setState({ token })}
        onLoginFailure={(data) => console.log(data)}
    />
</View>
  );
}

export default LogIn;