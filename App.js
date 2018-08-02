import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Platform, ScrollView, Image } from 'react-native';
import {createStackNavigator, createBottomTabNavigator, StackNavigator, TabNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';
import GWLNlogo from './img/gwln_logo.jpg';

import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import MemberContactPage from './MemberContactPage';
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
import CalendarScreen from './CalendarScreen';
import OrganizerSigninScreen from './OrganizerSigninScreen';
import MemberSigninScreen from './MemberSigninScreen';
import GWLNSignUp from './GWLNSignUp';
import LaunchPage from './LaunchPage';
import Slot from './Slot';
import HomeScreen from './HomeScreen';
import MessageBoardScreen from './MessageBoardScreen';
import PostDetailsScreen from './PostDetailsScreen';
import GuestHomeScreen from './GuestHome';
import MemberHomeScreen from './MemberHome';
import Signin from './NewLaunch';
import addEvent from './addEventTest';
import contactData from './mock-database/crm.contacts.json';
import memberRSVP from './memberRSVP';
import checkinTest from './checkTest';
import guestRSVP from './guestRSVP';
import guestCalendarScreen from './guestCalendarScreen';
import guestCalendarDetailScreen from './guestCalendarDetailScreen';
import MyEventDetailScreen from './MyEventDetailScreen';
import attendeeList from './attendeeList';


import './Global.js';
import GuestBlog from './GuestBlog';



 const TabNav = createBottomTabNavigator({
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({tintColor}) => (
            <Icon
              name="home"
              color={tintColor}
              size={30}
            />
          ),
        },
      },
      Profile: {
        screen: ProfileScreen,
        navigationOptions: {
          tabBarLabel: 'Profile',
          tabBarIcon: ({tintColor}) => (
            <Icon
              type='font-awesome'
              name="user"
              color={tintColor}
              size={30}
            />
          ),
        },
      },
      CalendarView: {
        screen: CalendarScreen,
        navigationOptions: {
          title: 'Calendar',
          tabBarIcon: ({tintColor}) => (
            <Icon
              type='font-awesome'
              name="calendar"
              color={tintColor}
              size={27}
            />
          ),
        },
      },
      GWLN: {
        screen: GWLNScreen,
        navigationOptions: {
          title: 'Donate',
          tabBarIcon: ({tintColor}) => (
            <Icon
              type='font-awesome'
              name="dollar"
              color={tintColor}
              size={27}
            />
          ),
        },
      },
    });

TabNav.navigationOptions = ({navigation}) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let title;
  if (routeName==='Home') {
    return {
    headerTitle: (<Image source={GWLNlogo} style={styles.GWLNlogo}/>),
    headerLeft: null,
    };
  }
  else if (routeName==='Profile') {
    return {
   		 // headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: '300', fontSize: 20, color: 'white'}}>  {navigation.state.params.user.first_name} {navigation.state.params.user.last_name}</Text>),
   		 // headerRight: (<View></View>),
   	 headerStyle: {
   			 backgroundColor: '#002a55',
         borderColor: '#002A55',
   			 elevation: 0,
       },
    headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: '400', fontSize: 20, color: 'white'}}> {global.currUser.first_name} {global.currUser.last_name}</Text>),
    headerLeft: null,
    };
  }
  else if (routeName==='CalendarView') {
    return {
    headerLeft: (<View></View>),
    headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20, color: '#002A55'}}> Calendar </Text>),
    headerRight: (<Icon
      containerStyle={{paddingRight:30, paddingTop:15}}
      iconStyle={styles.headerIcon}
      type='font-awesome'
      name="plus"
      onPress={() => navigation.navigate('CreateEvent')}
    />)
    };
  }
  else if (routeName==='GWLN') {
    return {
    headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20, color: '#002A55'}}> Help Support Our Cause </Text>),
    headerLeft: null,
    };
  }
  return {
    title,
  };
};

const GuestNav = createBottomTabNavigator({
     Home: {
       screen: GuestHomeScreen,
       navigationOptions: {
         tabBarLabel: 'Home',
         tabBarIcon: ({tintColor}) => (
           <Icon
             name="home"
             color={tintColor}
             size={30}
           />
         ),
       },
     },
     CalendarView: {
       screen: guestCalendarScreen,
       navigationOptions: {
         title: 'Calendar',
         tabBarIcon: ({tintColor}) => (
           <Icon
             type='font-awesome'
             name="calendar"
             color={tintColor}
             size={27}
           />
         ),
       },
     },
     GWLN: {
       screen: GWLNScreen,
       navigationOptions: {
         title: 'Donate',
         tabBarIcon: ({tintColor}) => (
           <Icon
             type='font-awesome'
             name="dollar"
             color={tintColor}
             size={27}
           />
         ),
       },
     },
   });

