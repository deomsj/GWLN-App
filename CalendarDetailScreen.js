import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Alert, ScrollView, FlatList, Platform, TouchableOpacity} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import PropTypes from 'prop-types';
import { SearchBar, List, ListItem } from 'react-native-elements';
import memberRSVP from './memberRSVP';

import EventData from './www_timeline_events.json';
import contactData from './mock-database/crm.contacts.json';

import HTML from 'react-native-render-html';

import './Global.js';

const tmp = {}

class CalendarDetailScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: {},
			memInfo: contactData,

		}
	}

	retrieveEvent = () => {
		const url = 'https://cuwomen.org/functions/app.gwln.php'
		fetch(url, {
			method: "POST",
			headers: {
				'X-Token': 'hub46bubg75839jfjsbs8532hs09hurdfy47sbub',
			},
			body: JSON.stringify({
				"code": "getEventByID",
				"arguments":{
					"timeline_event_id": this.props.navigation.state.params.filteredID,
				}
			}),
		})
		.then(res => res.json())
		.then(res => {
			if (res){
				//console.log(res);
				this.setState({
					data: res
				})
			}
		})
		.catch(error => {
			console.log(error);
		})
		console.log(tmp)
	}

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


	_Post_RSVP = () => {
		let currUser = this.state.memInfo
		if (global.currUser != null) {
				const attendee = {
				event: this.state.data.timeline_event_id,
				cmr_id: global.currUser.contact_id,
				}
				console.log(attendee);
		}
		else {
			const guestAttendee = {
				event: this.state.data.timeline_event_id,
				cmr_id: Math.floor(Math.random()*10000)+1
			}
			console.log(guestAttendee);
		}

	}
	_GoToRSVP = () => {
		let ID = this.state.data.timeline_event_id
		this.props.navigation.navigate('memberRSVP', {ID})
	}


	componentWillMount(){
		this.retrieveEvent()

	}
	render() {
		//this._test();
		console.log(this.state.data);



		// run query of events on the day that is passed then store the information in an array of objects
		//() => this._onPress()
		//<Text style={styles.infoText}> {this.state.data.event_description} </Text>
		return(
			<View style={styles.container}>
				<ScrollView>
					<View>

         				<View style={styles.heading}>
          				<Text style={styles.headingText}> {this.state.data.event_name} </Text>
          				<Text style={styles.infoText}> {this.state.data.event_month}/{this.state.data.event_day}/{this.state.data.event_year} </Text>
        			</View>
         			<View style={styles.info}>
           				<Text style={styles.infoText}> {this.state.data.event_location} </Text>

									<HTML html={this.state.data.event_description} />
          				<Button
            				title="RSVP"
            				onPress={() => this._GoToRSVP()}
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
