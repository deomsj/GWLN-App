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
					<Text style={styles.NameText}> {this.props.navigation.state.params.user.name.first} {this.props.navigation.state.params.user.name.last}</Text>
					<Text style={styles.PhoneText}> {this.props.navigation.state.params.user.location.city}, {this.props.navigation.state.params.user.location.state} </Text>
					<Text style={styles.PhoneText}> Member for {this.props.navigation.state.params.user.registered.age} years. </Text>
				</View>
				<View style={styles.ContactContainer}>
					<Text style={styles.PhoneText}> Contact Info: </Text>
					<Text style={styles.PhoneText}> Phone: {this.props.navigation.state.params.user.cell} </Text>
					<Text style={styles.PhoneText}> Email: {this.props.navigation.state.params.user.email} </Text>
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