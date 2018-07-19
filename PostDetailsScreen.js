import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Platform, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';

import MessageBoardScreen from './MessageBoardScreen'

class PostDetailsScreen extends React.Component {
	static navigationOptions = ({navigation})=> {
		return {
			headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20, color: '#002A55'}}> {navigation.state.params.post.name}'s Post </Text>),
			headerRight: (<View></View>),
		};
	}

	render() {
		return (
			<View style={styles.mainContainer}>
				<View style={styles.titleContainer}>
					<Text style={styles.titleText}> {this.props.navigation.state.params.post.title} </Text>
				</View>
				<View style={styles.postContainer}>
					<Text style={styles.postText}> {this.props.navigation.state.params.post.description} </Text>
				</View>
				</View>
		);
	}

}
const styles = StyleSheet.create ({
		mainContainer: {
			backgroundColor: 'white',
			flex:1,
		},
		container: {
			flex: 1,
			backgroundColor: 'white',
			justifyContent: 'center',
			padding: 30,
		},
	titleContainer: {
		flex: 1,
		padding:20,
		alignItems: 'center',
	},
	titleText: {
		color:'#002A55',
		fontSize: 23,
		fontWeight: '400',
		textAlign: 'center',
	},
	postContainer: {
		padding: 10,
		borderRadius: 10,
		// backgroundColor: '#CED0CE',
		borderWidth: 1,
		// borderTopWidth: 0,
		borderColor: 'black',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		bottom: '75%',
	},
	postText: {
		color:'#002A55',
		fontSize: 17,
		textAlign: 'center',
	},
})
export default PostDetailsScreen;
