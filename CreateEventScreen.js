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


const _format = 'YYYY-MM-DD'
const _today = moment().format(_format)
const _maxDate = moment().add(120, 'days').format(_format)


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
			label: 'How many pink ties would you like for this event? (optional)',
		}
	}
};

class CreateEventScreen extends React.Component {

	constructor(props){
		super(props)
		Obj = new CalendarScreen();
	}

	resetForm(){
		this.setState({value:null});
	}

	DiscardForm(){
		const value = this._form.getValue();

		if(!value){
			this.resetForm({});
		}



	}

	handleSubmit = () => {

		//const value = this._form.getValue();
		const value = this.refs.form.getValue();

		const TmpDate = value.date;
		//this.updateCalendar.bind(this);
		//console.log(TmpDate);
		if(value) {
			console.log(TmpDate);

			this.updateCalendar(TmpDate);
			console.log('value', value);
		}
		this.resetForm();
	}

	updateCalendar = (Day) => {
		console.log('in updateCalendar');
		//Obj.test();

		const tmp = Day
		const newEvent = moment(tmp).format(_format);
		console.log('newEvent');
		console.log(newEvent);
		global.EventArray.push(newEvent);
		console.log(EventArray)
		//Obj.OnDaySelect(tmp);
		this.setState({ EventDate: tmp})
		this.props.navigation.navigate('CalendarView')
		//console.log(this.state.EventDate);
		//Obj.AddEvent(tmp)
		//console.log('under cal.OnDaySelect');
		return EventArray
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
						onPress={this.DiscardForm}
						color= "#002a55"
					/>

				</View>
			</View>

			</ScrollView>
		);
	}

}


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
