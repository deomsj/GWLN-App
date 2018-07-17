import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Platform, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';

import MessageBoardScreen from './MessageBoardScreen'

class PostDetailsScreen extends React.Component {


	render() {
		return (
			<View style={{flex: 1}}>
				<View style={styles.NameContainer}>
					<Text style={styles.NameText}> {this.props.navigation.state.params.post.name} </Text>
					<Text style={styles.PhoneText}> {this.props.navigation.state.params.post.title} </Text>
				</View>
				<View style={styles.ContactContainer}>
					<Text style={styles.PhoneText}> {this.props.navigation.state.params.post.description} </Text>
				</View>
			</View>

		);
	}

}
const styles = StyleSheet.create ({
		NameContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	ContactContainer: {
		flex: 2,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	NameText: {
		fontSize: 24,
		fontWeight: 'bold',
		paddingLeft: 10,
	},
	PhoneText: {
		fontSize: 14,
		marginTop: 10,
		paddingLeft: 10,
		
	},
})
export default PostDetailsScreen;