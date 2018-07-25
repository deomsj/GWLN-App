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

	_fetch = () => {
		const url = 'https://cuwomen.org/functions/app.gwln.php'
		fetch(url, {
			method: "POST",
			headers: {
				'X-Token': 'hub46bubg75839jfjsbs8532hs09hurdfy47sbub',
			},
			body: JSON.stringify({
				firstParam: 'hello dan',
				secondParam: 'hopefully you get this',
			}),
		})
			
			.then(res => res.json())
			.then(res => {
				console.log(res)
			})
			.catch(error => {
				console.log(error);
			})
		console.log('fetch');
	}

	handleMember = () => {
		this.props.navigation.navigate('MemberSignin')
	}
	handleGuest = () => {
		this.props.navigation.navigate('GuestHomeScreen')
	}
	handleOrganizer = () => {
		this.props.navigation.navigate('OrganizerSignin')
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
		var buttonColors = ['rgba(255, 255, 255, 1)'];
		if (Platform.OS === 'android') {
			buttonColors = ['rgba(0, 42, 85, 1)'];
		};
		return(
		<View style= {styles.mainContainer}>
		<View style={styles.memberButton}>
			<View style={styles.buttons}>
			<Button
				title="Chapter Leader Login"
				onPress={this.handleOrganizer}
				color={buttonColors}
			/>
			</View>
		</View>
		<View style={styles.memberButton}>
			<View style={styles.buttons}>
			<Button
				title="Member Login"
				onPress={this.handleMember}
				color={buttonColors}
				// backgroundColor= "white"
			/>
			</View>
		</View>
		<View style = {styles.guestButton}>
		<View style={styles.buttons}>
			<Button
				title="Continue as Guest"
				onPress={this.handleGuest}
				color= {buttonColors}
			/>
			</View>
				<Text
					style={styles.memberText}
					onPress={() => {Linking.openURL('https://www.cuwomen.org/gwln_connect/gwln_new_member')}}>
					Join the Network
				</Text>
				
			</View>
			</View>
	)};
}

export default LaunchPage;

const styles = StyleSheet.create({
	mainContainer: {
		alignSelf: 'center',
		position: 'absolute',
		top: '40%',
		backgroundColor: 'white',
	},
	container: {
		flex:1,
		backgroundColor: 'white',
		justifyContent: 'center',
		// alignSelf:'center',
		padding: 50,
		// flexDirection: 'column'
	},
  memberButton: {
		backgroundColor: 'white',
		marginRight: '15%',
		marginLeft: '15%',
		// paddingTop: 20,
		paddingBottom: 20,
  },
	guestButton: {
		// backgroundColor: 'white',
		// flexDirection: 'column',
		marginRight: '15%',
		marginLeft: '15%',
		// position: 'absolute',
		// top: '100%',
		// paddingHorizontal: 100,
		paddingTop:80,

	},
	buttons: {
		backgroundColor: '#002A55',
		...Platform.select({
      ios: {
        borderColor: '#002A55',
      },
      android: {
        borderColor: 'white',
      },
    }),
		borderWidth: 1,
		borderRadius: 5,
		flexDirection: 'column',
		// alignItems: 'center',
	},
	memberText: {
		color: 'blue',
		fontSize: 17,
		padding: 20,
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
		bottom: '45%',
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
