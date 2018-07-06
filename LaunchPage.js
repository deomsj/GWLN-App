import React from 'react';

import { StyleSheet, Text, View, Button, Picker, WebView, Image, Linking} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import logo from './img/gwln_logo.jpg';
// import OrganizerSigninScreen from './OrganizerSigninScreen';
class LaunchPage extends React.Component {

	handleOrgSignin = () => {
		this.props.navigation.navigate('OrganizerSignin')
	}
	handleMemSignin = () => {
		this.props.navigation.navigate('MemberSignin')
	}
	render() {
		return(
			<View>
			<Image source={logo} style={styles.logo}/>
			{this.renderButtons()}
			</View>
		);
	}
	renderButtons() {
		return(
			<View>
		<View style={styles.container}>
			<Button
				style={styles.buttons}
				title="Organizer Sign In"
				onPress={this.handleOrgSignin}
				color= "#002a55"
			/>
		</View>
		<View style={styles.container}>
			<Button
				style={styles.buttons}
				title="Member Sign In"
				onPress={this.handleMemSignin}
				color= "#002a55"
			/>
			<Text
				style={{color: 'blue', padding:15}}
				onPress={() => {Linking.openURL('https://www.cuwomen.org/gwln_connect/gwln_new_member')}}>
				Become a Member!
			</Text>
			</View>
			</View>
	)};
}

export default LaunchPage;

const styles = StyleSheet.create({
  container: {
		flexDirection: 'column',
		padding: 20,
		bottom: -250,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    // width: null,
    padding: 15,
  },
	buttons: {
		padding: 40,
		margin: 10,
	},
	logo: {
		top: 10,
		backgroundColor: 'white',
		width: '97.5%',
		height: 110,
		justifyContent: 'center',
		alignSelf: 'center',
		padding: 20,
	}
});
