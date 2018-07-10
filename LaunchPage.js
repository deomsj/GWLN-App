import React from 'react';

import { StyleSheet, Text, View, Button, Picker, WebView, Image, Linking} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import GWLNlogo from './img/gwln_logo.jpg';
import WorldCouncilLogo from './img/WorldCouncil_logo.png';
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
			<View style={styles.container}>
				<Image source={GWLNlogo} style={styles.GWLNlogo}/>
				<Image source={WorldCouncilLogo} style={styles.WorldCouncil}/>
				{this.renderButtons()}
				<Text
					style={styles.memberText}
					onPress={() => {Linking.openURL('https://www.cuwomen.org/gwln_connect/gwln_new_member')}}>
					Become a Member!
				</Text>
			</View>

		);
	}
	renderButtons() {
		return(
		<View style={styles.container}>
		<View style={styles.buttonContainer}>
			<Button
				style={styles.buttons}
				title="Organizer Sign In"
				onPress={this.handleOrgSignin}
				color= "#002a55"
			/>
		</View>
		<View style={styles.buttonContainer}>
			<Button
				style={styles.buttons}
				title="Member Sign In"
				onPress={this.handleMemSignin}
				color= "#002a55"
			/>
			</View>
			</View>
	)};
}

export default LaunchPage;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		padding: 50,
	},
  buttonContainer: {
		flexDirection: 'column',
		padding: 15,
    alignItems: 'center',
  },
	buttons: {
		padding: 10,
		margin: 10,
	},
	memberText: {
		color: 'blue',
		padding: 15,
		alignSelf: 'center',
		bottom: 50
	},
	GWLNlogo: {
		flex: 1,
		alignSelf: 'stretch',
		resizeMode: 'contain',
		width: undefined,
		height: undefined,
		padding: 60,
	},
	WorldCouncil: {
		flex:1,
		alignSelf: 'stretch',
		resizeMode: 'contain',
		width: undefined,
		height: undefined,
		padding: 70,
		position: 'absolute',
		bottom: 0,
		right:10,
	}
});
