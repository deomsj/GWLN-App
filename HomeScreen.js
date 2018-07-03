import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Platform, ScrollView, } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import {Calendar} from 'react-native-calendars';
import moment from 'moment';

import GWLNScreen from './GWLNScreen';
import DonateWebView from './DonateWebView';
import MemberListScreen from './MemberListScreen';
import MyUpcomingEventsScreen from './MyUpcomingEventsScreen';
import MyPastEventsScreen from './MyPastEventsScreen';
import CreateEventScreen from './CreateEventScreen';
import CheckInScreen from './CheckInScreen';
import FeedbackFormScreen from './FeedbackFormScreen';
import CalendarDetailScreen from './CalendarDetailScreen';
import ProfileScreen from './ProfileScreen';
import AddPostScreen from './AddPostScreen';
//import CalendarScreen from './CalendarScreen';
import OrganizerSigninScreen from './OrganizerSigninScreen';

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
      <View style={{ alignItems: 'center', justifyContent: 'center'}}>

        <Button
          color= '#002A55'
          justifyContent= 'center'
          title="Message Board"
          onPress={() => this.props.navigation.navigate('MessageBoard')}
          />
        <Button
          color= '#002A55'
          title="Member List"
          onPress={() => this.props.navigation.navigate('MemberList')}
          />
          <Button
            color= '#002A55'
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

export default HomeScreen;
