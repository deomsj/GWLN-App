import React from 'react';

import { StyleSheet, Text, View, Button, Picker, WebView, Image, Linking, Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import GWLNlogo from './img/gwln_logo.jpg';
import WorldCouncilLogo from './img/WorldCouncil_logo.png';
// import OrganizerSigninScreen from './OrganizerSigninScreen';
class LaunchPage extends React.Component {

	static navigationOptions = {
		header: null,
	}

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
		var buttonColors = ['rgba(255, 255, 255, 1)'];
		if (Platform.OS === 'android') {
			buttonColors = ['rgba(0, 42, 85, 1)'];
		};
		return(
		<View style= {styles.mainContainer}>
		<View style={styles.buttonContainer}>
			<View style={styles.buttons}>
			<Button
				title="Organizer Sign In"
				onPress={this.handleOrgSignin}
				color={buttonColors}
				// backgroundColor= "white"
			/>
			</View>
		</View>
		<View style = {styles.buttonContainer}>
		<View style={styles.buttons}>
			<Button
				title="Member Sign In"
				onPress={this.handleMemSignin}
				color= {buttonColors}
			/>
			</View>
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
	mainContainer: {
		backgroundColor: 'white',
	},
	container: {
		flex:1,
		backgroundColor: 'white',
		justifyContent: 'center',
		// alignSelf:'center',
		padding: 50,
	},
  buttonContainer: {
		backgroundColor: 'white',
		marginRight: '20%',
		marginLeft: '20%',
		// marginBottom: '10%',
		marginTop: '10%',
		// padding:10,
  },
	buttons: {
		backgroundColor: '#002A55',
		padding: 10,
		// margin: 10,
		// borderWidth: 1,
		flexDirection: 'column',
		alignItems: 'center',
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
		bottom: '40%',
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
