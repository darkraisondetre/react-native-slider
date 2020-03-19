import React from 'react';
import {View, Button, Linking, Text} from 'react-native';

function LinkButton() {
      return (
        <View style={{width:'100%',flex: 6, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 22, marginBottom: 25, textAlign: 'center'}}>This button redirect you to site q-digital.org</Text>
         <Button title="Q-Digital" onPress={ ()=>{ Linking.openURL('https://q-digital.org')}} />
        </View>
      );
  }

  export default LinkButton;