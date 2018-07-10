import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, TextInput, ScrollView, Alert } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import t from 'tcomb-form-native';

import moment from 'moment';
import DateTimePicker from 'react-native-modal-datetime-picker';
import MessageBoardScreen from './MessageBoardScreen';

const Form = t.form.Form;

//overriding tcomb textbox
var _ = require('lodash');
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

stylesheet.textbox.normal.height = 200;
stylesheet.textbox.normal.textAlignVertical = 'top';
const Content = t.struct({
	PostTitle: t.String,
	Post: t.String,

});

const Options = {
	fields: {
		PostTitle: {
			label: 'Post Title',
			error: 'Please enter a title for this post',
		},
		Post: {
			label: 'Post',
			error: 'Please enter your post',
			multiLine: true,
			config: {
				size: 'lg',
			},
			stylesheet: stylesheet

		},
	}
};

class AddPostScreen extends React.Component {

resetForm=(value)=> {
		this.setState({value:null});
	}

	DiscardForm=(value ) => {
		this.resetForm();
	}

	handleSubmit = () => {
		const value = this._form.getValue();
		console.log('value', value);
		if (value) {
			this.resetForm({})
			this.props.navigation.navigate('MessageBoard')
		}

	}

	render() {
		return(
			<ScrollView>
			<View style={styles.container}>

				<Form ref={c=>this._form = c}
				type={Content}
				options = {Options}/>
				<View style={styles.container}>
					<Button
					title="Post"
					onPress={() => Alert.alert(
						'Submit Post',
						'Are you ready to post to the message board?',
						[
							{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
							{text: 'Yes', onPress: this.handleSubmit},
						],
					)}
					/>
					<Button
						title="Discard Post"
						onPress={ () => Alert.alert(
							'Discard Post',
							'Are you sure you want to delete this post?',
							[
								{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
								{text: 'Yes', onPress: this.resetForm},
							],
						)}
					/>
				</View>

			</View>
			</ScrollView>
		);
	}

}
const styles = StyleSheet.create({
	container: {

		justifyContent: 'center',
		marginTop: 50,
		padding: 20,

	},
	title: {

		justifyContent: 'center',
		marginTop: 10,
		alignItems: 'center',
		fontSize: 24,

	},
	DiscardFeedback: {
		fontSize: 10,
	}
});


export default AddPostScreen;
