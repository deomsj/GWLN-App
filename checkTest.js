import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    Alert,
    Platform,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import { Icon, Header } from 'react-native-elements';
import t from 'tcomb-form-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import './Global.js';
const Form = t.form.Form;

let form;
let button;

/*====whats left=====
- need to get timeline_event_id: right now just using 143
- make so that checkin button doesn't appear at checkin start
- styling
=====================*/

const LikeRadio = t.enums.of( 'Yes No');

const AttendeeGuest = t.struct({
  name: t.String, //First name
  surname: t.String, //Last name
  email: t.String, //email address for member enrollment
  like_radio: LikeRadio,

});

const OptionsGuest = {
	fields: {
    name:{
      label: 'First Name',
      error: 'Please enter attendee first name',
    },
		surname: {
			label: 'Last Name',
			error: 'Please enter attendee last name',
		},
    like_radio: {
      label: 'Would you like to hear from GWLN?',
      options: [
        {value: "t", text: 'Yes'},
        {value: "f", text: 'No'},
      ]
    }
	}
};

const AttendeeMember = t.struct({
  //name: t.String, //First name
  //surname: t.String, //Last name
  email: t.String, //email address for member enrollment

});

const OptionsMember = {
	fields: {
    // name:{
    //   label: 'First Name',
    //   error: 'Please enter attendee first name',
    // },
		// surname: {
		// 	label: 'Last Name',
		// 	error: 'Please enter attendee last name',
		// },
    email:{
      label: 'Email',
    },
	}
};

class checkinTest extends Component {

  constructor(props) {
    super(props);
    this.state = {value: null}
    this.state = {
      value: null,
      selectedIndex1: null,
      selectedIndex2: null,
      val1: null,
      val2: null,
      meminfo: null,
    }
  }

  initialState = () => {
    // const value = this._form.getValue();
    // console.log('value', value);
    this.setState({value: null})
    this.setState({
      value: null,
      selectedIndex1: -1,
      selectedIndex2: -1,
      val1: null,
      val2: null,
      meminfo: null,
    })
  }
  DiscardForm=( value ) => {
    Alert.alert(
      'Discard Check-in',
      'Are you sure you want to clear attendee information?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: ()=> this.initialState()}
      ],
    )
  }

  static navigationOptions = ({navigation})=> {
    return {
      headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20, color: '#002A55'}}> Event Check In </Text>),
      headerRight: ( <Icon
        containerStyle={{marginRight:15, marginTop:15}}
        iconStyle={styles.headerIcon}
        type='font-awesome'
        // color= '#002A55'
        name= "trash"
        onPress={navigation.getParam('discard')}/>
      ),
    };
  };

  componentDidMount=(value)=> {
    this.props.navigation.setParams({ discard: this.DiscardForm });
  }

  onChange(value) {
    this.setState({value:value});
  }

  onSelect_1(index, value){
    //console.log(value)
    //console.log(index)

    this.setState({
      selectedIndex1: index,
      val1: value,
    })
  }

  onSelect_2(index, value){
    //console.log(value)
    //console.log(index)

    this.setState({
      selectedIndex2: index,
      val2: value,
    })
  }

  determineForm = (selected) => {

    const guestform =  <Form
      ref={c=>this._form = c}
      type={AttendeeGuest}
      options={OptionsGuest}
      value={this.state.value}
      onChange={this.onChange.bind(this)}
      />

    const memform =  <Form
      ref={c=>this._form = c}
      type={AttendeeMember}
      options={OptionsMember}
      value={this.state.value}
      onChange={this.onChange.bind(this)}
      />

    const guestbutton = <Button
      title="Check In!"
      onPress={this.onSubmitGuest}
      color='#002A55'
    />
    //change to onSumbitMember
    const membutton = <Button
      title="Check In!"
      onPress={this.getMemberInfo}
      color='#002A55'
    />

    console.log(selected);
    if (selected == 0){
      form = memform;
      button = membutton;

    }
    else if (selected == 1) {
      form = guestform;
      button = guestbutton;
    }
    else{
      button = null;
      return <Text>Photo Disclaimer:
      As representatives of World Council, Sister Society Leaders
      may take photos at this event and reproduce them in World Council
      educational, news or promotional materials, whether in print,
      electronic, or other media, including the World Council or Global Women
      website. By participation in the Sister Society meeting, you grant World
      Council the right to use your photograph, name, and biography for such
      purposes. All pictures become the property of World council and may be
      displayed distributed or used by World Council for any purpose</Text>

    }
    //const value = this._form.getValue();
    //console.log('in determine form', value);
    return form;
    return button;
  }

  onSubmitGuest = () => {
    //const value = this._form.getValue();
    //const value = this.refs.form.getValue();
    //const value = this._form.getValue();
    console.log('on submit value', this.state.value);
    //console.log(value.name);
    //console.log('Is member?', this.state.val1);
    //console.log('Interested?', this.state.val2);
    //const value = this._form.getValue();
    //console.log('value', value);
    if(this.state.value) {
      const url = 'https://cuwomen.org/functions/app.gwln.php'
      fetch(url, {
        method: "POST",
        headers: {
          'X-Token': 'hub46bubg75839jfjsbs8532hs09hurdfy47sbub',
        },
        body: JSON.stringify({
          "code": "eventCheckin",
          "arguments": {
            "timeline_event_id": this.props.navigation.state.params.CheckInEventID,
            //Not Needed "member_id": global.currUser.contact_id,
            "first_name": this.state.value.name,
            "last_name": this.state.value.surname,
            "email": this.state.value.email,
            "guests": 1,
            "like_to_be": this.state.value.like_radio,
          }
        }),
      })

      .then(res => res.json())
      .then(res => {
        //console.log(res)
        if (res) {
          console.log(res);
          Alert.alert(
						'Thank you!',
						'Attendee has been checked in',
						[
							{text: 'Dismiss', onPress: () => this.initialState()},
						],
					);
        }
        else {
          console.log('wrong info');
          // Alert.alert(
					// 	'Error Occured',
					// 	'Please try again',
					// 	[
					// 		{text: 'Dismiss', onPress: () => this.initialState()},
					// 	],
					// );
        }
      })
      .catch(error => {
        console.log(error);
        // Alert.alert(
        //   'Error Occured',
        //   'Please try again',
        //   [
        //     {text: 'Dismiss', onPress: () => this.initialState()},
        //   ],
        // );
      })
    console.log('fetch');


  }
}

