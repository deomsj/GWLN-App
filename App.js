import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Platform, ScrollView, } from 'react-native';
import {createStackNavigator, createBottomTabNavigator, StackNavigator, TabNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';


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
    // navigationOptions: {
    //   headerLeft: null
    // },

TabNav.navigationOptions = ({navigation}) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let title;
  if (routeName==='Home') {
    return {
    headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20}}> Home </Text>),
    headerLeft: null,
    };
  }
  else if (routeName==='Profile') {
    return {
    headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20}}> My Profile </Text>),
    headerLeft: null,
    };
  }
  else if (routeName==='CalendarView') {
    return {
    headerLeft: (<View></View>),
    headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20}}> Calendar </Text>),
    headerRight: (<Icon
      containerStyle={{padding:15}}
      type='font-awesome'
      name="plus"
      size={20}
      onPress={() => navigation.navigate('CreateEvent')}
    />)
    };
  }
  else if (routeName==='GWLN') {
    return {
    headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20}}> Donate! </Text>),
    headerLeft: null,
    };
  }
  return {
    title,
  };
};

const NavigationFlow = createStackNavigator({
  Launch: {
    screen: LaunchPage,
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
    screen: CheckInScreen,
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

})

export default NavigationFlow;

/*export const RootStack = createStackNavigator(
  {
  OrganizerSignin: OrganizerSigninScreen,
  Home: HomeScreen,
  Profile: ProfileScreen,
  CalendarView: CalendarScreen,
  GWLN: GWLNScreen,
  AddPost: MessageBoardScreen,
  },{
    initialRouteName: 'OrganizerSignin',
  }
);

export const GWLN = createStackNavigator({
  GWLN: {screen: GWLNScreen },
  DonateView: {screen: DonateWebView}
});



export const CalendarView = createStackNavigator({
  //Home: {screen: HomeScreen},
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

export const SignInStack = createStackNavigator({
  OrganizerSignin: {screen: OrganizerSigninScreen},
  Home: {screen: HomeScreen},
})

export default createBottomTabNavigator({
  Home: {screen: Home,},
  Profile: {screen: Profile},
  CalendarView: {screen: CalendarView},
  GWLN: {screen: GWLN,},
}, {
  initialRouteName: 'Home',
  activeTintColor: '#f0edf6',
  inactiveTintColor: '#3e2465',
})*/
