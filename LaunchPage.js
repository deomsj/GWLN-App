import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import OrganizerSigninScreen from './OrganizerSigninScreen';

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
				<Text> Launch page </Text>
				<Button
					style={styles.buttons}
					title="Organizer Sign In"
					onPress={this.handleOrgSignin}
					color= "#002a55"
				/>
				<Button
					style={styles.buttons}
					title="Member Sign In"
					onPress={this.handleMemSignin}
					color= "#002a55"
				/>
			</View>
		);
	}

}

export default LaunchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: null,
    padding: 20,
  },

});
