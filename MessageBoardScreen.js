import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Platform, ScrollView, } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import {Calendar} from 'react-native-calendars';
import moment from 'moment';



class MessageBoardScreen extends React.Component {
  
  render(){
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center'}}>
      <Text> Message Board </Text>
      <Button
      title="Post"
      onPress={() => this.props.navigation.navigate('AddPost')}
      />
      </View>
    );
  }
}

export default MessageBoardScreen;