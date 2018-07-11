import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Platform, ScrollView, } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import RNPickerSelect from 'react-native-picker-select';
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
    constructor(){
      super();
      this.inputRefs = {};
      this.state={
        Function: undefined,
        items: [
          {
            label: 'Event Check In',
            value: 'CheckIn',
          },
          {
            label: 'Event Feedback',
            value: 'FeedbackFrom',
          },
          {
            label: 'Create an Event',
            value: 'CreateEvent',
          },
        ],
      };
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

          <View style={{ paddingTop: 20}}>
            <RNPickerSelect
              placeholder={{
                label: 'Event Management...',
                value: null,
              }}
              items={this.state.items}
              onValueChange={(value) => {
                this.setState({
                  Function: value,
                });
                this.props.navigation.navigate(value)
              }}
              style={{...pickerStyle }}
              hideicon={false}
            />
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 10,

  },
});

const pickerStyle = StyleSheet.create({
  inputiOs: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  },
});
export default HomeScreen;
