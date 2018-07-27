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

const tmp = {}

//const calendarEvents = require('./mock-database/wwww.timeline_events.json');


class CalendarScreen extends React.Component {



  initialState = {
    [_today]: {disabled: true}
  }

  constructor() {
    super();
    this.state = {
      data: {},
      MarkedEvents: {},
      _markedDates: {},

    }
    //this.test = this.test.bind(this);
    //this.OnDaySelect = this.OnDaySelect.bind(this);
     global.EventArray = [];
     this.PostEvent = this.PostEvent.bind(this);
  }


  retrieveEvents = () => {
  const url = 'https://cuwomen.org/functions/app.gwln.php'
  fetch(url, {
    method: "POST",
    headers: {
      'X-Token': 'hub46bubg75839jfjsbs8532hs09hurdfy47sbub',
    },
    body: JSON.stringify({
      "code": "getAllEvents"
    }),
  })
  .then(res => res.json())
  .then(res => {
    if (res) {
      //console.log(res);
      console.log(res.length);
      this.state.data = res
      this.sortEvents();
    }
  })
  .catch(error => {
    console.log(error);
  })
  console.log('fetching events');
}

sortEvents = () => {
  let tmpDates = this.state.data;
  //console.log(tmpDates);
  for (var i = 0; i < tmpDates.length; i++) {

    tmp = tmpDates[i]
    //console.log(tmp);
    var day = tmp.event_day
    var month = tmp.event_month
    var zero = "0";
    if (month.length == 1) {
      month = `${zero}${month}`
    }
    if (day.length == 1) {
      day = `${zero}${day}`
    }
    const year = tmp.event_year
    const date = `${year}-${month}-${day}`
    const _date = moment(date).format(_format);
    //console.log(date);
    //console.log(_date);
    this.PostEvent(date);
  }
  //this.PostEvent("2018-07-27");
}

  PostEvent = (day) => {
    //console.log('in post');
    //console.log(day);

    let marked = true;
    let newMarkedDay = this.state._markedDates;
    newMarkedDay[day] = {marked}
    //console.log(newMarkedDay);
    const updatedMarkedDates = {...this.state._markedDates, ...{ [day]: {marked}}}
    this.setState({ _markedDates: updatedMarkedDates });
    //console.log(this.state._markedDates);

  }



  OnDaySelect = (date) => {
    const _selectedDay = moment(date.dateString).format(_format);
   // console.log('_selectedDay')
    console.log(_selectedDay);

    // pass the date to the event details page

    if (this.state._markedDates[_selectedDay]){
       console.log('in if statement');
       this.parseSelectedDate(_selectedDay)
       //console.log(_selectedDay);
       // navigate to event detail and pass the event id so that the post information can be retrieved
       //this.props.navigation.navigate('EventDetails', {date, _selectedDay})
      // marked = !this.state._markedDates[_selectedDay].marked;
      // markedDates = this.state._markedDates[_selectedDay];
     }
    this.PostEvent(_selectedDay);
  }

  parseSelectedDate = date => {
    date = String(date).split('-');
    var _year  = date[0];
    var _month = date[1];
    var _day = date[2];
    console.log(_day[1]);
    if (_day[0] == 0) {
      _day = _day[1]
    }
    if (_month[0] == 0) {
      _month = _month[1]
    }
    console.log(_year);
    console.log(_month);
    console.log(_day);
    let TmpSelected = this.state.data
    //console.log(TmpSelected)
    var filteredDate = TmpSelected.filter( event => {
      //console.log(_day);
      return event.event_day == _day
      && event.event_month == _month
      && event.event_year == _year;
    });
    console.log(filteredDate);
    let filteredID = filteredDate[0].timeline_event_id
    console.log(filteredID);
    this.props.navigation.navigate('EventDetails', {date, filteredID})
  }





  componentWillMount(){
    //console.log('in componen will mount');
    //console.log(this.state.data)
    //console.log(this.state.EventDate);
    //this._mounted = true;
    //this.AddEvent(this.state.EventDate);
    //this._parseEventData(this.state.data);
    this.retrieveEvents();
      }

  render() {
    //console.log(this.state._markedDates)

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
