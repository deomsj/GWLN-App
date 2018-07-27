import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, FlatList, Image } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import GWLNicon from './img/Gwln_Icon.jpg';
import MemberListScreen from './MemberListScreen';

class MemberContactPage extends React.Component {

	static navigationOptions = ({navigation})=> {
	 return {
		 // headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: '300', fontSize: 20, color: 'white'}}>  {navigation.state.params.user.first_name} {navigation.state.params.user.last_name}</Text>),
		 // headerRight: (<View></View>),
		 headerStyle: {
			 backgroundColor: '#002a55',
			 elevation: 0,
		 },
		 headerTintColor: 'white',
	 };
 }

	ComponentDidMount() {


	}
	render() {
		console.log('MemberContactPage');
		console.log(this.props.navigation.state.params.user);
		return(
			<View style={styles.mainContainer}>
				<View style={styles.profileContainer}>
					<Image source={GWLNicon} style={styles.profilePic}/>
					<Text style={styles.NameText}> {this.props.navigation.state.params.user.first_name} {this.props.navigation.state.params.user.last_name}</Text>
					<Text style={styles.locationText}> {this.props.navigation.state.params.user.mailing_address_city}, {this.props.navigation.state.params.user.mailing_address_country_name} </Text>

				</View>
				<View style={styles.ContactContainer}>
					<Text style={styles.contactText}>Contact Info {"\n"}</Text>
					<Text style={styles.contactText}>Phone:{"\n"}{this.props.navigation.state.params.user.phone_business_main}</Text>
					<Text style={styles.contactText}>Email: {"\n"}{this.props.navigation.state.params.user.email1} </Text>
					<Text style={styles.contactText}>About: {"\n"}{this.props.navigation.state.params.user.additional_info} </Text>
				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create ({
	mainContainer: {
		flex: 1,
		backgroundColor: '#002a55'
	},
	profileContainer: {
		padding: 20,
	},
	profilePic: {
		padding: 35,
		height: undefined,
		width: undefined,
		resizeMode: 'contain',
		borderRadius: 50,
	},
	NameContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	ContactContainer: {
		// flex: 2,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	NameText: {
		fontSize: 24,
		fontWeight: 'bold',
		alignSelf: 'center',
		textAlign: 'center',
		color: 'white',
	},
	locationText:{
		alignSelf: 'center',
		textAlign: 'center',
		color: 'white',
		fontSize: 20,
	},
	contactText: {
		color: 'white',
		fontSize: 17,
		padding: 15,
		paddingHorizontal: 30,
		flexDirection: 'column',
	},
})

export default MemberContactPage;
