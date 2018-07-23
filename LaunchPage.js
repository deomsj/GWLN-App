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
		<View style={styles.organizerButton}>
			<View style={styles.buttons}>
			<Button
				title="Organizer Sign In"
				onPress={this.handleOrgSignin}
				color={buttonColors}
				// backgroundColor= "white"
			/>
			</View>
		</View>
		<View style = {styles.memberButton}>
		<View style={styles.buttons}>
			<Button
				title="Member Sign In"
				onPress={this.handleMemSignin}
				color= {buttonColors}
			/>
			</View>
			</View>
				<Text
					style={styles.memberText}
					onPress={() => {Linking.openURL('https://www.cuwomen.org/gwln_connect/gwln_new_member')}}>
					Become a Member!
				</Text>
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
  organizerButton: {
		backgroundColor: 'white',
		marginRight: '20%',
		marginLeft: '20%',
		paddingTop: 20,
		paddingBottom: 10,
		// marginBottom: '10%',
		// marginTop: '10%',
		// padding:10,
  },
	memberButton: {
		backgroundColor: 'white',
		marginRight: '25%',
		marginLeft: '25%',
		paddingTop: 20,
		paddingBottom: 10,
		// marginBottom: '10%',
		// marginTop: '10%',
		// padding:10,
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
		borderRadius: 10,
		flexDirection: 'column',
		// alignItems: 'center',
	},
	memberText: {
		color: 'blue',
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
