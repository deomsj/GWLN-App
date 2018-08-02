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


class attendeeList extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			data: {},
		}
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
					"timeline_event_id": this.props.navigation.state.params.ID,
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
         					<FlatList
         						data={this.state.attendees}
         						renderItem={this._renderItem}
         						keyExtractor={item => item.username}
         						ItemSeparatorComponent={this.renderSeparator}
         					/>
         				</ScrollView>

			</View>
		);
	}

}
const styles = StyleSheet.create ({
	container: {
		backgroundColor: 'white',
		flex: 1,
	},
	buttonContainer: {
		paddingVertical: 20,
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
		paddingVertical: 1,
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
    // padding: 10,
    // paddingVertical:10,
    // bottom: '15%',
  },
  attendeeButton: {
    paddingHorizontal: 10,
    // padding: 10,
		paddingVertical: 5,
    backgroundColor: 'white',
    borderColor: '#002A55',
    color: '#002A55',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 17,
    fontWeight: '400',
  },
});



export default attendeeList;