import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

class MyPastEventsScreen extends React.Component {
	render() {
		return(
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Text> My Past Events </Text>
			</View>
		);
	}
	
}

export default MyPastEventsScreen;