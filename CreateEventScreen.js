import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, ScrollView } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { CheckBox } from 'react-native-elements'

import t from 'tcomb-form-native';

const Form = t.form.Form;
//const formatFunction = format => date => formatDate(format, date)
//const format = 'mm/dd/yyyy'
const Event = t.struct({
	name: t.String,
	location: t.String,
	dateTime: t.Date,
	description: t.maybe(t.String),
	numberOfPinkTies: t.maybe(t.Number)
});

var options = {
	label: 'Create an Event',
	fields: {
		name: {
			label: 'Event Name',
			error: 'Please enter an event name'
		},
		location: {
			label: 'Event Location',
			error: 'Please enter the location'
		},
		dateTime: {
			label: 'Date and Time',
			error: 'Please enter a date and time',
			mode: 'date',
			config: {
				//format: (date) => moment(date).format('mm-dd-YYYY')
				//format: (date: Date) => string
				//format: date => formatFunction(format)
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
		if(value) {
			this.props.navigation.navigate('Calendar')
		}
	}
	render() {
		return(
			<ScrollView>
			<View style={styles.container}>
				<Text></Text>
				<Form ref={c=>this._form = c}
				type={Event}
				options={options}/>
				<View style={styles.container}>
					<Button
					title="Create Event"
					onPress={this.handleSubmit}
					color= "#002a55"
					/>
					<Button
						title="Discard Event"
						onPress={this.DiscardForm}
					/>
					<CheckBox title='check' />
				</View>
			</View>
			</ScrollView>
		);
	}

}

export default CreateEventScreen;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		backgroundColor: '#fff',
		padding: 40,

	}
});
