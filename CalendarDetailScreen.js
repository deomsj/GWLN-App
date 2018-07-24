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
			detailEvent: [],
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
		//this._test();
		return filteredData;
	}

	_test = () => {
		let tmp = this.state.detailEvent
		console.log('in test');
		
		if(this.state.detailEvent.length > 0){
			console.log(tmp[0].event_name);
		}
		
	}

	componentWillMount(){
		this.filterData()
	}
	render() {
		this._test();
		//console.log(this.state.data);
		
		

		// run query of events on the day that is passed then store the information in an array of objects

		return(
			<View style={styles.container}>
				<View style={styles.heading}>
					<Text style={styles.headingText}> {this.state.detailEvent[0].event_name} </Text>
					<Text style={styles.infoText}> {this.state.detailEvent[0].event_month}/{this.state.detailEvent[0].event_day}/{this.state.detailEvent[0].event_year} </Text>
				</View>
				<View style={styles.info}>
					<Text style={styles.infoText}> {this.state.detailEvent[0].event_location} </Text>
					<Text style={styles.infoText}> {this.state.detailEvent[0].event_description} </Text>
				</View>
				 
				
			</View>
		);
	}

}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
	},
	heading: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',

	},
	headingText: {
		fontSize: 24,

	},
	info: {
		flex: 3,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	infoText: {
		fontSize: 16,
		paddingLeft: '5%',
		paddingRight: '5%',
	}
});

export default CalendarDetailScreen;
