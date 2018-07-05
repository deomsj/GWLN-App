import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, ScrollView, TouchableOpacity } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import moment from 'moment';
import DateTimePicker from 'react-native-modal-datetime-picker';

import GWLNSignUp from './GWLNSignUp';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const SigninForm = t.struct({
	email: t.String,
	password: t.String,
});


var options = {
	fields: {
		email: {
			label: 'Email',
			error: 'Please enter a valid email'
		},
		password: {
      type: 'password',
			label: 'Password',
			error: 'Please enter a valid password'
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

  handleSignUp = () => {
    const value = this._form.getValue();
    console.log('value', value);
    this.props.navigation.navigate('SignUp')
  }

	render() {
		return(
			<ScrollView>
			<View style={styles.container}>
				<Text style={styles.paragraph}>
					Organizer Sign in
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
      <Button
        style={styles.buttons}
        title="Become a Member"
        onPress={this.handleSignUp}
        color= "#002a55"
      />
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
	}
});
