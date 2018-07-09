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



const _format = 'YYYY-MM-DD'
const _today = moment().format(_format)
const _maxDate = moment().add(120, 'days').format(_format)


class CalendarScreen extends React.Component {

  initialState = {
    [_today]: {disabled: true}
  }

  constructor() {
    super();
    this.state = {
      _markedDates: this.initialState
    }

    //this.OnDaySelect = this.OnDaySelect.bind(this);
  }

  OnDaySelect = (day) => {
    const _selectedDay = moment(day.dateString).format(_format);
    console.log(_selectedDay);
    let marked = true;
    let markedDates = {}
    if (this.state._markedDates[_selectedDay]){
      this.props.navigation.navigate('EventDetails')
      marked = !this.state._markedDates[_selectedDay].marked;
      markedDates = this.state._markedDates[_selectedDay];
    }

    markedDates = {...markedDates, ...{ marked }};

    const updatedMarkedDates = {...this.state._markedDates, ...{[_selectedDay]: markedDates}}

    this.setState({_markedDates: updatedMarkedDates});
  }


  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={styles.AddButtonContainer}>
          <Icon
            type='font-awesome'
            name="plus"
            size={32}
            onPress={() => this.props.navigation.navigate('CreateEvent')}
          />
        </View>


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
  AddButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    height:20,
    marginRight: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',

  },
  AddButton: {
    backgroundColor: 'green',

  }
});

export default CalendarScreen;