GuestNav.navigationOptions = ({navigation}) => {
 let { routeName } = navigation.state.routes[navigation.state.index];
 let title;
 if (routeName==='Home') {
   return {
   headerTitle: (<Image source={GWLNlogo} style={styles.GWLNlogo}/>),
   headerRight: (<View></View>),
   };
 }
 else if (routeName==='CalendarView') {
   return {
   headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20, color: '#002A55'}}> Calendar </Text>),
   headerLeft: null,
   };
 }
 else if (routeName==='GWLN') {
   return {
   headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20, color: '#002A55'}}> Help Support Our Cause </Text>),
   headerLeft: null,
   };
 }
 return {
   title,
 };
};

const MemberNav = createBottomTabNavigator({
     Home: {
       screen: MemberHomeScreen,
       navigationOptions: {
         tabBarLabel: 'Home',
         tabBarIcon: ({tintColor}) => (
           <Icon
             name="home"
             color={tintColor}
             size={30}
           />
         ),
       },
     },
     Profile: {
       screen: ProfileScreen,
       navigationOptions: {
         tabBarLabel: 'Profile',
         tabBarIcon: ({tintColor}) => (
           <Icon
             type='font-awesome'
             name="user"
             color={tintColor}
             size={30}
           />
         ),
       },
     },
     CalendarView: {
       screen: CalendarScreen,
       navigationOptions: {
         title: 'Calendar',
         tabBarIcon: ({tintColor}) => (
           <Icon
             type='font-awesome'
             name="calendar"
             color={tintColor}
             size={27}
           />
         ),
       },
     },
     GWLN: {
       screen: GWLNScreen,
       navigationOptions: {
         title: 'Donate',
         tabBarIcon: ({tintColor}) => (
           <Icon
             type='font-awesome'
             name="dollar"
             color={tintColor}
             size={27}
           />
         ),
       },
     },
   });

MemberNav.navigationOptions = ({navigation}) => {
 let { routeName } = navigation.state.routes[navigation.state.index];
 let title;
 if (routeName==='Home') {
   return {
   headerTitle: (<Image source={GWLNlogo} style={styles.GWLNlogo}/>),
   headerLeft: null,
   };
 }
 else if (routeName==='Profile') {
     return {
       headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: '300', fontSize: 20, color: '#002A55'}}>{global.currUser.first_name} {global.currUser.last_name}</Text>),
       headerLeft: null,
     };
   }
 else if (routeName==='CalendarView') {
   return {
   headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20, color: '#002A55'}}> Calendar </Text>),
   headerLeft: null,
   };
 }
 else if (routeName==='GWLN') {
   return {
   headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20, color: '#002A55'}}> Help Support Our Cause </Text>),
   headerLeft: null,
   };
 }
 return {
   title,
 };
};

const NavigationFlow = createStackNavigator({
  Launch: {
    screen: Signin,
  },

  OrganizerSignin: {
    screen: OrganizerSigninScreen,
  },

  MemberSignin: {
    screen: MemberSigninScreen,
  },
  Home: {
    screen: TabNav,
  },
  MessageBoard: {
    screen: MessageBoardScreen,
  },
  MemberList: {
    screen: MemberListScreen,
  },
  CheckIn: {
    //changed
    screen: checkinTest,
  },
  FeedbackFrom: {
    screen: FeedbackFormScreen,
  },
  CreateEvent: {
    screen: CreateEventScreen,
  },
  AddPost: {
    screen: AddPostScreen,
  },
  MyUpcomingEvents: {
    screen: MyUpcomingEventsScreen,
  },
  MyPastEvents: {
    screen: MyPastEventsScreen,
  },
  DonateView: {
    screen: DonateWebView,
  },
  EventDetails: {
    screen: CalendarDetailScreen,
  },
  SignUp: {
    screen: GWLNSignUp,
  },
  MemberContactPage: {
    screen: MemberContactPage,
  },
  PostDetailsScreen: {
    screen: PostDetailsScreen,
  },
  GuestHomeScreen: {
    screen: GuestNav,
  },
  MemberHomeScreen: {
    screen: MemberNav,
  },
  memberRSVP: {
    screen: memberRSVP,
  },
  guestRSVP: {
    screen: guestRSVP,
  },
  guestCalendarScreen: {
    screen: guestCalendarScreen,
  },
  guestCalendarDetailScreen: {
    screen: guestCalendarDetailScreen,
  },
  GuestBlog: {
    screen: GuestBlog,
  },
  MyEventDetailScreen: {
    screen: MyEventDetailScreen,
  },
  attendeeList: {
    screen: attendeeList,
  },

})

export default NavigationFlow;

const styles = StyleSheet.create({
  headerIcon: {
		flex:1,
		color: '#002A55',
	},
  GWLNlogo: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    // padding: 100,
  },
})
