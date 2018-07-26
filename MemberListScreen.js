import React from 'react';
import { StyleSheet, Text, View, Button, Picker, FlatList, TouchableOpacity, TextInput} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { SearchBar, List, ListItem } from 'react-native-elements';

import MemberContactPage from './MemberContactPage';

const contacts = null

class MyListItem extends React.Component {
	_onPress = () => {
		this.props.onPressItem(this.props.id);
	};

	render() {
		return(
			<TouchableOpacity onPress={this._onPress}>
				<View>
					<Text> {this.props.title} </Text>
				</View>
			</TouchableOpacity>
		);
	}

}


class MemberListScreen extends React.Component {
	static navigationOptions = {
			headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20, color: '#002A55'}}> Member List </Text>),
			headerRight: (<View></View>),
	}

	constructor(props){
		super(props);
		this.state = {
			loading: false,
			data: [],
			page: 1,
			seed: 1,
			error: null,
			refreshing: false,

		};
		this._handleResults = this._handleResults.bind(this);
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
		this.props.navigation.navigate('MemberContactPage', {user : item})
	};

	_renderItem=({ item }) => (
					<TouchableOpacity onPress={()=> this._onPressItem(item)}>
						<ListItem
							id={item.id}
							//onPressItem={console.log('press')}
							// keyExtractor={(item) => item.toString()}
							title={item.first_name}
							subtitle={item.email1}
							containerStyle={{ borderBottomWidth: 0 }}

						/>
					</TouchableOpacity>
	);

	renderHeading = () => {
		return <SearchBar placeholder="Search" lightTheme round
				ref={(ref) => this.searchBar = ref}
				//data={data}
				handleResults={this._handleResults}
				/>;
	};

	_handleResults(results) {
		this.setState({results});
	}

	SearchFilterFunction(text){
		const people = this.data.item.name.first
		const newData = this.data.filter(function(people){
			const itemData = item.name.first.toLowerCase()
			const textData = text.toLowerCase()
			return itemData.indexOf(textData) > -1
		})
		this.setState({
			data: this.state.data.newData,
			text: text
		})
	}


	componentDidMount() {
		this.makeRemoteRequest();
	}
	makeRemoteRequest = () => {
		const { page, seed } = this.state;
		const url = 'https://cuwomen.org/functions/app.gwln.php';
		this.setState({ loading: true });
		fetch(url, {
			method: "RETR",
			headers: {
				'X-Token': 'hub46bubg75839jfjsbs8532hs09hurdfy47sbub',
			},
			body: JSON.stringify({
				"code": "getMembersShares"
			}),
		})
			.then(res => res.json())
			.then(res => {
				//console.log(res);
				contacts = res
				console.log(contacts[1]);

			})
			.catch(error => {
				console.log(error);
			});

	};

	render() {
		return(
			<View style={styles.mainContainer}>
				<List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0}}>
				<FlatList
						data={contacts}
						renderItem={this._renderItem}
						keyExtractor={(item) => item.email1}
						ItemSeparatorComponent={this.renderSeparator}
						ListHeaderComponent={this.renderHeading}
				/>
			</List>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: 'white',
	},
	container: {
		flex: 1,
		marginTop: 40,
		alignItems: 'center',
	},
})
export default MemberListScreen;
