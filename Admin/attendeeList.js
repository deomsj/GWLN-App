import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Alert, ScrollView, FlatList, Platform, TouchableOpacity} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import PropTypes from 'prop-types';
import { Icon} from 'react-native-elements';
import { SearchBar, List, ListItem } from 'react-native-elements';
import memberRSVP from '../Member/memberRSVP';

import EventData from '../www_timeline_events.json';
import contactData from '../mock-database/crm.contacts.json';
import '../Global.js';


class attendeeList extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			data: {},
		}
	}

	static navigationOptions = ({navigation})=> {
		return {
			headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20, color: '#002A55'}}>Attendee List</Text>),
			headerRight: ( <Icon
				containerStyle={{marginRight:15, marginTop:15}}
				iconStyle={styles.headerIcon}
				// type='font-awesome'
				// color= '#002A55'
				name= "file-upload"
				onPress= {() => this._test()}/>
			),
		};
	};

	_test = () => {
		console.log('test');
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
				//this.GetNumberOfAttendees();
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
					width: "100%",
					backgroundColor: "#CED0CE",
					marginLeft: "5%"
				}}
			/>
		);
	};



	ExportAttendeeList = () => {
		const url = 'https://cuwomen.org/functions/app.gwln.php';
		fetch(url, {
			method: "POST",
			headers: {
				'X-Token': 'hub46bubg75839jfjsbs8532hs09hurdfy47sbub',
			},
			body: JSON.stringify({
				"code": "sendRSVPList",
				"arguments":{
					"timeline_event_id": this.props.navigation.state.params.ID,
				}
			}),
		})
		.then(res => res.json())
		.then(res => {
			if (res){
				console.log(res);
			}
		})
		.catch(error => {
			console.log(error);
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
});



export default attendeeList;
