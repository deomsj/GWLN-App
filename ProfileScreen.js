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
    var buttonColors = ['rgba(255, 255, 255, 1)'];
		if (Platform.OS === 'android') {
			buttonColors = ['rgba(0, 42, 85, 1)'];
		};
    return (
      <View style={styles.mainContainer}>
        <View style={styles.InfoContainer}>
          <Text style={styles.InfoText}> name </Text>
          <Text style={styles.InfoText}> phone number </Text>
          <Text style={styles.InfoText}> email </Text>
          <Text style={styles.InfoText}> other information </Text>
        </View>
        <View style={styles.optionsContainer}>
        <View style={styles.buttonContainer}>
        <View style={styles.buttons}>
          <Button
            color= '#002A55'
            title="My Upcoming Events"
            onPress={() => this.props.navigation.navigate('MyUpcomingEvents')}
            />
            </View>
            </View>
            <View style={styles.buttonContainer}>
            <View style={styles.buttons}>
              <Button
            color= '#002A55'
            title="My Past Events"
            onPress={() => this.props.navigation.navigate('MyPastEvents')}
          />
          </View>
          </View>
          <View style={styles.signoutContainer}>
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
    fontSize: 18,
    paddingTop: 10,
    paddingLeft: 5,
    color: 'black',
  },
  optionsContainer: {
    flex: 3,
    backgroundColor: 'white',
    marginTop: '20%',
    flexDirection: 'column',
    alignSelf: 'center',
    // alignItems: 'center',
  },
  buttonContainer: {
    padding: 20,
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
    padding:20,
    paddingTop: 50,
  },
})
