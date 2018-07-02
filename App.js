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
  }

  OnDaySelect = (day) => {
    const _selectedDay = moment(day.dateString).format(_format);
    let marked = true;
    let markedDates = {}
    if (this.state._markedDates[_selectedDay]){
      this.props.navigation.navigate('EventDetails')
      //marked = !this.state._markedDates[_selectedDay].marked;
      //markedDates = this.state._markedDates[_selectedDay];
    }

    markedDates = {...markedDates, ...{ marked }};

    const updatedMarkedDates = {...this.state._markedDates, ...{[_selectedDay]: markedDates}}

    this.setState({_markedDates: updatedMarkedDates});
  }


  render() {
    return (
      <View style={{ flex: 1}}>
        
        <View style={styles.AddButtonContainer}>
          <Button
          style={styles.AddButton}
          title='Plus'
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
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
   
  },
  AddButton: {
    backgroundColor: 'green',

  }
});


export const RootStack = createStackNavigator(
  {
  Home: HomeScreen,
  Profile: ProfileScreen,
  CalendarView: CalendarScreen,
  GWLN: GWLNScreen,
  AddPost: MessageBoardScreen,
  }
);

export const GWLN = createStackNavigator({
  GWLN: {screen: GWLNScreen },
  DonateView: {screen: DonateWebView}
});

export const CalendarView = createStackNavigator({
  CalendarView: {screen: CalendarScreen},
  CreateEvent: {screen: CreateEventScreen},
  EventDetails: {screen: CalendarDetailScreen}
});

export const MessageBoard = createStackNavigator({
  MessageBoard: {screen: MessageBoardScreen},
  AddPost: {screen: AddPostScreen}
});


export const Home = createStackNavigator({
  Home: {screen: HomeScreen},
  MessageBoard: {screen: MessageBoardScreen},
  MemberList: {screen: MemberListScreen},
  CreateEvent: {screen: CreateEventScreen},
  FeedbackFrom: {screen: FeedbackFormScreen},
  CheckIn: {screen: CheckInScreen},
  AddPost: {screen: AddPostScreen},
});

export const Profile = createStackNavigator({
  Profile: {screen: ProfileScreen},
  MyUpcomingEvents: {screen: MyUpcomingEventsScreen},
  MyPastEvents: {screen: MyPastEventsScreen},
});


export default createBottomTabNavigator({
  Home: {screen: Home,},
  Profile: {screen: Profile},
  CalendarView: {screen: CalendarView},
  GWLN: {screen: GWLN,},
}, {
  initialRouteName: 'Home',
  activeTintColor: '#f0edf6',
  inactiveTintColor: '#3e2465',
})
