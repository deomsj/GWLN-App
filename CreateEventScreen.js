import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import t from 'tcomb-form-native';

const Form = t.form.Form;
//const formatFunction = format => date => formatDate(format, date)
//const format = 'mm/dd/yyyy'
const Event = t.struct({
	name: t.String,
	location: t.String,
	dateTime: t.Date,
	description: t.maybe(t.String),
	numberOfPinkTies: t.Number
});

var options = {
	fields: {
		name: {
			label: 'Event Name'
		},
		location: {
			label: 'Event Location'
		},
		dateTime: {
			label: 'Date and Time',
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
			label: 'How many pink ties would you like for this event?'
		}
	}
};


class CreateEventScreen extends React.Component {

	handleSubmit = () => {
		const value = this._form.getValue();
		console.log('value', value);
		if(value) {
			this.props.navigation.navigate('Calendar')
		}
	}
	render() {
		return(

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
				</View>
			</View>
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
