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
				{this.renderButtons()}
				<Image source={WorldCouncilLogo} style={styles.WorldCouncil}/>
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
		backgroundColor: 'white',
	},
  buttonContainer: {
		flexDirection: 'column',
		padding: 20,
		bottom: -50,
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
	GWLNlogo: {
		flex: 1,
		alignSelf: 'stretch',
		resizeMode: 'contain',
		width: undefined,
		height: undefined,
		padding: 100,
	},
	WorldCouncil: {
		flex:1,
		alignSelf: 'center',
		resizeMode: 'contain',
		width: undefined,
		height: undefined,
		padding: 110,
		// backgroundColor: 'white',
		top:60,
		left:80,
	}
});
