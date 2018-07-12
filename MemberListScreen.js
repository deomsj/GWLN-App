import React from 'react';
import { StyleSheet, Text, View, Button, Picker, FlatList, TouchableOpacity} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { SearchBar, List, ListItem } from 'react-native-elements';

import MemberContactPage from './MemberContactPage';

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
			headerTitle: (<Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20}}> Member List </Text>),
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
							roundAvatar
							title={item.name.first}
							subtitle={item.email}
							avatar={{ uri: item.picture.thumbnail }}
							containerStyle={{ borderBottomWidth: 0 }}

						/>
					</TouchableOpacity>
	);

	renderHeading = () => {
		return <SearchBar placeholder="Search" lightTheme round/>;
	};


	componentDidMount() {
		this.makeRemoteRequest();
	}
	makeRemoteRequest = () => {
		const { page, seed } = this.state;
		const url = 'https://randomuser.me/api/?seed=${seed}&{page}&results=20';
		this.setState({ loading: true });
		fetch(url)
			.then(res => res.json())
			.then(res => {
				this.setState({
					data: page === 1 ? res.results : [...this.state.data, ...res.results],
					error: res.error || null,
					loading: false,
					refreshing: false,
				});
				//console.log(this.state.data);

			})
			.catch(error => {
				this.setState({ error, loading: false });
			});

	};

	render() {
		return(
			<List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0}}>
				<FlatList

						data={this.state.data}
						renderItem={this._renderItem}
						keyExtractor={item => item.email}
						ItemSeparatorComponent={this.renderSeparator}
						ListHeaderComponent={this.renderHeading}

				/>
			</List>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,
		alignItems: 'center',
	},
})
export default MemberListScreen;
