import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Alert, ScrollView, FlatList, Platform, TouchableOpacity} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import PropTypes from 'prop-types';
import { SearchBar, List, ListItem } from 'react-native-elements';
import './Global.js';

class memberRSVP extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit = () => {
		const url = 'https://cuwomen.org/functions/app.gwln.php'
		fetch(url, {
			method: "POST",
			headers: {
				'X-Token': 'hub46bubg75839jfjsbs8532hs09hurdfy47sbub',
			},
			body: JSON.stringify({
				"code": "eventRSVP",
				"arguments": {
					"timeline_event_id": ,
					"member_id": global.crm,
					"first_name": global.currUser.first_name,
					"last_name": global.currUser.last_name,
					"email": global.currUser.email1,
					// "guests": integer
				}
			})
		})
	}

	render(){
		return(

		);
	}



}