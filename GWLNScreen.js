import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Image, ImageBackground, Platform } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import DonateWebView from './DonateWebView';
import donateImage from './img/Donate.jpg';

class GWLNScreen extends React.Component {
  render() {
    const buttonColors = ['rgba(0, 42, 85, 1)'];
    if (Platform.OS === 'ios') buttonColors.push('rgba(255, 255, 255, 1)');

    return (
      <View>
          <Image source={donateImage} style={styles.image}>
          </Image>
        <Text style={styles.text}>GWLN envisions a world where ALL women realize gender equality: politically, socially, and economically. Women leaders are the key to ignite progress toward this goal. </Text>
      	<View style={styles.buttonContainer}>
                <Button
                // style={styles.button}
                // color= '#002A55'
                color={buttonColors}
                title="Donate!"
                onPress={() => this.props.navigation.navigate('DonateView')}
                />
        </View>
     	 </View>
    );
  }
}

const styles= StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // bottom: '0%',
  },
  imageContainer: {
    position: 'absolute',
    top: '10%',
    resizeMode: 'cover',
  },
  buttonContainer: {
    backgroundColor: '#002A55',
    position: 'absolute',
    // alignItems: 'center',
    // justifyContent: 'center',
    right: '40%',
    bottom: '20%',
  },
  image: {
    alignSelf: 'center',
    // resizeMode: 'stretch',
    width: '100%',
    height: '100%',
    opacity: .4,
    // position: 'absolute',
    // bottom: '50%',
    padding:50,
  },
  text: {
    includeFontPadding: true,
    letterSpacing: 1,
    ...Platform.select({
      ios: {
        fontFamily: 'Helvetica',
        fontWeight: '700',
      },
      android: {
        fontFamily: 'sans-serif-medium',
        fontWeight: '400',
      },
    }),
    fontSize: 23,

    alignSelf: 'center',
    textAlign: 'center',
    alignItems: 'center',
    color: '#002A55',
    position: 'absolute',
    bottom: '50%',
    padding:10,
    margin:10,
  },
  androidButton : {
    color : '#002A55',
  },
  iosButton: {
    color: 'white',
  },
})

export default GWLNScreen;
