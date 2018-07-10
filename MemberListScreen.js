import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { SearchBar } from 'react-native-elements';

class MemberListScreen extends React.Component {

	render() {
		return(
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Text> Member List </Text>
			</View>

		);
	}

}

export default MemberListScreen;
