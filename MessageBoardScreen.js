import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Platform, ScrollView, } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';



class MessageBoardScreen extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			data: [
				{postID: 1, title: 'Watson eats fuzz', description: 'watson rips apart his toys and then eats the fuzz inside them and now he sounds weird when he barks because hes full of fuzz'},
				{postID: 2, title: 'tennis balls', description: 'tennnnnnniiiiiisssssssss balllllllssssssss'},
				{postID: 3, title: 'post number 3', description: 'hhshbfreibrebcgiejncibcgch'},
				{postID: 4, title: 'watson eats walls', description: 'watson ate the corner of the wall ouside my bedroom so now there is a big ole hole there'},
			],
		};
	}

  static navigationOptions = ({navigation})=> {
		return {
			headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20}}> Message Board </Text>),
			headerRight: ( <Icon
				containerStyle={{padding:15}}
				type='font-awesome'
				name= "edit"
				onPress={navigation.getParam('goToAdd')}/>
			),

		};
	};

  componentDidMount=()=> {
    this.props.navigation.setParams({ goToAdd: this.goToAddPost });
  }
  goToAddPost=()=> {
		this.props.navigation.navigate('AddPost')
	}
  render(){
    return (
    	<View style={{flex: 1}}>

		</View>
    );
  }
}

export default MessageBoardScreen;
