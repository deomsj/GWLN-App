import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import DonateWebView from './DonateWebView';

class GWLNScreen extends React.Component {
  render() {

    return (

      	<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button
                color= '#002A55'
                title="Donate!"
                onPress={() => this.props.navigation.navigate('DonateView')}

          />

     	 </View>
    );
  }
}



export default GWLNScreen;
