import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Platform, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';

import MessageBoardScreen from './MessageBoardScreen'

class PostDetailsScreen extends React.Component {
	static navigationOptions = ({navigation})=> {
		return {
			headerTitle: (<Text style={{flex: 1, textAlign: 'center', fontWeight: '300', fontSize: 17, color: '#002A55'}}>{navigation.state.params.post.title}</Text>),
			headerRight: (<View></View>),
		};
	}

	makeRemoteRequest = () => {

	}

	render() {
		return (
			<View style={styles.mainContainer}>
					<Text style={styles.postText}> {this.props.navigation.state.params.post.story} </Text>
			</View>
		);
	}

}
const styles = StyleSheet.create ({
		mainContainer: {
			backgroundColor: 'white',
			flex:1,
			padding: 20,
			alignItems: 'center',
		},
	titleText: {
		color:'grey',
		fontSize: 15,
		fontWeight: '200',
		marginBottom: 20,
		textAlign: 'center',
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
