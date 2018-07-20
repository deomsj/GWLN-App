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
      data: EventData,
      MarkedEvents: {},
      _markedDates: {},
      
    }
    //this.test = this.test.bind(this);
    //this.OnDaySelect = this.OnDaySelect.bind(this);
     global.EventArray = [];
     this.PostEvent = this.PostEvent.bind(this);
  }


  PostEvent = (day) => {
    
    //console.log(markedDates);
    // this.setState({
    //   selected: day
    // });
    // let _markedDates = this.state.markedDates;
    // _markedDates[day] = {marked: true, selected: true}

    // this.setState({
    //   markedDates: _markedDates
    // });
    // console.log(this.state.markedDates);
    


    console.log(day)

    let marked = true;
    let newMarkedDay = this.state._markedDates;
    newMarkedDay[day] = {marked}
    console.log(newMarkedDay);
    const updatedMarkedDates = {...this.state._markedDates, ...{ [day]: {marked}}}
    this.setState({ _markedDates: updatedMarkedDates });
    console.log(this.state._markedDates);

  }

  _parseEventData =({ item }) => {
    console.log("in parse data");
    const data = this.state.data.Events
    //const id = item.timeline_event_id
    //console.log(data);
    console.log(data.length);
    for (var i = 0; i < data.length; i++) {
      const day = data[i].event_day
      const month = data[i].event_month
      const year = data[i].event_year
      const date = `${year}-${month}-${day}`
      const _date = moment(date).format(_format);
     // console.log(date);
      this.PostEvent(_date);
    }

  }


  OnDaySelect = (date) => {
    const _selectedDay = moment(date.dateString).format(_format);
    console.log('_selectedDay')
    console.log(_selectedDay);
 
    if (this.state._markedDates[_selectedDay]){
       console.log('in if statement');
       //this.props.navigation.navigate('EventDetails')
      // marked = !this.state._markedDates[_selectedDay].marked;
      // markedDates = this.state._markedDates[_selectedDay];
     }
    this.PostEvent(_selectedDay);
  }
  componentWillMount(){
    console.log('in componen will mount');
    //console.log(this.state.data)
    //console.log(this.state.EventDate);
    this._mounted = true;
    //this.AddEvent(this.state.EventDate);
    this._parseEventData(this.state.data);
      }

  render() {

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
          markingType={'interactive'}

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
