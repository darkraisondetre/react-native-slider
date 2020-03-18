import React from 'react';
import {View, Button, Linking} from 'react-native';

function LinkButton() {
      return (
        <View style={{width:'25%'}}>
         <Button title="Q-Digital" onPress={ ()=>{ Linking.openURL('https://q-digital.org')}} />
        </View>
      );
  }

  export default LinkButton;