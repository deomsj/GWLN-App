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
					<View style={styles.cardContainer}>
					<View style={styles.postContainer}>
					<ScrollView>
					<Text style={styles.postText}> {this.props.navigation.state.params.post.story} </Text>
					</ScrollView>
					</View>
					</View>
			</View>
		);
	}

}
const styles = StyleSheet.create ({
		mainContainer: {
			backgroundColor: '#002a55',
			flex:1,
			padding: 20,
			alignItems: 'center',
		},
	postText: {
		color:'#002a55',
		fontSize: 16,
		fontWeight: '400',
		// textAlign: 'center',
	},
	postContainer: {
		alignSelf: 'center',
		paddingHorizontal: 20,
		// paddingHorizontal: 50,
		paddingVertical: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	cardContainer: {
		backgroundColor: 'white',
		position: 'absolute',
		top: '5%',
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		height: '95%',
		width: '90%',
		borderRadius: 10,
	},
})
export default PostDetailsScreen;
