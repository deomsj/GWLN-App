import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Image, ImageBackground } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import DonateWebView from './DonateWebView';
import donateImage from './img/Donate.jpg';

class GWLNScreen extends React.Component {
  render() {

    return (
      <View>
          <Image source={donateImage} style={styles.image}>
          </Image>
        <Text style={styles.text}>GWLN envisions a world where ALL women realize gender equality: politically, socially, and economically. Women leaders are the key to ignite progress toward this goal. </Text>
      	<View style={styles.buttonContainer}>
                <Button
                // style={styles.button}
                color= '#002A55'
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
    backgroundColor: 'white',
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
    fontFamily: 'sans-serif-medium',
    fontSize: 23,
    // backgroundColor: 'white',
    fontWeight: '200',
    alignSelf: 'center',
    textAlign: 'center',
    alignItems: 'center',
    color: '#002A55',
    position: 'absolute',
    bottom: '50%',
    padding:10,
    margin:10,
  },
  // button: {
  //   // flex: 1,
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  //   borderWidth: 100,
  //   borderColor: 'white',
  // }
})

export default GWLNScreen;
