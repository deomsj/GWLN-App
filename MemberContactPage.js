import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, FlatList, Image, Platform } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import GWLNicon from './img/Gwln_Icon.jpg';
import MemberListScreen from './MemberListScreen';
import call from 'react-native-phone-call';

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
		const phoneArgs = {
      number: this.props.navigation.state.params.user.phone_business_main,
      prompt: true,
    };
		return(
			<View style={styles.mainContainer}>
				<View style={styles.profileContainer}>
					<Image source={GWLNicon} style={styles.profilePic}/>
					<Text style={styles.NameText}> {this.props.navigation.state.params.user.first_name} {this.props.navigation.state.params.user.last_name}</Text>
					<Text style={styles.locationText}> {this.props.navigation.state.params.user.mailing_address_city}, {this.props.navigation.state.params.user.mailing_address_country_name} </Text>

				</View>
				<View style={styles.ContactContainer}>
					<Text style={styles.titleText}>Contact Info {"\n"}{"\n"}</Text>
					<Text style={styles.titleText}>Phone:</Text>
					<Text
            style={styles.contactText}
            onPress={() => {call(phoneArgs).catch(console.error)}}>
          	{this.props.navigation.state.params.user.phone_business_main}
          </Text>
					<Text style={styles.titleText}>Email:</Text>
					<Text style={styles.contactText}>{this.props.navigation.state.params.user.email1} </Text>
					<Text style={styles.titleText}>About:</Text>
					<Text style={styles.contactText}>{this.props.navigation.state.params.user.additional_info} </Text>
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
		// padding: 30,
	},
	profilePic: {
		padding: 35,
		height: undefined,
		width: undefined,
		resizeMode: 'contain',
		...Platform.select({
      ios: {
        borderRadius: 20,
      },
      android: {
        borderRadius: 50,
      },
    }),
		// marginBottom: '5%'
	},
	ContactContainer: {
		flexDirection: 'column',
		padding:10,
	},
	NameText: {
		paddingTop: 10,
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
		paddingBottom: 30,
		paddingHorizontal: 30,
	},
	titleText: {
		color: 'white',
		fontSize: 18,
		fontWeight: '400',
		paddingHorizontal: 30,
	},
})

export default MemberContactPage;
