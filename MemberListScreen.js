import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { SearchBar } from 'react-native-elements';

class MemberListScreen extends React.Component {
	render() {
		return(
			<View style={styles.container}>
				<Text> Member list </Text>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		alignItems: 'center',
	},
})
export default MemberListScreen;
