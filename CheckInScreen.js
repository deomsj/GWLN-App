/*
MAKE SURE YOU CAN ONLY CHECK ONE BOX PER QUESTION
*/

import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    Alert,
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
        this.state = {
            memberOptions: [{"name":"member", "tag": "Yes", "checked": false}, {"name": "member", "tag": "No", "checked": false}, {"name":"enroll", "tag": "Yes", "checked": false}, {"name":"enroll", "tag": "No", "checked": false}]
          }
        }
  initialState(memberOptions) {
    this.setState({value: null});
     this.setState({memberOptions: [{"name":"member", "tag": "Yes", "checked": false}, {"name": "member", "tag": "No", "checked": false}, {"name":"enroll", "tag": "Yes", "checked": false}, {"name":"enroll", "tag": "No", "checked": false}] });

  }
  onChange(value) {
    this.setState({value});
  }

  onClick(memberOptions) {
        memberOptions.checked = !memberOptions.checked;
        console.log(memberOptions)
        // if (memberOptions[0].checked || memberOptions[1].checked == true){
        //
        // }
        return memberOptions
    }


  onPress= (memberOptions) => {
    const value = this._form.getValue();
    if (value) {
      console.log(value); //save value in log before clearing
      this.initialState(memberOptions);
    }

  }
  discardButton= (memberOptions) =>{
    this.initialState(memberOptions);
  }
  //================radioadd=====================
  onSelect(index, value){
    // this.setState({
    // 	text: 'selected index: ${index} , value: ${value}'
    // })
    console.log(value)
  }
  //================radioadd=====================
    renderView() {
        if (!this.state.memberOptions || this.state.memberOptions.length === 0)return;
        var views= [];
        views.push(
          <View key={0}>
            <Text style={styles.questionText}>
              Are you already a member?
            </Text>
            <View style={styles.item}>
              {this.renderCheckBox(this.state.memberOptions[0])}
              {this.renderCheckBox(this.state.memberOptions[1])}
            </View>
            <View style={styles.line}/>
          </View>
            )
        views.push(
          <View key={1}>
              <Text style={styles.questionText}>
                Would you like to be?
              </Text>
              <View style={styles.item}>
                {this.renderCheckBox(this.state.memberOptions[2])}
                {this.renderCheckBox(this.state.memberOptions[3])}
              </View>
          </View>
        )
          return views;
    }

    renderCheckBox(memberOptions) {
        var yesNo = memberOptions.tag;
        var clickCount = 0;
        return (
            <CheckBox
                style={{flex: 1, padding: 10}}
                onClick={()=>this.onClick(memberOptions)}
                isChecked={memberOptions.checked}
                rightText={yesNo}
            />);
    }

    render() {
        return (
          <ScrollView>
          <Header
            backgroundColor="white"
            centerComponent={{text: 'Event Check In', style:{fontSize:18}}}
            rightComponent={ <Icon
              type='font-awesome'
              name= "trash"
              onPress={() => Alert.alert(
                'Discard',
                'Are you sure you want to clear this form?',
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'Yes', onPress: this.discardButton},
                ],
              )}/>}
          />
            <View style={styles.container}>
              <Form
              ref={c=>this._form = c}
              type={Attendee}
              options={Options}
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              />
              <View style={styles.radiocontainer}>
        				<Text> Are you a member of GWLN? </Text>
        				<RadioGroup
        					size={18}
        					thickness={2}
        					style={styles.rg}
        					onSelect = {(index, value) => this.onSelect(index, value)}
        				>
        					<RadioButton value={'item1'} style={styles.rb} >
        						<Text>This is item 1</Text>
        					</RadioButton>
        					<RadioButton value={'item2'} style={styles.rb} >
        						<Text>This is item 2</Text>
        					</RadioButton>

        				</RadioGroup>
        				<Text>If not, would you like to be?</Text>
        				<RadioGroup
        					size={18}
        					thickness={2}
        					style={styles.rg}
        					onSelect = {(index, value) => this.onSelect(index, value)}
        				>
        					<RadioButton value={'yes'} style={styles.rb} >
        						<Text>Yes</Text>
        					</RadioButton>
        					<RadioButton value={'no'} style={styles.rb} >
        						<Text>No</Text>
        					</RadioButton>
        					<RadioButton value={'na'} style={styles.rb} >
        						<Text>N/A</Text>
        					</RadioButton>

        				</RadioGroup>
              </View>
              <Button
                title="Check In!"
                onPress={this.onPress}
                color= '#002a55'
              />
              </View>
              <View style={styles.trash}>
              </View>

            </ScrollView>
              // <Icon
              //   type='font-awesome'
              //   name="trash"
              //   onPress={() => Alert.alert(
    					// 		'Discard',
    					// 		'Are you sure you want to clear this form?',
    					// 		[
    					// 			{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    					// 			{text: 'Yes', onPress: this.discardButton},
    					// 		],
    					// 	)}
              // />

        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f2f2',
        // marginTop:30,
        padding: 40,
        justifyContent: 'center',
    },
    item: {
        flexDirection: 'row',
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
  		marginTop: 40,
      marginBottom: 40,
      backgroundColor: '#f3f2f2',
  	},
  	rb: {
  		alignItems: 'center',
  		flexDirection: 'row',
  	},
  	rg: {
  		flexDirection: 'row',
  	}
    //================radioadd=====================
})

export default CheckInScreen;
