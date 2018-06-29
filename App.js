import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Platform, } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import GWLNScreen from './GWLNScreen';
import DonateWebView from './DonateWebView';
import MemberListScreen from './MemberListScreen';
import MyUpcomingEventsScreen from './MyUpcomingEventsScreen';
import MyPastEventsScreen from './MyPastEventsScreen';
import CreateEventScreen from './CreateEventScreen';
import CheckInScreen from './CheckInScreen';
import FeedbackFormScreen from './FeedbackFormScreen';

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',

  }
    constructor(){
      super();
      this.state={
        PickerValue:''
      }
    };
    pickerNavigate=()=>{
      var nextPage = this.state.PickerValue
      this.props.navigation.navigate(nextPage)
    }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>

        <Button
          title="Message Board"
          onPress={() => this.props.navigation.navigate('MessageBoard')}
          />
        <Button
          title="Member List"
          onPress={() => this.props.navigation.navigate('MemberList')}
          />
          <Button
            title="Press Me"
            onPress={() => this.props.navigation.navigate(this.state.PickerValue)}
            />

          <View style={{ borderWidth: 0}}>

            <Picker

              style={{ height: 50, width: 200}}
              selectedValue={this.state.PickerValue}
              onValueChange={(ItemValue, ItemIndex) => this.setState({PickerValue:ItemValue})}
            >
            <Picker.Item label="Check in" value='CheckIn' />
            <Picker.Item label="Feedback Forms" value="FeedbackFrom" />
            <Picker.Item label="Create Event" value="CreateEvent"/>
            </Picker>
          </View>

      </View>
    );
  }
}




class MessageBoardScreen extends React.Component {
  static navigationOptions = {
    title: 'Message'


  }
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Message Board </Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text> Profile </Text>
          <Button
            title="My Upcoming Events"
            onPress={() => this.props.navigation.navigate('MyUpcomingEvents')}
            />
          <Button
            title="My Past Events"
            onPress={() => this.props.navigation.navigate('MyPastEvents')}
          />
        </View>
    );
  }
}

class CalendarScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> Calendar </Text>
      </View>
    );
  }
}

export const RootStack = createStackNavigator(
  {
  Home: HomeScreen,
  Profile: ProfileScreen,
  MessageBoard: MessageBoardScreen,
  Calendar: CalendarScreen,
  GWLN: GWLNScreen,
  }
);

export const GWLN = createStackNavigator({
  GWLN: {screen: GWLNScreen },
  DonateView: {screen: DonateWebView}
});

export const Home = createStackNavigator({
  Home: {screen: HomeScreen},
  MessageBoard: {screen: MessageBoardScreen},
  MemberList: {screen: MemberListScreen},
  CreateEvent: {screen: CreateEventScreen},
  FeedbackFrom: {screen: FeedbackFormScreen},
  CheckIn: {screen: CheckInScreen},
});

export const Profile = createStackNavigator({
  Profile: {screen: ProfileScreen},
  MyUpcomingEvents: {screen: MyUpcomingEventsScreen},
  MyPastEvents: {screen: MyPastEventsScreen},
});


export default createBottomTabNavigator({
  Home: {screen: Home,},
  Profile: {screen: Profile},
  Calendar: {screen: CalendarScreen},
  GWLN: {screen: GWLN,},
}, {
  initialRouteName: 'Home',
  activeTintColor: '#f0edf6',
  inactiveTintColor: '#3e2465',
})
