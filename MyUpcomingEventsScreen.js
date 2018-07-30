import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, FlatList, TouchableOpacity, } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {List, ListItem} from 'react-native-elements';

class MyUpcomingEventsScreen extends React.Component {

	static navigationOptions = {
			headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20, color: '#002A55'}}> My Upcoming Events </Text>),
			headerRight: (<View></View>)
	}

	constructor(props){
		super(props);
		this.state = {
			data: [],
		}
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

	_renderItem=({ item }) => (
		
					<TouchableOpacity onPress={()=> this._onPressItem(item)}>
						<ListItem
							id={item.id}
							onPressItem={console.log('press')}
							title={item.event_name}
							subtitle={item.description}
							//avatar={{ uri: item.picture.thumbnail }}
							containerStyle={{ borderBottomWidth: 0 }}

						/>
					</TouchableOpacity>
	);

	makeremoteRequest = () => {
		const url = 'https://cuwomen.org/functions/app.gwln.php'
		fetch(url, {
			method: "POST",
			headers: {
				'X-Token': 'hub46bubg75839jfjsbs8532hs09hurdfy47sbub',
			},
			body: JSON.stringify({
				"code": "getCheckinEventsByEmail",
				"arguments": {
					"email": global.currUser.email1
				}
			}),
		})
		.then(res => res.json())
		.then(res => {
			console.log(res);
			this.setState({
				data: res
			})
		})
		.catch(error => {
			console.log(error);
		})

	}
	componentWillMount(){
		this.makeremoteRequest();
	}
	render() {
		return(
			<View style={{ flex: 1}}>
				<FlatList
					data={this.state.data}
					renderItem={this._renderItem}
					keyExtractor={item => item.eventID}
					ItemSeparatorComponent={this.renderSeparator}
				/>
			</View>
		);
	}

}

export default MyUpcomingEventsScreen;
