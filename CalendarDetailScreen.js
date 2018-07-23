import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import EventData from './www_timeline_events.json';

class CalendarDetailScreen extends React.Component {

	constructor() {
		super();
		this.state = {
			data: EventData,
		}
	}

	render() {

		this.state.data = this.state.data.filter(function(item){
			return item.event_day == this.props.navigation.state.params.date.day
		})
		// run query of events on the day that is passed then store the information in an array of objects

		return(
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Text> {this.state.data.event_description} </Text>
			</View>
		);
	}

}

export default CalendarDetailScreen;
