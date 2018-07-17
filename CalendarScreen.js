import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, WebView, Platform, ScrollView, } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';
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
import HomeScreen from './HomeScreen';
import Slot from './Slot';

import EventData from './www_timeline_events.json';
const _format = 'YYYY-MM-DD'
const _today = moment().format(_format)
const _maxDate = moment().add(120, 'days').format(_format)

//const calendarEvents = require('./mock-database/wwww.timeline_events.json');


class CalendarScreen extends React.Component {

  

  initialState = {
    [_today]: {disabled: true}
  }

  constructor() {
    super();
    this.state = {
      _markedDates: this.initialState,
      data: EventData,
      //EventDate: ''
    }
    //this.test = this.test.bind(this);
    //this.OnDaySelect = this.OnDaySelect.bind(this);
     global.EventArray = ['2018-07-14','2018-07-20','2018-07-23'];
     this.PostEvent = this.PostEvent.bind(this);
  }
  test = () => {
    console.log('test in Calendar');
  }


  AddToCal = (array) => {
    console.log('in AddToCal');
    console.log(array);
    for (var i = 0; i < array.length; i++) {

      console.log(array[i]);
      this.PostEvent(array[i]);
    }
  }


  PostEvent = (day) => {
    console.log('in post event');
    let marked = true;
    let markedDates = {}

    markedDates = {...markedDates, ...{ marked }};

    const updatedMarkedDates = {...this.state._markedDates, ...{[day]: markedDates}}
    console.log(updatedMarkedDates);


    this.setState({_markedDates: updatedMarkedDates});

  }

  AddEvent = (info) => {

    console.log('in AddEvent');
    console.log(info)
    const newEvent = moment(info).format(_format);
    console.log(newEvent);

    //const EventDay = moment(newEvent.dateString).format(_format);
    //EventArray.push(newEvent);
    //console.log(newEvent);
    //console.log(EventArray);

    //this.step();
    console.log(EventArray);
    this.AddToCal(EventArray);

  }

  step = () => {
    console.log('step');
    console.log(EventArray);
    //this.step();
  }

  OnDaySelect = (date) => {
    const _selectedDay = moment(date.dateString).format(_format);
    console.log('_selectedDay')
    console.log(_selectedDay);
    //let marked = true;
    //let markedDates = {}
    if (this.state._markedDates[_selectedDay]){
      this.props.navigation.navigate('EventDetails')
      marked = !this.state._markedDates[_selectedDay].marked;
      markedDates = this.state._markedDates[_selectedDay];
    }
    this.PostEvent(_selectedDay);

    //markedDates = {...markedDates, ...{ marked }};

    //const updatedMarkedDates = {...this.state._markedDates, ...{[_selectedDay]: markedDates}}

    //this.setState({_markedDates: updatedMarkedDates});
  }
  componentWillMount(){
    console.log('in componen will mount');
    console.log(this.state.data)
    //console.log(this.state.EventDate);
    this._mounted = true;
    //this.AddEvent(this.state.EventDate);
    this.step();
      }

  render() {
    //this.AddToCal();
    return (
        <View style={{ flex: 1}}>
        <Calendar
        style={styles.Calendar}
          theme={{
            dotColor: 'pink',
          }}

          minDate={_today}
          maxDate={_maxDate}

          onDayPress={this.OnDaySelect}
          markedDates={this.state._markedDates}
          />
      </View>
    );
  }
}



const styles = StyleSheet.create ({
  Calendar: {
    flex: 10,
    height: "90%",
    width: "100%"
  },
});

export default CalendarScreen;
