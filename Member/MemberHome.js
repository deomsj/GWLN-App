import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Platform, ScrollView, TouchableOpacity, ListView, } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import RNPickerSelect from 'react-native-picker-select';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import Gallery from 'react-native-image-gallery';
import GWLNScreen from '../GWLNScreen';
import MemberListScreen from '../MemberListScreen';
import MyUpcomingEventsScreen from '../MyUpcomingEventsScreen';
import CalendarDetailScreen from '../CalendarDetailScreen';
import ProfileScreen from '../ProfileScreen';
import AddPostScreen from '../AddPostScreen';
//import CalendarScreen from './CalendarScreen';

class MemberHomeScreen extends React.Component {
    constructor(){
      super();
      this.inputRefs = {};
    }


  render() {
    var buttonColors = ['rgba(255, 255, 255, 1)'];
		if (Platform.OS === 'android') {
			buttonColors = ['rgba(0, 42, 85, 1)'];
		};
    return (

      <View style={styles.container}>
      <View style={styles.galleryContainer}>
        <Gallery
          style={styles.gallery}
          images={[
            {source: require('../img/Scroll/Scroll4.jpg'), dimensions: {width: undefined, height: undefined}},
            {source: require('../img/Scroll/Scroll2.jpg'), dimensions: {width: undefined, height: undefined}},
            {source: require('../img/Scroll/Scroll3.jpg'), dimensions: {width: undefined, height: undefined}},
            {source: require('../img/Scroll/Scroll1.jpg'), dimensions: {width: undefined, height: undefined}},
          ]}

            />
            <Text style={styles.textStyle}>Our vision is to provide women with the opportunity and resources to make a measurable difference in the lives of each other, in the lives of credit union members and in their communities.</Text>
            </View>
        <View style={styles.buttonContainer}>
        <View style={styles.menuContainer}>
        <View style={styles.button}>
        <Button
          color= {buttonColors}
          title="Find an Event"
          onPress={() => this.props.navigation.navigate('CalendarView')}
        />
          </View>
          </View>
        <View style={styles.menuContainer}>
        <View style={styles.button}>
          <Button
            color= {buttonColors}
            title="Member List"
            onPress={() => this.props.navigation.navigate('MemberList')}
            />
          </View>
          </View>
          <Text
            style={styles.memberText}
            onPress={() => this.props.navigation.navigate('MessageBoard')}>
            Blog
          </Text>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  memberText: {
		color: 'blue',
		fontSize: 17,
		alignSelf: 'center',
	},
  menuContainer: {
    backgroundColor: 'white',
    paddingBottom:10,
  },
  button: {
    paddingHorizontal: 50,
    paddingVertical: 1,
		backgroundColor: '#002A55',
		...Platform.select({
      ios: {
        borderColor: '#002A55',
      },
      android: {
        borderColor: 'white',
      },
    }),
		borderWidth: 1,
		borderRadius: 5,
    elevation: 0,
	},
  buttonContainer: {
    position: 'absolute',
    bottom: '3%',
    alignSelf: 'center',
 },
 galleryContainer: {
   backgroundColor: 'white',
   padding:5,
   position: 'absolute',
   top: '0%',
   height: '90%',
 },
 textStyle: {
   textAlign: 'center',
   fontSize: 17,
   paddingHorizontal:10,
   color: '#002a55',
   flex:1,
   ...Platform.select({
     ios: {
       fontFamily: 'Helvetica',
       fontWeight: '500',
     },
     android: {
       fontFamily: 'sans-serif-light',
       fontWeight: '400',
     },
   }),
 },
});
export default MemberHomeScreen;