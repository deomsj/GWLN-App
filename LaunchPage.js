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
			</View>
		);
	}
	renderButtons() {
		return(
		<View>
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
			<View style={styles.buttonContainer}>
				<Text
					style={styles.memberText}
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
		flex:1,
		backgroundColor: 'white',
		justifyContent: 'center',
		// alignSelf:'center',
		padding: 50,
	},
  buttonContainer: {
		flexDirection: 'column',
		padding: 10,
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
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	GWLNlogo: {
		// flex: 1,
		alignSelf: 'center',
		resizeMode: 'contain',
		width: '100%',
		height: '100%',
		padding: 100,
		position: 'absolute',
		bottom: '50%',
	},
	WorldCouncil: {
		// flex:1,
		alignSelf: 'stretch',
		resizeMode: 'contain',
		width: undefined,
		height: undefined,
		padding: 70,
		position: 'absolute',
		bottom: '0%',
		right: '10%',
	}
});
