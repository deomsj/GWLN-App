import { createStackNavigator } from 'react-navigation';

import SignIn from './SignIn';
import MemberContactPage from './MemberContactPage';
import MemberList from './MemberList';
import MyUpcomingEvents from './MyUpcomingEvents';
import EventDetails from './EventDetails';
import NewBlogPost from './NewBlogPost';
import BlogPostList from './BlogPostList';
import BlogPost from './BlogPost';
import Guest from './Guest';
import GuestRSVP from './Guest/RSVP';
import GuestCalendar from './Guest/Calendar';
import GuestBlog from './Guest/Blog';
import GuestCalendarDetail from './Guest/CalendarDetail';
import Member from './Member';
import MemberRSVP from './Member/RSVP';
import Admin from './Admin';
import FeedbackForm from './Admin/FeedbackForm';
import CreateEvent from './Admin/CreateEvent';
import CheckIn from './Admin/CheckIn';
import MyEventDetail from './Admin/MyEventDetail';
import AttendeeList from './Admin/AttendeeList';
import Profile from './Profile';
import './Global.js';
//import contactData from './mock-database/crm.contacts.json';

const NavigationFlow = createStackNavigator(
  {
    SignIn,
    //Guest
    Guest,
    GuestRSVP,
    GuestCalendar, //FIXME
    GuestCalendarDetail,
    GuestBlog,
    //Member
    Member,
    MemberContactPage,
    MemberRSVP,
    EventDetails, //change to MemberEventDetail
    //Admin
    Admin,
    AttendeeList,
    CheckIn,
    CreateEvent,
    FeedbackForm,
    MyUpcomingEvents,
    MyEventDetail, //change to AdminEventDetail
    //Member and Admin
    MemberList,
    NewBlogPost,
    Profile, //Add me

    //All?
    BlogPostList,
    BlogPost

    //Missing?
    //CalendarView for admin
    //CalendarView for member
  },
  {
    initialRouteName: 'BlogPostList'
  }
);

export default NavigationFlow;
