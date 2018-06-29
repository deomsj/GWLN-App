import React from 'react';
import { StyleSheet, Text, View, Button, Picker, WebView, FlatList } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

class MyPastEventsScreen extends React.Component {
	render() {
		return(
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Text> My Past Events </Text>
				<FlatList 
					data={[{key: 'a'}, {key: 'b'},{key: 'c'}, {key: 'd'}, {key: 'e'}]}
					renderItem={({item}) => <Text>{item.key}</Text>}
				/>
			</View>
		);
	}
	
}

export default MyPastEventsScreen;