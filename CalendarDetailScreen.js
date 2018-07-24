import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import EventData from './www_timeline_events.json';

class CalendarDetailScreen extends React.Component {

	constructor() {
		super();
		this.state = {
			data: EventData,
			detailEvent: {},
		}
	}

	filterData = () => {
		let newData = this.state.data
		var filteredData = newData.Events.filter( e => {
			return e.event_day == this.props.navigation.state.params.date.day
		 	&& e.event_month == this.props.navigation.state.params.date.month 
		 	&& e.event_year == this.props.navigation.state.params.date.year;
		});
		console.log(filteredData);
		//this.setState({detailEvent: filteredData});
	}

	
	ComponentWillMount(){
		console.log('in detail component');
		
	}

	render() {
		//console.log(this.state.data);
		
		this.filterData()

		// run query of events on the day that is passed then store the information in an array of objects

		return(
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Text> {this.state.data.event_description} </Text>
			</View>
		);
	}

}

export default CalendarDetailScreen;
