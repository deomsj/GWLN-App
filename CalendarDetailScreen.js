import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

class CalendarDetailScreen extends React.Component {


	render() {
		// run query of events on the day that is passed then store the information in an array of objects

		return(
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Text> CalendatDetailScreen </Text>
			</View>
		);
	}

}

export default CalendarDetailScreen;
