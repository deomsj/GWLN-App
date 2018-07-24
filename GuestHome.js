import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Platform, ScrollView, TouchableOpacity, ListView, Alert, } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import RNPickerSelect from 'react-native-picker-select';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import Gallery from 'react-native-image-gallery';
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
import LaunchPage from './LaunchPage';
//import CalendarScreen from './CalendarScreen';
import OrganizerSigninScreen from './OrganizerSigninScreen';

class GuestHomeScreen extends React.Component {
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
          {source: require('./img/Scroll/Scroll1.jpg'), dimensions: {width: undefined, height: undefined},  resizeMode: 'contain'},
          {source: require('./img/Scroll/Scroll3.jpg'), dimensions: {width: undefined, height: undefined}},
          {source: require('./img/Scroll/Scroll2.jpg'), dimensions: {width: undefined, height: undefined}},
          // {source: require('./img/Scroll/Scroll4.jpg'), dimensions: {width: undefined, height: undefined}},
        ]}
          flatListProps={{windowSize: 2}}
          pageMargin={10}

          />
        </View>
        <View style={styles.buttonContainer}>
        <View style={styles.menuContainer}>
        <View style={styles.button}>
          <Button
            color= {buttonColors}
            title="Message Board"
            onPress={() => this.props.navigation.navigate('MessageBoard')}
          />
          </View>
          </View>
        <View style={styles.signoutContainer}>
        <View style={styles.button}>
          <Button
           color={buttonColors}
           title="Return to Launch"
           onPress={() => Alert.alert(
             'Sign Out',
             'Are you sure you want to return to the launch page?',
             [
               {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
               {text: 'Yes', onPress: () => this.props.navigation.navigate('Launch')},
             ],
           )}
           />
           </View>
           </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    // marginTop:20,
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
    // flexDirection: 'column',
    alignItems: 'center',

  },
  menuContainer: {
    backgroundColor: 'white',
    paddingBottom:20,
  },
  button: {
    // padding: 20,
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
		flexDirection: 'column',
		// alignItems: 'center',
	},
  buttonContainer: {
   alignItems: 'center',
   backgroundColor: 'white',
   // padding: 10,
   position: 'absolute',
   top: '60%',
 },
 signoutContainer: {
   backgroundColor: 'white',
   paddingTop:40,
 },
 galleryContainer: {
   backgroundColor: 'white',
   // flex: 1,
   // position: 'absolute',
   // bottom: '50%',
   padding:10,
   paddingBottom: 250,
   alignItems: 'center',
   justifyContent: 'center',
 },
 gallery: {
   // backgroundColor: 'rgba(0,42,85,0.7)',
   padding:20,
   justifyContent: 'center',
   alignItems: 'center',
   alignSelf: 'center',
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
    // backgroundColor: '#002A55',
    color: '#002A55',
  },
  inputAndroid: {
    paddingHorizontal: 150,
    padding:10,
    backgroundColor: '#002A55',
  }
});
export default GuestHomeScreen;
