import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Platform, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';

import MessageBoardScreen from './MessageBoardScreen'

class PostDetailsScreen extends React.Component {
	static navigationOptions = ({navigation})=> {
		return {
			headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: '300', fontSize: 20, color: '#002A55'}}> {navigation.state.params.post.created_by}'s Post </Text>),
			headerRight: (<View></View>),
		};
	}

	makeRemoteRequest = () => {

	}

	render() {
		return (
			<View style={styles.mainContainer}>
					<Text style={styles.titleText}> {this.props.navigation.state.params.post.title} </Text>
					<Text style={styles.separator}> ================================</Text>
					<Text style={styles.postText}> {this.props.navigation.state.params.post.story} </Text>
			</View>
		);
	}

}
const styles = StyleSheet.create ({
		mainContainer: {
			backgroundColor: 'white',
			flex:1,
			flexDirection: 'column',
			// justifyContent: 'center',
			padding: 20,
		},
	titleText: {
		color:'black',
		fontSize: 23,
		fontWeight: '400',
		marginBottom: 20,
		// textAlign: 'center',
	},
	postText: {
		color:'black',
		fontSize: 16,
		// textAlign: 'center',
	},
	separator: {
		color: 'black',
		fontSize: 15,
		marginBottom: 20,
	}
})
export default PostDetailsScreen;
