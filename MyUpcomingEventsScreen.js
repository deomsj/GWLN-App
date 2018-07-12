import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, FlatList } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

class MyUpcomingEventsScreen extends React.Component {
	static navigationOptions = {
			headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20}}> My Upcoming Events </Text>),
			headerRight: (<View></View>)
	}
	render() {
		return(
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<FlatList
					data={[{key: 'a'}, {key: 'b'},{key: 'c'}, {key: 'd'}, {key: 'e'}]}
					renderItem={({item}) => <Text>{item.key}</Text>}
				/>
			</View>
		);
	}

}

export default MyUpcomingEventsScreen;
