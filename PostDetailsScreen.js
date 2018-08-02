import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Platform, ScrollView, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';
import HTML from 'react-native-render-html';
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
	//cleanText = strInputCode.replace(/<\/?[^>]+(>|$)/g, "");
	//<WebView source={{html: '<p>Here I am</p>'}} />
	//<Text style={styles.postText}> {this.props.navigation.state.params.post.story.replace(/<\/?[^>]+(>|$)/g, "")} </Text>
	//<WebView source={{html: this.props.navigation.state.params.post.story}} />
	render() {
		return (
			<View style={styles.mainContainer}>
					<View style={styles.cardContainer}>
					<View style={styles.postContainer}>
					<ScrollView>
						<HTML html={this.props.navigation.state.params.post.story} imagesMaxWidth={Dimensions.get('window').width}/>
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
