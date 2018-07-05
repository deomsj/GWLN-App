import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, TextInput, ScrollView } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import t from 'tcomb-form-native';

import moment from 'moment';
import DateTimePicker from 'react-native-modal-datetime-picker';

const Form = t.form.Form;

const Content = t.struct({
	EventName: t.String,
	EventLocation: t.String,
	Date: t.Date,
	EventSponsor: t.maybe(t.String),
	EventTopic: t.String,
	Speaker: t.maybe(t.String),
	NumberOfAttendees: t.Number,
	Charity: t.maybe(t.String),
	Donations: t.String,
	Summary: t.String,
	
});

let myFormat = (date) =>{
	return moment(date).format('LLLL');
}

const Options = {
	label: 'Feedback Form',
	fields: {
		EventName: {
			label: 'Event Name:',
			error: 'Please enter the event name.'
		},
		EventLocation: {
			label: 'Event Location:',
			error: 'Please enter the location of the event'
		},
		Date: {
			label: 'Date and Time:',
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
		EventSponsor: {
			label: 'Event Sponsor:'
		},
		EventTopic: {
			label: 'Meeting Topic',
			error: 'Please enter the topic of the meeting:'
		},
		Speaker: {
			label: 'Panelists or Keynote Speaker:'

		},
		NumberOfAttendees: {
			label: 'Number of Attendees:',
			error: 'Please enter the number of attendees.',
			KeyboardType: 'numeric'
		},
		Charity: {
			label: 'Charity Supported:'
		},
		Donations: {
			label: 'Dollars or resources Donated:',
			error: 'Please fill out this field.'
		},
		Summary: {
			label: 'Postive Comments',
			error: 'Please fill out this field',
			multiLine: true
		},
		
	}

};

class FeedbackFormScreen extends React.Component {

	resetForm(){
		this.setState({value:null});
	}

	DiscardForm(){
		const value = this._form.getValue();
		if(!value){
			this.resetForm({})
		}

	}

	handleSubmit = () => {
		const value = this._form.getValue();
		console.log('value', value);
		if (value) {
			this.resetForm({})

		}

	}


	render() {
		return(
			<ScrollView>
			<View style={styles.container}>

				<Form ref={c=>this._form = c}
				type={Content}
				options = {Options}/>
				<View style={styles.container}>
					<Button
					title="Submit"
					onPress={this.handleSubmit}
					color= "#002a55"
					/>
					<Button
						title="Discard feedback"
						onPress={this.DiscardForm}
						color= "#002a55"
					/>
				</View>

			</View>
			</ScrollView>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		justifyContent: 'center',
		marginTop: 50,
		padding: 20,

	},
	title: {

		justifyContent: 'center',
		marginTop: 10,
		alignItems: 'center',
		fontSize: 24,

	},
	DiscardFeedback: {
		fontSize: 10,
	}
});

export default FeedbackFormScreen;
