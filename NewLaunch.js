import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Image, Linking, Platform, Alert} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import GWLNlogo from './img/gwln_logo.jpg';
import WorldCouncilLogo from './img/WorldCouncil_logo.png';
import moment from 'moment';
import ListItem from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import MemberHomeScreen from './MemberHome';
import memberData from './mock-database/gwln.members.json';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const SigninForm = t.struct({
	email: t.String, //change to EmailField for email format validation
	password: t.String,
});

var options = {
	fields: {
		email: {
			label: 'Email',
			error: 'Please enter a valid email'
		},
		password: {
			label: 'Password',
			error: 'Please enter a valid password',
			password: true,
			secureTextEntry: true,
		},
	}
};

class Signin extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			data: memberData,
		}
	}

	resetForm = (value) => {
		this.setState({value:null});
	}

  static navigationOptions = {
		header: null,
	}


//STILL NEED TO ADD DIFFERENCIATION FLAG TO SIGN IN BUTTON
  // handleSubmit = () => {
  //   const value = this._form.getValue();
  //   console.log('value', value);
  //   if(value) {
  //     const url = 'https://cuwomen.org/functions/app.gwln.php'
  //     fetch(url, {
  //       method: "POST",
  //       headers: {
  //         'X-Token': 'hub46bubg75839jfjsbs8532hs09hurdfy47sbub',
  //       },
  //       body: JSON.stringify({
  //         "code": "login",
  //         "arguments": {
  //           "username": value.email,
  //           "password": value.password,
  //         }
  //       }),
  //     })

  //     .then(res => res.json())
  //     .then(res => {
  //       //console.log(res)
  //       if (res != false) {
  //         this.props.navigation.navigate('Home')
  //         global.currUser = res
  //         this.resetForm()
  //         console.log(global.currUser);
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  //   console.log('fetch');
  //   }
  // }

   _guestLogIn = () => {
     global.currUser = null;
     this.props.navigation.navigate('GuestHomeScreen')
   }

  // componentWillMount(){
  //   global.currUser = null;

	DiscardForm=(value ) => {
		Alert.alert(
			'Invalid Username or Password',
			'Please try again or forgot password',
			[
				{text: 'Dismiss', onPress: () => this.resetForm()},
			],
		)
	}







  handleSubmit = () => {
//STILL NEED TO ADD DIFFERENCIATION FLAG TO SIGN IN BUTTON
// const value = this._form.getValue();
// console.log('value', value);
// if(value) {
// 	const url = 'https://cuwomen.org/functions/app.gwln.php'
// 	fetch(url, {
// 		method: "POST",
// 		headers: {
// 			'X-Token': 'hub46bubg75839jfjsbs8532hs09hurdfy47sbub',
// 		},
// 		body: JSON.stringify({
// 			"code": "login",
// 			"arguments": {
// 				"username": value.email,
// 				"password": value.password,
// 			}
// 		}),
// 	})

// 	.then(res => res.json())
// 	.then(res => {
// 		//console.log(res)
// 		if (res != false) {
// 			this.props.navigation.navigate('Home')
// 			global.currUser = res
//       this.resetForm
// 			console.log(global.currUser);
// 		}
// 		else {
// 			console.log('wrong creds');
// 			this.DiscardForm();
// 		}
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	})
// console.log('fetch');
// }
  this.props.navigation.navigate('Home')

  }

  render() {
    var buttonColors = ['rgba(255, 255, 255, 1)'];
    if (Platform.OS === 'android') {
      buttonColors = ['rgba(0, 42, 85, 1)'];
    };
    var guestColor = ['rgba(0, 42, 85, 1)'];
    if (Platform.OS === 'android') {
      guestColors = ['rgba(255, 255, 255, 1)'];
    };
    return(
      <View style={styles.mainContainer}>
        <Image source={GWLNlogo} style={styles.GWLNlogo}/>
        <View style={styles.formContainer}>
          <Form ref={c=>this._form = c}
          type={SigninForm}
          options={options}/>
        </View>
        <View style={styles.buttonContainer}>
        <View style={styles.buttons}>
          <Button
          title="Sign In"
          onPress={this.handleSubmit}
          color= {buttonColors}
          />
          </View>
          <Text
            style={styles.memberText}
            onPress={() => {Linking.openURL('https://www.cuwomen.org/gwln_connect/gwln_forgot_password')}}>
            Forgot Password?
          </Text>
          </View>
          <View style={styles.separatorContainer}/>
                <Text style={styles.separatorText}>OR</Text>
          <View style={styles.guestContainer}>
          <Text
            style={styles.guestButton}
            onPress={this._guestLogIn}>
            Continue as Guest
          </Text>
          </View>
          <Image source={WorldCouncilLogo} style={styles.WorldCouncil}/>
      </View>
    );
  }
};

export default Signin;

const styles = StyleSheet.create({
  mainContainer: {
		backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
	},
  formContainer: {
    // flex: 1,
    paddingHorizontal:50,
    backgroundColor: 'white',
    paddingVertical: 10,
    // paddingHorizontal: 50,
    // padding: 10,
  },
  buttonContainer: {
    // alignItems: 'center',
    alignSelf: 'center',
    // justifyContent: 'center',
    // position: 'absolute',
    // bottom: '35%',
  },
	buttons: {
    paddingVertical: 5,
    paddingHorizontal: 50,
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
		borderRadius: 10,
	},
	memberText: {
		color: 'blue',
		fontSize: 17,
		padding: 15,
    paddingBottom: 30,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	GWLNlogo: {
    resizeMode: 'contain',
    width: undefined,
    height: undefined,
    paddingBottom: 90,
    // marginTop: '10%',
	},
	WorldCouncil: {
    resizeMode: 'contain',
    width: undefined,
    height: undefined,
    paddingTop: 50,
    // marginTop: '10%',
    // marginBottom: '2%',
    marginLeft: '50%',
    marginTop: '10%',
    marginBottom: '5%',
	},
  guestContainer: {
    // position: 'absolute',
    alignSelf: 'center',
    padding: 10,
    // bottom: '15%',
  },
  guestButton: {
    paddingHorizontal: 10,
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#002A55',
    color: '#002A55',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 17,
    fontWeight: '400',
  },
  separatorText: {
    fontSize: 20,
    fontWeight: '300',
    color: 'gray',
    backgroundColor: 'white',
    alignSelf: 'center',
    // textDecorationLine: 'line-through',
    paddingHorizontal:10,
    bottom: '2%',
  },
  separatorContainer: {
    width:'90%',
    alignSelf: 'center',
    backgroundColor: 'lightgray',
    height: StyleSheet.hairlineWidth,
    padding: 1,
  },
});
