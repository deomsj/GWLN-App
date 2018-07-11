import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Platform, ScrollView, } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';



class MessageBoardScreen extends React.Component {

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
    return (null);
  }
}

export default MessageBoardScreen;
