import React from 'react';
import { StyleSheet, Text, View, Linking, ImageBackground, Image, ScrollView, ListView, Platform, Button, Alert } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { Card, Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

import Separator from './Separator'

import LaunchPage from './LaunchPage';


class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.profileContainer}>
        </View>
        <View style={styles.optionsContainer}>
          <Button
            color= '#002A55'
            title="My Upcoming Events"
            onPress={() => this.props.navigation.navigate('MyUpcomingEvents')}
            />
        </View>
        <View style={styles.optionsContainer}>
          <Button
            color= '#002A55'
            title="My Past Events"
            onPress={() => this.props.navigation.navigate('MyPastEvents')}
          />
        </View>
        <View style={styles.optionsContainer}>
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
    opacity: .3,
    padding:75,
  },
  optionsContainer: {
    backgroundColor: 'white',
    padding:15,
    flexDirection: 'column',
    alignItems: 'center',
  }
})
