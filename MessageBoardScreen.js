import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, Platform, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';
import { SearchBar, List, ListItem } from 'react-native-elements';

import moment from 'moment';

import PostDetailsScreen from './PostDetailsScreen';

class MessageBoardScreen extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			data: [
				{name: 'Watson', postID: 1, title: 'Watson eats fuzz', description: 'watson rips apart his toys and then eats the fuzz inside them and now he sounds weird when he barks because hes full of fuzz'},
				{name: 'Jefferson', postID: 2, title: 'tennis balls', description: 'tennnnnnniiiiiisssssssss balllllllssssssss'},
				{name: 'Coco', postID: 3, title: 'post number 3', description: 'hhshbfreibrebcgiejncibcgch'},
				{name: 'RJ', postID: 4, title: 'watson eats walls', description: 'watson ate the corner of the wall ouside my bedroom so now there is a big ole hole there'},
			],
		};
	}

	renderSeparator = () => {
		return (
			<View
				style={{
					height: 1,
					width: "86%",
					backgroundColor: "#CED0CE",
					marginLeft: "14%"
				}}
			/>
		);
	};

	_onPressItem = (item) => {
		this.props.navigation.navigate('PostDetailsScreen', {post : item})
		//console.log('press');
	};


	_renderItem=({ item }) => (
					<TouchableOpacity onPress={()=> this._onPressItem(item)}>
						<ListItem
							id={item.id}
							onPressItem={console.log('press')}
							roundAvatar
							title={item.title}
							subtitle={item.description}
							//avatar={{ uri: item.picture.thumbnail }}
							containerStyle={{ borderBottomWidth: 0 }}

						/>
					</TouchableOpacity>
	);

  static navigationOptions = ({navigation})=> {
		return {
			headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20}}> Message Board </Text>),
			headerRight: ( <Icon
				containerStyle={{padding:15}}
				type='font-awesome'
				name= "edit"
				onPress={navigation.getParam('goToAdd')}/>
			),

		};
	};

  componentDidMount=()=> {
    this.props.navigation.setParams({ goToAdd: this.goToAddPost });
  }
  goToAddPost=()=> {
		this.props.navigation.navigate('AddPost')
	}
  render(){
    return (
    		<List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0}}>
				<FlatList

						data={this.state.data}
						renderItem={this._renderItem}
						keyExtractor={item => item.postID}
						ItemSeparatorComponent={this.renderSeparator}
						//ListHeaderComponent={this.renderHeading}

				/>
			</List>
    );
  }
}

export default MessageBoardScreen;
