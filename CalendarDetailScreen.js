import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import EventData from './www_timeline_events.json';
import PropTypes from 'prop-types';

class CalendarDetailScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: EventData,
			detailEvent: null,
			test: null,
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
		check = filteredData[0].event_name
		console.log(check);
		this.setState({
			detailEvent: filteredData,
			test: check,
		});
		this._test();
		return filteredData;
	}

	_test = () => {
		console.log(this.state.detailEvent);
	}

	componentWillMount(){
		this.filterData()
	}
	render() {
		this._test();
		//console.log(this.state.data);
		
		

		// run query of events on the day that is passed then store the information in an array of objects

		return(
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				 <Text> {this.state.test} </Text>
				
			</View>
		);
	}

}

export default CalendarDetailScreen;
