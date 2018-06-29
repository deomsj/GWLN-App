import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, TextInput } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

class CheckInScreen extends React.Component {
	render() {
		return(
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Text> Check in </Text>
			</View>
		);
	}
	
}

export default CheckInScreen;