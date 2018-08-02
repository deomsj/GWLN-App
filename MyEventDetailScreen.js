import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Alert, ScrollView, FlatList, Platform, TouchableOpacity} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import PropTypes from 'prop-types';
import { Icon} from 'react-native-elements';
import { SearchBar, List, ListItem } from 'react-native-elements';
import memberRSVP from './memberRSVP';
import CheckInScreen from './CheckInScreen';

import EventData from './www_timeline_events.json';
import contactData from './mock-database/crm.contacts.json';
import './Global.js';

const tmp = {}

class MyEventDetailScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: {},
			memInfo: contactData,
			attendees: {},
			numAttendeesLoading: true,


		}
	}

	DiscardForm=( value ) => {
		Alert.alert(
			'Discard Feedback',
			'Are you sure you want to clear this form?',
			[
				{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
				{text: 'Yes', onPress: ()=>  console.log('Pessed Yes')},
			],
		)
	}

	DeleteEvent=() => {
		const url = 'https://cuwomen.org/functions/app.gwln.php';
		fetch(url, {
			method: "POST",
			headers: {
				'X-Token': 'hub46bubg75839jfjsbs8532hs09hurdfy47sbub',
			},
			body: JSON.stringify({
				"code": "deleteEvent",
				"arguments":{
					"timeline_event_id": this.props.navigation.state.params.item.timeline_event_id,
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

	static navigationOptions = ({navigation})=> {
		return {
			headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20, color: '#002A55'}}>{navigation.state.params.item.event_name}</Text>),
			headerRight: ( <Icon
        containerStyle={{marginRight:15, marginTop:15}}
				iconStyle={styles.headerIcon}
				type='font-awesome'
        // color= '#002A55'
				name= "trash"
				onPress={navigation.getParam('discard')}/>
			),
		};
	};
	componentDidMount=(value)=> {
		this.props.navigation.setParams({ discard: this.DiscardForm });
		this.mounted = true;
	}
	componentWillUnmount(){
		this.mounted = false;
	}
	retrieveEvent = () => {
		const url = 'https://cuwomen.org/functions/app.gwln.php'
		fetch(url, {
			method: "POST",
			headers: {
				'X-Token': 'hub46bubg75839jfjsbs8532hs09hurdfy47sbub',
			},
			body: JSON.stringify({
				"code": "getEventCheckins",
				"arguments":{
					"timeline_event_id": this.props.navigation.state.params.item.timeline_event_id,
				}
			}),
		})
		.then(res => res.json())
		.then(res => {
			if (res){
				//console.log(res);
				this.setState({
					attendees: res
				})
				this.GetNumberOfAttendees();
			}
		})
		.catch(error => {
			console.log(error);
		})
		//console.log(tmp)

	}

	GoToAttendeeList = () => {
		let ID = this.props.navigation.state.params.item.timeline_event_id
		this.props.navigation.navigate('attendeeList', {ID})

	}

	_renderItem=({ item }) => (
		<TouchableOpacity>
			<ListItem
				id={item.id}
				title={`${item.first_name} ${item.last_name}`}
				keyExtractor={(item) => item.email}
				subtitle={item.email}
			/>
		</TouchableOpacity>
	);


	goToCheckIn = () => {
		let CheckInEventID = this.props.navigation.state.params.item.timeline_event_id
		console.log('in go to check in');
		this.props.navigation.navigate('CheckIn', {CheckInEventID})
	}
	renderSeparator = () => {
		return (
			<View
				style={{
					height: 1,
					// width: "100%",
					backgroundColor: "#CED0CE",
					// marginLeft: "0%"
				}}
			/>
		);
	};
	GetNumberOfAttendees = () => {
		let tmpAttendees = this.state.attendees
		console.log(tmpAttendees)
		let tmpNumAttendees = 0
		global.numAttendees = 0
		for (var i = 0; i < tmpAttendees.length; i++) {

			tmpNumAttendees = tmpNumAttendees + parseInt(tmpAttendees[i].guests_rsvp)
			//console.log(tmpNumAttendees);
		}
		global.numAttendees = tmpNumAttendees
		console.log(global.numAttendees);
		this.setState({
			numAttendeesLoading: false,
		})
	}


	componentWillMount(){
		this.retrieveEvent();

	}
	render() {
		//this._test();
		console.log(this.state.data);

		var buttonColors = ['rgba(255, 255, 255, 1)'];
		if (Platform.OS === 'android') {
			buttonColors = ['rgba(0, 42, 85, 1)'];
		};

		// run query of events on the day that is passed then store the information in an array of objects
		//() => this._onPress()
		return(
			<View style={styles.container}>
				<ScrollView>
         				<View style={styles.heading}>
          				<Text style={styles.infoText}> {this.props.navigation.state.params.item.event_month}/{this.props.navigation.state.params.item.event_day}/{this.props.navigation.state.params.item.event_year} </Text>
           				<Text style={styles.infoText}> {this.props.navigation.state.params.item.event_location} </Text>
           				<Text style={styles.infoText}> There are {global.numAttendees} people planning to attend. </Text>

        			</View>
							<View style={styles.attendeeContainer}>
							<Text
								style={styles.attendeeButton}
								onPress={() => this.GoToAttendeeList()}>
								View Attendees
							</Text>
							</View>
							<View style={styles.buttonContainer}>
							<View style={styles.button}>
									<Button
										color={buttonColors}
										title="Begin Check In"
										onPress={() => this.goToCheckIn()}
									/>
							</View>
							</View>
				</ScrollView>

			</View>
		);
	}

}

const styles = StyleSheet.create ({
	container: {
		backgroundColor: 'white',
		flex: 1,
		flexDirection: 'column',
	},
	buttonContainer: {
		// padding: 20,
		// position: 'absolute',
		marginTop: '30%',
		marginBottom: '5%',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		// top: '95%',
	},
	button: {
		alignSelf: 'center',
		elevation: 0,
		// padding: 30,
		paddingHorizontal: 30,
		backgroundColor: '#002A55',
		...Platform.select({
			ios: {
				borderColor: '#002A55',
			},
			android: {
				borderColor: 'white',
			},
		}),
		borderWidth: 1,
		borderRadius: 5,
		flexDirection: 'column',
		paddingVertical: 3,
	},
	heading: {
		flex: 1,
		padding: 10,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',

	},
	headingText: {
		fontSize: 24,

	},
	info: {
		flex: 3,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	infoText: {
		fontSize: 16,
		paddingLeft: '5%',
		paddingRight: '5%',
	},
	headerIcon: {
		color: '#002A55',
		flex:1,
	},
	attendeeContainer: {
    // position: 'absolute',
    alignSelf: 'center',
    padding: 10,
    // paddingVertical:10,
    // bottom: '15%',
  },
  attendeeButton: {
    paddingHorizontal: 15,
    // padding: 10,
		paddingVertical: 10,
    backgroundColor: 'white',
    borderColor: '#002A55',
    color: '#002A55',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 17,
    fontWeight: '400',
  },
});

export default MyEventDetailScreen;
