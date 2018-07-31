import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Alert, ScrollView, FlatList, Platform, TouchableOpacity} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import PropTypes from 'prop-types';
import { SearchBar, List, ListItem } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

import t from 'tcomb-form-native';

import './Global.js';

const Form = t.form.Form;

const NumAttendees = t.struct({
	numGuests: t.Number,
});

var options = {
	fields: {
		numGuests: {
			label: 'Number of attendees',
			error: 'Please enter the number of attendees',
		}
	}
}

class memberRSVP extends React.Component {
	constructor(props) {
		super(props);
		this.inputRefs = {};
	}

	handleSubmit = () => {
		const value = this.refs.form.getValue();
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
					 "guests": value.numGuests,
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
		this.props.navigation.navigate('EventDetails')
	}

	render(){
		return(
			<View style={{flex: 1}}>
				<Form ref="form"
					type={NumAttendees}
					options={options}/>
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