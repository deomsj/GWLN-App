import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
//import { CheckBox } from 'react-native-checkbox';
import moment from 'moment';
import DateTimePicker from 'react-native-modal-datetime-picker';

import a from './Components/alert';
import CalendarScreen from './CalendarScreen';


import t from 'tcomb-form-native';

const Form = t.form.Form;

const Event = t.struct({
	name: t.String,
	location: t.String,
	date: t.Date,
	description: t.maybe(t.String),
	numberOfPinkTies: t.maybe(t.Number),
});

let myFormat = (date) =>{
	return moment(date).format('LLLL');
}

//var now = moment().format('LLL');

var options = {
	//label: 'Create an Event',
	fields: {
		name: {
			label: 'Event Name',
			error: 'Please enter an event name'
		},
		location: {
			label: 'Event Location',
			error: 'Please enter the location'
		},
		date: {
			label: 'Date and Time',
			error: 'Please enter a valid date and time',
			mode: 'datetime',
			config: {
				//format: (date) => moment(date).format('mm-dd-YYYY')
				//format: (date: Date) => string
				//format: date => formatFunction(format)
				//format:(date) => myFormat(date)
				format: date => moment(date).format('dddd, MMMM Do YYYY, h:mm a'),
				dateFormat: date => moment(date).format('dddd, MMMM Do YYYY'),
				timeFormat: date => moment(date).format('h:mm a'),
			},
		},
		description: {
			label: 'Describe the Event',
			multiline: true,
		},
		numberOfPinkTies: {
			label: 'How many pink ties would you like for this event? (optional)'
		}
	}
};

class CreateEventScreen extends React.Component {

	constructor(props){
		super(props)
		Cal = new CalendarScreen();
	}

	resetForm(){
		this.setState({value:null});
	}

	DiscardForm(){
		const value = this._form.getValue();

		if(!value){
			this.resetForm({})
		}

	resetForm = (value) => {
		this.setState({value:null});
	}



}
	handleSubmit = () => {

		const value = this._form.getValue();


		//const value = this.refs.form.getValue();

		console.log('value', value);
		this.updateCalendar;
		console.log(Date);
		if(value) {
			this.props.navigation.navigate('CalendarView')
		}
		this.resetForm();
	}

	updateCalendar = () => {
		console.log('in updateCalendar');
		Cal.OnDaySelect('2018-07-07');
		console.log('under cal.OnDaySelect');
	}

	render() {
		return(
			<ScrollView>
			<View style={styles.container}>
				<Text style={styles.paragraph}>
					Create an Event
				</Text>
				<Form ref="form"
				type={Event}
				options={options}/>
				<View style={styles.container}>
					<Button
					style={styles.buttons}
					title="Create Event"
					onPress={this.handleSubmit}
					color= "#002a55"
					/>
					<Button
						style={styles.buttons}
						title="Discard Event"
						onPress={this.resetForm}
						color= "#002a55"
					/>

				</View>
			</View>
			<TouchableOpacity
				style={styles.to}
				onPress={() => Alert.alert(
					'Alert title',
					'alert msg',
					[
						{text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
						{text: 'OK', onPress: () => console.log('Ok pressed')},
					],
					{ cancelable: false }
				)}>
				<Text style={{fontSize: 32, color: 'white'}}>Show alert!</Text>
			</TouchableOpacity>
			</ScrollView>
		);
	}

}
/*_showAlert = () => {
	Alert.alert(
		'Alert Title',
		'Alert Msg',
		[
			{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
			{text: 'OK', onPress: () => console.log('OK pressed')},
		],
		{ cancelable: false }
	)
}*/

export default CreateEventScreen;


const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		padding: 20,

	},
	paragraph: {
		margin: 30,
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#002a55',
	},
	buttons: {
		padding: 40,
		margin: 10,
	},
	to: {
		margin: 24,
		padding: 40,
		borderRadius: 15,
		borderWidth: 1,
		borderColor: "transparent",
		//fontWeight: 'bold',
		//textAlign: 'center',
		//color: '#34495e',
		backgroundColor: '#ff6666'
	},
});
