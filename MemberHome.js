import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Platform, ScrollView, TouchableOpacity, ListView, } from 'react-native';
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
//import CalendarScreen from './CalendarScreen';
import OrganizerSigninScreen from './OrganizerSigninScreen';

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
          {source: require('./img/Scroll/Scroll1.jpg'), dimensions: {width: undefined, height: undefined},  resizeMode: 'contain'},
          {source: require('./img/Scroll/Scroll3.jpg'), dimensions: {width: undefined, height: undefined}},
          {source: require('./img/Scroll/Scroll2.jpg'), dimensions: {width: undefined, height: undefined}},
          // {source: require('./img/Scroll/Scroll4.jpg'), dimensions: {width: undefined, height: undefined}},
        ]}
          flatListProps={{windowSize: 2}}
          pageMargin={10}
          />
        </View>
        <View style={styles.textBox}>
        <Text style={styles.textStyle}>The Vision for Global Women's Leadership Network is to provide women with the opportunity and resources to make a measurable difference... in the lives of each other, in the lives of credit inion members and in their communities.</Text>
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
    justifyContent: 'space-evenly',
    flex: 1,
    alignItems: 'center',
  },
  memberText: {
		color: 'blue',
		fontSize: 17,
		padding: 10,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
	},
  menuContainer: {
    backgroundColor: 'white',
    paddingBottom:15,
  },
  button: {
    paddingHorizontal:75,
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
	},
  buttonContainer: {
   backgroundColor: 'white',
   position: 'absolute',
   top: '65%',
 },
 galleryContainer: {
   backgroundColor: 'white',
   padding:10,
   marginTop: '10%',
   alignItems: 'center',
 },
 gallery: {
   alignSelf: 'center',
 },
 textStyle: {
   textAlign: 'center',
   fontSize: 17,
   padding:10,
   fontWeight: '300',
   color: '#002a55',
   flex:1,
 },
 textBox: {
   marginTop: '12%',
   marginBottom: '12%',
   // padding: 10,
 },
});
export default MemberHomeScreen;
