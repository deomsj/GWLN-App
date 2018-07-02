import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, TextInput, ScrollView } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import CheckBox from 'react-native-check-box';
import t from 'tcomb-form-native';

const Form = t.form.Form;

//Check In Questions
const Attendee = t.struct({
  name: t.String,
  surname: t.String,
  email: t.String,

});
class CheckInScreen extends React.Component {
	handleSubmit= () => {
	const value = this._form.getValue();
}

  constructor(props) {
    super(props);
    this.state = {
      checkOptions: [{"name": "Yes"}, {"name": "No"}, {"name": "Yes"}, {"name": "No"}]
    }
  }

//When checkbox clicked, check it. When clicked again, uncheck it.
  onClick(data) {
    data.checked = !data.checked;
  }

//Handles options associated with checkbox
  renderView() {
    if (!this.state.checkOptions || this.state.checkOptions.length === 0)return;
    var len = 4;
    var views = [];
    for (var i = 0, l = len - 2; i < l; i += 2) {
      views.push(
        <View key={i}>
        <Text style={styles.questionText}>
          Are you already a member?
        </Text>
        <View style={styles.item}>
          <Text> Yes </Text>
          {this.renderCheckBox(this.state.checkOptions[i])}
          <Text> No </Text>
          {this.renderCheckBox(this.state.checkOptions[i + 1])}
        </View>
        <View style={styles.line}/>
        <Text style={styles.questionText}>
          Would you like to be?
        </Text>
        </View>
      )
    }
    views.push(
      <View key={len - 1}>
      <View style={styles.item}>
        <Text> Yes </Text>
        {len % 2 === 0 ? this.renderCheckBox(this.state.checkOptions[len - 2]) : null}
        <Text> No </Text>
        {this.renderCheckBox(this.state.checkOptions[len - 1])}
      </View>
      </View>
    )
    return views;
  }

  renderCheckBox(data) {
    var optionText = data.name;
    return (
      <CheckBox
        style={{flex: 1, padding: 10}}
        onClick={()=>this.onClick(data)}
        isChecked={data.checked}
        optionText={optionText}
        />);
      }

	render() {
		return(
			<View style={styles.container}>
				<Form type={Attendee}/>
        <ScrollView>
                  {this.renderView()}
              </ScrollView>
				<Button
					title="Check In!"
					onPress={this.handleSubmit}
					color= '#002a55'
					/>
				</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f3f2f2',
		marginTop: 30,
		padding: 40,
		justifyContent: 'center',
    },
    item: {
        flexDirection: 'row',

    },
    line: {
        flex: 1,
        padding: 10,
        height: 0.3,
        backgroundColor: '#f3f2f2',
    },
    questionText: {
      fontSize: 18,
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center'
    }
})

export default CheckInScreen;
