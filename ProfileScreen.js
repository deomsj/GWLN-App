import React from 'react';
import { StyleSheet, Text, View, Linking, ImageBackground, Image, ScrollView, ListView, Platform, Button, Alert } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { Card, Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

import Separator from './Separator'

import LaunchPage from './LaunchPage';
import contactData from './mock-database/crm.contacts.json';

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.profileContainer}>
        </View>
        <View style={styles.InfoContainer}>
          <Text style={styles.InfoText}> name </Text>
          <Text style={styles.InfoText}> phone number </Text>
          <Text style={styles.InfoText}> email </Text>
          <Text style={styles.InfoText}> other information </Text>
        </View>
        <View style={styles.optionsContainer}>
          <Button
            color= '#002A55'
            title="My Upcoming Events"
            onPress={() => this.props.navigation.navigate('MyUpcomingEvents')}
            />
              <Button
            color= '#002A55'
            title="My Past Events"
            onPress={() => this.props.navigation.navigate('MyPastEvents')}
          />
           <Button
            color='#002a55'
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
    );
  }
}
export default ProfileScreen;

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: '#002a55',

  },
  InfoContainer: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  InfoText: {
    fontSize: 18,
    paddingTop: 10,
    paddingLeft: 5,
  },
  optionsContainer: {
    flex: 3,
    backgroundColor: 'white',

    flexDirection: 'column',
    alignItems: 'center',
  }
})
