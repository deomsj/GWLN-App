import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Alert, ScrollView, FlatList, Platform, TouchableOpacity} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import PropTypes from 'prop-types';
import { SearchBar, List, ListItem } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

import './Global.js';

class memberRSVP extends React.Component {
	constructor(props) {
		super(props);
		this.inputRefs = {};
		this.state = {
			Function: undefined,
			attendees: [
				{label: '1',
				 value: 1
				},
				{
					label: '2',
					value: 2
				},
				{
					label: '3',
					value: 3
				},
				{
					label: '4',
					value: 4
				},
				{
					label: '5',
					value: 5
				},
				{
					label: '6',
					value: 6
				},
				{
					label: '7',
					value: 7
				},
				{
					label: '8',
					value: 8
				},
				{
					label: '9',
					value: 9
				},
				{
					label: '10',
					value: 10
				},

			],
		};
	}

	handleSubmit = () => {
		let numGuests = this.state.PickerValue
		if (!numGuests) {
			numGuests = 1
		}
		const url = 'https://cuwomen.org/functions/app.gwln.php'
		fetch(url, {
			method: "POST",
			headers: {
				'X-Token': 'hub46bubg75839jfjsbs8532hs09hurdfy47sbub',
			},
			body: JSON.stringify({
				"code": "eventRSVP",
				"arguments": {
					"timeline_event_id": this.props.navigation.state.params.ID,
					"member_id": global.crm,
					"first_name": global.currUser.first_name,
					"last_name": global.currUser.last_name,
					"email": global.currUser.email1,
					 "guests": numGuests,
				}
			}),
		})
		.then(res => res.json())
		.then(res => {
			console.log(res);
		})
		.catch(error => {
			console.log(error);
		})
	}

	render(){
		return(
			<View style={{flex: 1}}>
				<RNPickerSelect
					placeholder={{
						label: 'Number of attendees',
						color: 'lightgray',
					}}
					items={this.state.attendees}
					onValueChange={(value) => {
						this.setState({
							Function: value,
						});
					}}
				/>
				<View style={{paddingBottom: 15}}>
					<Button
						title="RSVP"
						onPress={() => Alert.alert(
              		 		'Success',
              		 		'You are now registered',
              		 		[
              		 		 {text: 'Dismiss', onPress: () => this.handleSubmit()},
               	 			],
             			 	)}
					/>
				</View>
			</View>

		);
	}

}

export default memberRSVP;