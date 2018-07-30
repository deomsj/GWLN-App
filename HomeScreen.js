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

class HomeScreen extends React.Component {
    constructor(){
      super();
      this.inputRefs = {};
      this.state={
        Function: undefined,
        items: [
          // {
          //   label: 'Manage Events...',
          //   color: 'black',
          //   value: 'HomeScreen'
          // },
          {
            label: 'Event Check In',
            value: 'CheckIn',
          },
          {
            label: 'Provide Feedback',
            value: 'FeedbackFrom',
          },
          {
            label: 'Create an Event',
            value: 'CreateEvent',
          },
        ],
      };
    }

    pickerNavigate=()=>{
      var nextPage = this.state.PickerValue
      this.props.navigation.navigate(nextPage)
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
            {source: require('./img/Scroll/Scroll1.jpg'), dimensions: {width: undefined, height: undefined}},
            {source: require('./img/Scroll/Scroll3.jpg'), dimensions: {width: undefined, height: undefined}},
            {source: require('./img/Scroll/Scroll2.jpg'), dimensions: {width: undefined, height: undefined}},
            {source: require('./img/Scroll/Scroll4.jpg'), dimensions: {width: undefined, height: undefined}},
          ]}
            flatListProps={{windowSize: 2}}
            pageMargin={10}
            />
            <Text style={styles.textStyle}>The Vision for Global Women's Leadership Network is to provide women with the opportunity and resources to make a measurable difference... in the lives of each other, in the lives of credit union members and in their communities.</Text>
            </View>
        <View style={styles.buttonContainer}>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            placeholder={{
              label: 'Manage Events...',
              color: 'lightgray',
            }}
            items={this.state.items}
             onValueChange={(value) => {
              this.setState({
                Function: value,
              });
              if (value) {this.props.navigation.navigate(value)}
            }}
            // style={{color:'#002A55'}}
            style={{...pickerStyle }}
            hideicon={false}
            // keyExtractor={(item) => item.toString()}
          />
          </View>
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
    paddingTop:5,
  },
  button: {
    paddingHorizontal: 30,
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
    bottom: '2%',
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
   fontSize: 16,
   paddingHorizontal:10,
   fontWeight: '300',
   color: '#002a55',
   flex:1,
 },
  pickerContainer: {
    // paddingBottom: 5,
    borderColor: '#002a55',
    borderWidth: 2,
    borderRadius: 5,
    elevation: 0,
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
    // paddingTop: 10,
    paddingHorizontal: 125,
    paddingBottom: 10,
    paddingTop: 10,
    // padding:10,
    backgroundColor: 'white',
    color: 'black',
  }
});
export default HomeScreen;
