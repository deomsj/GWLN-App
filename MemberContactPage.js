import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, FlatList } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import MemberListScreen from './MemberListScreen';

class MemberContactPage extends React.Component {

	 

	ComponentDidMount() {
		
		
	}
	render() {
		console.log('MemberContactPage');
		console.log(this.props.navigation.state.params.user);
		return(
			<View style={{ flex: 1}}>
				<View style={styles.NameContainer}>
					<Text style={styles.NameText}> {this.props.navigation.state.params.user.first_name} {this.props.navigation.state.params.user.last_name}</Text>
					<Text style={styles.PhoneText}> {this.props.navigation.state.params.user.mailing_address_city}, {this.props.navigation.state.params.user.mailing_address_country_name} </Text>
					
				</View>
				<View style={styles.ContactContainer}>
					<Text style={styles.PhoneText}> Contact Info: </Text>
					<Text style={styles.PhoneText}> Phone: {this.props.navigation.state.params.user.phone_business_main} </Text>
					<Text style={styles.PhoneText}> Email: {this.props.navigation.state.params.user.email1} </Text>
					<Text style={styles.PhoneText}> About: {this.props.navigation.state.params.user.additional_info} </Text>
				</View>
			</View>
		);
	}
	
}

const styles = StyleSheet.create ({

	NameContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	ContactContainer: {
		flex: 2,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	NameText: {
		fontSize: 24,
		fontWeight: 'bold',
		paddingLeft: 10,
	},
	PhoneText: {
		fontSize: 14,
		marginTop: 10,
		paddingLeft: 10,
		
	},

})

export default MemberContactPage;