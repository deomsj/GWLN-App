import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Alert, ScrollView, FlatList, Platform, TouchableOpacity} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import PropTypes from 'prop-types';
import { SearchBar, List, ListItem } from 'react-native-elements';
import memberRSVP from './memberRSVP';
import CheckInScreen from './CheckInScreen';

import EventData from './www_timeline_events.json';
import contactData from './mock-database/crm.contacts.json';
import './Global.js';

const tmp = {}

class MyEventDetailScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: {},
			memInfo: contactData,
			attendees: {},

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
				"code": "getEventCheckins", 
				"arguments":{
					"timeline_event_id": this.props.navigation.state.params.item.timeline_event_id,
				}
			}),
		})
		.then(res => res.json())
		.then(res => {
			if (res){
				console.log(res);
				this.setState({
					attendees: res
				}) 
			}
		})
		.catch(error => {
			console.log(error);
		})
		console.log(tmp)
	}

	_renderItem=({ item }) => (
		<TouchableOpacity>
			<ListItem
				id={item.id}
				title={item.first_name}
			/>
		</TouchableOpacity>
	);


	goToCheckIn = () => {
		let CheckInEventID = this.props.navigation.state.params.item.timeline_event_id
		console.log('in go to check in');
		this.props.navigation.navigate('CheckIn', {CheckInEventID})
	}
	


	componentWillMount(){
		this.retrieveEvent();

	}
	render() {
		//this._test();
		console.log(this.state.data);



		// run query of events on the day that is passed then store the information in an array of objects
		//() => this._onPress()
		return(
			<View style={styles.container}>
				<ScrollView>
					<View>

         				<View style={styles.heading}>
          				<Text style={styles.headingText}> {this.props.navigation.state.params.item.event_name} </Text>
          				<Text style={styles.infoText}> {this.props.navigation.state.params.item.event_month}/{this.props.navigation.state.params.item.event_day}/{this.props.navigation.state.params.item.event_year} </Text>
        			</View>
         			<View style={styles.info}>
           				<Text style={styles.infoText}> {this.props.navigation.state.params.item.event_location} </Text>
           				<Text style={styles.infoText}> {this.props.navigation.state.params.item.event_description} </Text>
          				<Button
            				title="Begin Check In"
            				onPress={() => this.goToCheckIn()}
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

export default MyEventDetailScreen;

