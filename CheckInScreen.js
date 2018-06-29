import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, TextInput } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import t from 'tcomb-form-native';

const Form = t.form.Form;

//Check In Questions
const Attendee = t.struct({
  name: t.String,
  surname: t.String,
  email: t.String,

});
class CheckInScreen extends React.Component {
	handleSubmit= () => {
	const value = this._form.getValue();

}

	render() {
		return(
			<View style={styles.container}>
				<Form type={Attendee}/>
				<Button
					title="Check In!"
					onPress={this.handleSubmit}
					color= '#002a55'
					/>
				</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ffff',
		marginTop: 50,
		padding: 40,
		justifyContent: 'center',
	}
})

export default CheckInScreen;
