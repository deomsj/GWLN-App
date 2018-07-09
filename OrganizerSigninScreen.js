import React from 'react';
import { StyleSheet, Image, Text, View, Button, Picker, WebView, ScrollView, TouchableOpacity } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import GWLNlogo from './img/gwln_logo.jpg';
import moment from 'moment';
import DateTimePicker from 'react-native-modal-datetime-picker';

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


class OrganizerSigninScreen extends React.Component {
	resetForm = (value) => {
		this.setState({value:null});
	}

	/*DiscardForm(){
		const value = this._form.getValue();
		if(!value){
			this.resetForm({})
		}

	}*/
	handleSubmit = () => {
		const value = this._form.getValue();
		console.log('value', value);
		if(value) {
			this.props.navigation.navigate('Home')
		}
	}

  handleForgot = () => {
    //need to do this
  }

	render() {
		return(
			<ScrollView>
			<View style={styles.container}>
				<Image source={GWLNlogo} style={styles.GWLNlogo}/>
				<Text style={styles.paragraph}>
					Organizer Sign In
				</Text>
				<Form ref={c=>this._form = c}
				type={SigninForm}
				options={options}/>
				<View style={styles.container}>
					<Button
					style={styles.buttons}
					title="Submit"
					onPress={this.handleSubmit}
					color= "#002a55"
					/>
					<Button
						style={styles.buttons}
						title="Forgot Password"
						onPress={this.resetForm}
						color= "#002a55"
					/>

				</View>
			</View>
			</ScrollView>
		);
	}

}

export default OrganizerSigninScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		padding: 20,

	},
	paragraph: {
		margin: 30,
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#002a55',
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
		padding: 60,
		backgroundColor: 'white',
	}
});
