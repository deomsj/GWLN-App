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
			data: [],
		};
	}

	renderSeparator = () => {
		return (
			<View
				style={{
					height: 1,
					// width: "100%",
					backgroundColor: "#CED0CE",
					// marginLeft: "0%"
				}}
			/>
		);
	};

	_onPressItem = (item) => {
		this.props.navigation.navigate('PostDetailsScreen', {post : item})
		//console.log('press');
	};

	makeRemoteRequest = () => {
		const url = 'https://cuwomen.org/functions/app.gwln.php';
		fetch(url, {
			method: "POST",
			headers: {
				'X-Token': 'hub46bubg75839jfjsbs8532hs09hurdfy47sbub',
			},
			body: JSON.stringify({
				"code": "getBlogPosts"
			}),
		})
		.then(res => res.json())
		.then(res => {
			this.setState({
				data: res
			})
			//console.log(this.state.date);
		})
		.catch(error => {
			console.log(error);
		})
	}


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
			// headerTitleStyle: {color: '#002A55', alignSelf: 'center', textAlign: 'center'},
			// title: 'Blog',
			headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20, color: '#002A55'}}> Blog </Text>),
			headerRight: ( <Icon
				containerStyle={{marginRight:15, marginTop:15}}
				iconStyle={styles.headerIcon}
				type='font-awesome'
				name= "edit"
				onPress={navigation.getParam('goToAdd')}/>
			),

		};
	};

  componentDidMount=()=> {
    this.props.navigation.setParams({ goToAdd: this.goToAddPost });
    this.makeRemoteRequest();
  }
  goToAddPost=()=> {
		this.props.navigation.navigate('AddPost')
	}
  render(){
  	console.log(this.state.data);
    return (
			<View style={styles.mainContainer}>
			<ScrollView>
    		<List containerStyle={styles.listContainer}>
				<FlatList
						data={this.state.data}
						renderItem={this._renderItem}
						keyExtractor={item => item.postID}
						ItemSeparatorComponent={this.renderSeparator}
						
						/>
			</List>
			</ScrollView>
			</View>
    );
  }
}

export default MessageBoardScreen;

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: 'white',
		flex:1,
		// padding:30,
	},
	listContainer: {
		// padding: 30,
		// marginTop: 30,
		// borderTopWidth: 1,
		// marginBottom: 20,
		borderTopWidth: 0,
		borderBottomWidth: 1,
		borderColor: "#CED0CE",
	},
	headerIcon: {
		flex:1,
		color: '#002A55',
	}
});
