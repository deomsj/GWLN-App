import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Platform, ScrollView, } from 'react-native';
import Animbutton from './Animbutton';

const jsonData = {"Events" : {
	"Event Name": "name",
	"Event Location": "location",
	"Event Description": "description",
}}

export default class Slot extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bookingDate: this.props.navigation.state.params.bookingDate
		}
	}

	_onPressBack(){
		const {goBack} = this.props.navigation
		goBack()
	}

	_bookEvent(status, key, value){
		const month = this.state.bookingDate.month
		const date = this.state.bookingDate.day
		if(status){
			console.log('status');
		}
		else{
			console.log('no status');
		}
	}
	render(){
		let _this = this
		const Events = jsonData.Events
		const eventsArr = Object.keys(Events).map( function(k) {
			return (
				<View key={k} style={{margin:5}}>
					<Animbutton countCheck={0} onColor={"green"} effect={"pulse"} _onPress={(status) => _this._bookEvent(status, k, Events[k])} />
				</View>)
		});
		 return (
			<View style={{flex: 1}}>
			{ eventsArr }
			</View>
		);
	}
}
