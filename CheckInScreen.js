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

const Form = t.form.Form;

const Attendee = t.struct({
  name: t.String, //First name
  surname: t.String, //Last name
  email: t.String, //email address for member enrollment

});

const Options = {
	fields: {
    name:{
      label: 'First Name',
      error: 'Please enter attendee first name',
    },
		surname: {
			label: 'Last Name',
			error: 'Please enter attendee last name',
		},
	}
};

class CheckInScreen extends Component {
  constructor(props) {
        super(props);
        this.state = {value: null}
        this.state = {
          value: null,
          selectedIndex1: null,
          selectedIndex2: null,
          val1: null,
          val2: null,
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
    })
  }

  DiscardForm=( value ) => {
		Alert.alert(
			'Discard Feedback',
			'Are you sure you want to clear this form?',
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
  //
  // onClick(value) {
  //   this.setState({selectedIndex: null})
  // }

  //================radioadd=====================
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


  onCheck () {
    this.initialState;
  }
  onSubmit = () => {
    const value = this._form.getValue();
		console.log('value', value);
    console.log(value.name);
    //console.log('Is member?', this.state.val1);
    //console.log('Interested?', this.state.val2);
    //const value = this._form.getValue();
    //console.log('value', value);
    if(value) {
    	const url = 'https://cuwomen.org/functions/app.gwln.php'
    	fetch(url, {
    		method: "POST",
    		headers: {
    			'X-Token': 'hub46bubg75839jfjsbs8532hs09hurdfy47sbub',
    		},
    		body: JSON.stringify({
    			"code": "eventCheckin",
    			"arguments": {
    				"timeline_event_id": 143,
    				"member_id": 90211,
            "first_name": "aklfj",
            "last_name": "flksa",
            "email": "lkfds",
            //"checkin_id": 1,
            "guests": 4,
            "like_to_be": false,
            //"timeline_event_id": 143,
            //"email": "brooke.thomas@elevationscu.com",
    			}
    		}),
    	})

    	.then(res => res.json())
    	.then(res => {
    		//console.log(res)
    		if (res) {
    			//this.props.navigation.navigate('Home')
    			//global.currUser = res
          //this.initialState();
    			//console.log(global.currUser);
          console.log(res);
    		}
    		else {
    			console.log('wrong info');
    			//this.DiscardForm();
    		}
    	})
    	.catch(error => {
    		console.log(error);
    	})
    console.log('fetch');


  }
  handleSubmit = () => {
    Alert.alert(
      'Check In',
      'The atendee has been checked in',
      [
        {text: 'Dismiss', onPress: this.onSubmit},
      ],
    )
  }
}
  //================radioadd=====================


    render() {
      var buttonColors = ['rgba(255, 255, 255, 1)'];
      if (Platform.OS === 'android') {
        buttonColors = ['rgba(0, 42, 85, 1)'];
      };
        return (
          <View style={styles.mainContainer}>
          <ScrollView>
            <View style={styles.container}>
              <Form
              ref={c=>this._form = c}
              type={Attendee}
              options={Options}
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              />
              <View>
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
                </View>
                <View style={styles.radiocontainer}>
        				<Text style={styles.questionText}>If not, would you like to be?</Text>
        				<RadioGroup
        					size={18}
        					thickness={2}
        					style={styles.rg}
                  color={'#200a55'}
                  selectedIndex={this.state.selectedIndex2}
        					onSelect = {(index, value) => this.onSelect_2(index, value)}
        				>
        					<RadioButton value={'like_yes'} style={styles.rb} >
        						<Text>Yes</Text>
        					</RadioButton>
        					<RadioButton value={'like_no'} style={styles.rb} >
        						<Text>No</Text>
        					</RadioButton>
        					<RadioButton value={'na'} style={styles.rb} >
        						<Text>N/A</Text>
        					</RadioButton>
        				</RadioGroup>
                </View>
              </View>
              <View style={styles.buttonContainer}>
              <Button
                title="Check In!"
                onPress={this.onSubmit}
                color={buttonColors}
              />
              </View>
              </View>
            </ScrollView>
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

export default CheckInScreen;

//================NOTES================
//This might not be a problem but the radio buttons are being printed at the
//console when checked, not when the form is submitted -- FIXED!!