//really messy. API call inside API call
getMemberInfo = () => {
  console.log('on submit value', this.state.value);
  if(this.state.value) {
    const url = 'https://cuwomen.org/functions/app.gwln.php'
    fetch(url, {
      method: "POST",
      headers: {
        'X-Token': 'hub46bubg75839jfjsbs8532hs09hurdfy47sbub',
      },
      body: JSON.stringify({
        "code": "getMemberInformationByUsername",
        "arguments": {
          "timeline_event_id": this.props.navigation.state.params.CheckInEventID,
          "username": this.state.value.email,
        }
      }),
    })

    .then(res => res.json())
    .then(res => {
      //console.log(res)
      if (res) {
        //console.log(res);
        this.setState({
          meminfo: res,
        })
        //console.log('in getmeminfo function', this.state.meminfo)
        //this.onSumbitMember();
        //Nested API call
        if(this.state.value) {
          console.log('in sumit', this.state.meminfo)
          const url = 'https://cuwomen.org/functions/app.gwln.php'
          fetch(url, {
            method: "POST",
            headers: {
              'X-Token': 'hub46bubg75839jfjsbs8532hs09hurdfy47sbub',
            },
            body: JSON.stringify({
              "code": "eventCheckin",
              "arguments": {
                "timeline_event_id": this.props.navigation.state.params.CheckInEventID,
                "member_id": this.state.meminfo.member_id,
                "first_name": this.state.meminfo.first_name,
                "last_name": this.state.meminfo.last_name,
                "email": this.state.meminfo.email1,
                "guests": 1,
                "like_to_be": false,
              }
            }),
          })

          .then(res => res.json())
          .then(res => {
            //console.log(res)
            if (res) {
              console.log(res);
              Alert.alert(
                'Thank you!',
                'Attendee has been checked in',
                [
                  {text: 'Dismiss', onPress: () => this.initialState()},
                ],
              );
            }
            else {
              console.log('wrong info');
            }
          })
          .catch(error => {
            console.log(error);
            Alert.alert(
              'Error',
              'Email does not exist',
              [
                {text: 'Dismiss', onPress: () => this.initialState()},
              ],
            );
          })
        console.log('fetch');


        }
      }
      else {
        console.log('wrong info');
      }
    })
    .catch(error => {
      console.log(error);
    })
  console.log('fetch');
  //console.log('memid in fetch', memid);

  }
}


  render() {
    //console.log( 'in render', this.state.meminfo)
    var buttonColors = ['rgba(255, 255, 255, 1)'];
    if (Platform.OS === 'android') {
      buttonColors = ['rgba(0, 42, 85, 1)'];
    };
    return(
      <View style={styles.mainContainer}>
        <View style={styles.radiocontainer}>
           <Text style={styles.questionText}>Are you a member of GWLN? </Text>
        <RadioGroup
          size={18}
          thickness={2}
          style={styles.rg}
          color={'#200a55'}
          selectedIndex={this.state.selectedIndex1}
          onSelect = {(index, value) => this.onSelect_1(index, value)}
        >
          <RadioButton value={'member_yes'} style={styles.rb} >
            <Text>Yes</Text>
          </RadioButton>
          <RadioButton value={'member_no'} style={styles.rb} >
            <Text>No</Text>
          </RadioButton>
        </RadioGroup>
          {this.determineForm(this.state.selectedIndex1)}
        </View>

        <View style={styles.buttonContainer}>
          {button}
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: 'white',
      flex:1,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 30,
        justifyContent: 'center',
    },
    buttonContainer: {
  		alignSelf: 'center',
  		// padding: 30,
  		paddingHorizontal: 30,
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
  	},
    item: {
        flexDirection: 'row',
        padding:10,
    },
    line: {
        flex: 1,
        height: 0.3,
        backgroundColor: 'darkgray',
    },
    questionText: {
      fontSize: 18,
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center'
    },
    //================radioadd=====================
    radiocontainer: {
  		marginTop: 10,
      marginBottom: 20,
      backgroundColor: 'white',
  	},
  	rb: {
  		alignItems: 'center',
  		flexDirection: 'row',
  	},
  	rg: {
  		flexDirection: 'row',
  	},
    //================radioadd=====================
    headerIcon: {
  		// flex:1,
  		color: '#002A55',
  	},
})

export default checkinTest;
