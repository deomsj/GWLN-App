import React from 'react';
import { StyleSheet, Text, View, Linking, ImageBackground, Image, ScrollView, ListView, Platform, Button, Alert } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { Card, Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

import Separator from './Separator'

import LaunchPage from './LaunchPage';
import contactData from './mock-database/crm.contacts.json';

var member = null
var found = false

class ProfileScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      memInfo: contactData,
    }
  }

  test = (crm) => {
    //need to catch error and no_contact stuff
    let memData = this.state.memInfo
    var filteredMemData = memData.contacts.filter( e => {
      return e.contact_id == crm;
    });
    //console.log('after filtered:', filteredMemData)
    this.setState({
      memInfo: filteredMemData,
    })
    //console.log(this.state.memInfo.first_name)
  }

    componentWillMount() {
      this.test(433)
    }

  render() {
    // const data = this.state.memInfo.contacts
    // console.log(data[0].contact_id)

    var buttonColors = ['rgba(255, 255, 255, 1)'];
		if (Platform.OS === 'android') {
			buttonColors = ['rgba(0, 42, 85, 1)'];
		};

    return (
      <View style={styles.mainContainer}>
        <View style={styles.InfoContainer}>
          <Text style={styles.InfoText}>{this.state.memInfo[0].title} {this.state.memInfo[0].first_name} {this.state.memInfo[0].last_name} </Text>
          <Text style={styles.InfoText}> {this.state.memInfo[0].phone_business_main} </Text>
          <Text style={styles.InfoText}> {this.state.memInfo[0].email1} </Text>
          <Text style={styles.InfoText}> {this.state.memInfo[0].physical_address_city}, {this.state.memInfo[0].physical_address_state}, {this.state.memInfo[0].physical_address_country} </Text>
          <Text style={styles.InfoText}> {this.state.memInfo[0].web_url} </Text>
        </View>
        <View style={styles.optionsContainer}>
        <View style={styles.buttonContainer}>
        <View style={styles.buttons}>
          <Button
            color= {buttonColors}
            title="My Upcoming Events"
            onPress={() => this.props.navigation.navigate('MyUpcomingEvents')}
            />
            </View>
            </View>
            <View style={styles.buttonContainer}>
            <View style={styles.buttons}>
              <Button
            color= {buttonColors}
            title="My Past Events"
            onPress={() => this.props.navigation.navigate('MyPastEvents')}
          />
          </View>
          </View>
          <View style={styles.signoutContainer}>
          <View style={styles.buttons}>
           <Button
            color= {buttonColors}
            title="Sign Out"
            onPress={() => Alert.alert(
              'Sign Out',
              'Are you sure you want to sign out of your account?',
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
export default ProfileScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  InfoContainer: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,42,85,0.4)',
  },
  InfoText: {
    fontSize: 16,
    paddingTop: 10,
    paddingLeft: 5,
    color: 'black',
  },
  optionsContainer: {
    flex: 3,
    backgroundColor: 'white',
    marginTop: '15%',
    flexDirection: 'column',
    alignSelf: 'center',
    // alignItems: 'center',
  },
  buttonContainer: {
    padding: 10,
    backgroundColor: 'white',
  },
  buttons: {
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
  signoutContainer: {
    // padding:20,
    paddingTop: 50,
  },
})
