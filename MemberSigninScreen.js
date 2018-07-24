import React from 'react';
import { StyleSheet, Image, Text, View, Button, Picker, WebView, ScrollView, TouchableOpacity, Linking, Platform } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import GWLNlogo from './img/gwln_logo.jpg';
import moment from 'moment';
import DateTimePicker from 'react-native-modal-datetime-picker';
import MemberHomeScreen from './MemberHome';
import memberData from './mock-database/gwln.members.json';

// import GWLNSignUp from './GWLNSignUp';
import t from 'tcomb-form-native';

const Form = t.form.Form;

//valid email format
/*
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var EmailField = t.refinement(t.String, function (email) {
  return EMAIL_REGEX.test(email);
});
*/

const SigninForm = t.struct({
	email: t.String, //change to EmailField for email format validation
	password: t.String,
});


var options = {
	fields: {
		email: {
			label: 'Email',
			error: 'Please enter a valid email'
		},
		password: {
			label: 'Password',
			error: 'Please enter a valid password',
			password: true,
			secureTextEntry: true,
		},
	}
};

//var memdata = require('./mock-database/gwln.members.json');

class MemberSigninScreen extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			data: memberData,
		}
	}

	resetForm = (value) => {
		this.setState({value:null});
	}

	static navigationOptions = {
		headerStyle: { backgroundColor: 'white', elevation: 0}
	}

	handleSubmit = () => {
		//console.log(memdata.members[0].username);
		const value = this._form.getValue();
		console.log('value', value);
		if(value) {
			this.props.navigation.navigate('MemberHomeScreen')
		}
	}

	render() {
		var buttonColors = ['rgba(255, 255, 255, 1)'];
		if (Platform.OS === 'android') {
			buttonColors = ['rgba(0, 42, 85, 1)'];
		};
		return(
			<View style={styles.container}>
				<Image source={GWLNlogo} style={styles.GWLNlogo}/>
				<Text style={styles.paragraph}>
					Member Sign In
				</Text>
				<View style={{marginTop:100}}>
				<Form ref={c=>this._form = c}
				type={SigninForm}
				options={options}/>
				</View>
				<View style={styles.buttonContainer}>
					<Button
					title="Submit"
					onPress={this.handleSubmit}
					color= {buttonColors}
					/>
					</View>
					<Text
						style={styles.memberText}
						onPress={() => {Linking.openURL('https://www.cuwomen.org/gwln_connect/gwln_forgot_password')}}>
						Forgot Password
					</Text>
			</View>
		);
	}

}

export default MemberSigninScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'white',
		padding: 50,
	},
	paragraph: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		alignSelf: 'center',
		position: 'absolute',
		bottom: '80%',
		color: '#002a55',
		padding:30,
	},
	buttonContainer: {
		alignSelf: 'center',
		// padding: 30,
		paddingHorizontal: 30,
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
		alignSelf: 'center',
		resizeMode: 'contain',
		width: '100%',
		height: '100%',
		padding: 50,
		position: 'absolute',
		bottom: '55%',
	}
});
