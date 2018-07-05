import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, TextInput, ScrollView } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import t from 'tcomb-form-native';

import moment from 'moment';
import DateTimePicker from 'react-native-modal-datetime-picker';


const Form = t.form.Form;

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
			
		},
	}
};

class AddPostScreen extends React.Component {

resetForm(){
		this.setState({value:null});
	}

	DiscardForm(){
		const value = this._form.getValue();
		if(!value){
			this.resetForm({})
		}

	}

	handleSubmit = () => {
		const value = this._form.getValue();
		console.log('value', value);
		if (value) {
			this.resetForm({})

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
					onPress={this.handleSubmit}
					/>
					<Button
						title="Discard Post"
						onPress={this.resetForm}
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