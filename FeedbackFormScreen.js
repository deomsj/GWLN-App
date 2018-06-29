import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

class FeedbackFormScreen extends React.Component {
	render() {
		return(
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Text> Feedback form </Text>
			</View>
		);
	}
	
}

export default FeedbackFormScreen;