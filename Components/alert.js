import React from 'react';
import {Alert, Text, StyleSheet} from 'react-native';

class Alerts extends React.Component {
  showAlert = () => {
    Alert.alert(
      'Alert title',
      'alert msg',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
        {text: 'OK', onPress: () => console.log('Ok pressed')},
      ],
      { cancelable: false }
    )
  }
}
const a = new Alerts();
export default Alerts;
