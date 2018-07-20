import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, TextInput, ScrollView, Alert } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import t from 'tcomb-form-native';
import { Icon } from 'react-native-elements';
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
			label: 'Details',
			error: 'Please enter your post',
			multiline: true,
			numberoflines: 2,
			config: {
				size: 'lg',
			},
			stylesheet: stylesheet

		},
	}
};

class AddPostScreen extends React.Component {

resetForm=()=>{
	this.setState({value:null});
}

DiscardForm=()=>{
	Alert.alert(
		'Discard Feedback',
		'Are you sure you want to clear this form?',
		[
			{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
			{text: 'Yes', onPress: ()=> this.resetForm()}
		],
	)
}

static navigationOptions = ({navigation})=> {
	return {
		headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20, color: '#002A55'}}> Create Post </Text>),
		headerRight: ( <Icon
			containerStyle={{marginRight:15, marginTop:15}}
			iconStyle={styles.headerIcon}
			type='font-awesome'
			name= "trash"
			onPress={navigation.getParam('discard')}/>
		),
	};
};

componentDidMount=(value)=> {
	this.props.navigation.setParams({ discard: this.DiscardForm });
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
			<View style={styles.mainContainer}>
			<ScrollView>
			<View style={styles.container}>

				<Form ref={c=>this._form = c}
				type={Content}
				options = {Options}/>
				<View style={styles.container}>
					<Button
					title="Submit"
					color="#002a55"
					onPress={() => Alert.alert(
						'Submit Post',
						'Are you ready to post to the message board?',
						[
							{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
							{text: 'Yes', onPress: this.handleSubmit},
						],
					)}
					/>
				</View>

			</View>
			</ScrollView>
			</View>
		);
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
		justifyContent: 'center',
		padding: 30,
	},
	title: {
		justifyContent: 'center',
		marginTop: 10,
		alignItems: 'center',
		fontSize: 24,
	},
	DiscardFeedback: {
		fontSize: 10,
	},
	headerIcon: {
		flex:1,
		color: '#002A55',
	}
});

export default AddPostScreen;
