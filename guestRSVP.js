import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Alert, ScrollView, FlatList, Platform, TouchableOpacity} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import PropTypes from 'prop-types';
import { SearchBar, List, ListItem } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

import t from 'tcomb-form-native';



const Form = t.form.Form;

const guest = t.struct({
	first_name: t.String,
	last_name: t.String,
	email: t.String,
	numGuests: t.Number,
});

var options = {
	fields: {
		first_name: {
			label: 'First name',
			error: 'Please enter your first name'
		},
		last_name: {
			label: 'Last name',
			error: 'Please enter your last name'
		},
		email: {
			label: 'email',
			error: 'Please enter your email'
		},
		numGuests: {
			label: 'Number of attendees',
			error: 'Please enter the number of attendees',
		}
	}
};

class guestRSVP extends React.Component {
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
					"first_name": value.first_name,
					"last_name": value.last_name,
					"email": value.email,
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
	}

	render(){
		return(
			<View style={{flex: 1}}>
				<View>
					<Form ref="form"
						type={guest}
						options={options}/>
				</View>
				<View>
		
				</View>
		<View style={{paddingBottom: 15}}>
					<Button
						title="TEST"
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

export default guestRSVP;

