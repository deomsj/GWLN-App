import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Alert, ScrollView, FlatList, Platform, TouchableOpacity} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import PropTypes from 'prop-types';
import { SearchBar, List, ListItem } from 'react-native-elements';

import EventData from './www_timeline_events.json';
import contactData from './mock-database/crm.contacts.json';


class CalendarDetailScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: EventData,
			detailEvent: [],
			memInfo: contactData,

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

		});
		//this._test();
		return filteredData;
	};

	_test = () => {
		let tmp = this.state.detailEvent
		console.log('in test');

		if(this.state.detailEvent.length > 0){
			console.log(tmp[0].event_name);
		}

	};
	_onPress = () => {
		console.log('rsvp pressed');
		this._Post_RSVP()
	};

	// _renderItem=({ item }) => {
	// 	<ListItem
 //      		<View>
 //        		id={item.timeline_event_id}
 //        		<View style={styles.heading}>
 //         			<Text style={styles.headingText}> {this.state.detailEvent[0].event_name} </Text>
 //         			<Text style={styles.infoText}> {this.state.detailEvent[0].event_month}/{this.state.detailEvent[0].event_day}/{this.state.detailEvent[0].event_year} </Text>
 //       		</View>
 //        	<View style={styles.info}>
 //          		<Text style={styles.infoText}> {this.state.detailEvent[0].event_location} </Text>
 //          		<Text style={styles.infoText}> {this.state.detailEvent[0].event_description} </Text>
 //          		<Button
 //            		title="RSVP"
 //            		onPress={() => Alert.alert(
 //              		'Success',
 //              		'You are now registered for '+this.state.detailEvent[0].event_name,
 //              		[
 //               		 {text: 'Dismiss', onPress: () => this._onPress()},
 //              		],
 //            		)}
 //          		/>
 //        	</View>
 //      	</View>
 //    />
	// };

	// _rsvp = (crm) => {
	// 	let memData = this.state.memInfo
	// 	var fileteredUserInfo = memData.contacts.filter( e => {
	// 		return e.contact_id == crm;
	// 	})
	// 	this.setState({
	// 		memInfo: fileteredUserInfo,
	// 	})
	// }

	_Post_RSVP = () => {
		let currUser = this.state.memInfo
		if (global.currUser != null) {
				const attendee = {
				event: this.state.detailEvent[0].timeline_event_id,
				cmr_id: global.currUser.contact_id,
				}
				console.log(attendee);
		}
		else {
			const guestAttendee = {
				event: this.state.detailEvent[0].timeline_event_id,
				cmr_id: Math.floor(Math.random()*10000)+1
			}
			console.log(guestAttendee);
		}

	}


	componentWillMount(){
		this.filterData()
		
	}
	render() {
		//this._test();
		//console.log(this.state.data);



		// run query of events on the day that is passed then store the information in an array of objects
		//() => this._onPress()
		return(
			<View style={styles.container}>
				<ScrollView>
					<View>
        				
         				<View style={styles.heading}>
          				<Text style={styles.headingText}> {this.state.detailEvent[0].event_name} </Text>
          				<Text style={styles.infoText}> {this.state.detailEvent[0].event_month}/{this.state.detailEvent[0].event_day}/{this.state.detailEvent[0].event_year} </Text>
        			</View>
         			<View style={styles.info}>
           				<Text style={styles.infoText}> {this.state.detailEvent[0].event_location} </Text>
           				<Text style={styles.infoText}> {this.state.detailEvent[0].event_description} </Text>
          				<Button
            				title="RSVP"
            				onPress={() => Alert.alert(
              				'Success',
              				'You are now registered for '+this.state.detailEvent[0].event_name,
              				[
              				 {text: 'Dismiss', onPress: () => this._onPress()},
               				],
             				)}
           				/>
         			</View>
       			</View>
					
				</ScrollView>

			</View>
		);
	}

}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
	},
	scrollContainer: {
		height: 200,
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
