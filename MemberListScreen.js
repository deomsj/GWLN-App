
import React from 'react';
import { StyleSheet, Text, View, Button, Picker, FlatList, TouchableOpacity, TextInput} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { SearchBar, List, ListItem } from 'react-native-elements';
import _ from 'lodash';
import MemberContactPage from './MemberContactPage';

const contains = ({first_name, last_name}, query) => {
	//const { first_name, last_name } = name;
	if (first_name.includes(query) || last_name.includes(query)){
		return true;
	}
	return false;
}

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
			//added
			query: "",
			fullData: [],

		};
		//this._handleResults = this._handleResults.bind(this);
	}


	renderSeparator = () => {
		return (
			<View
				style={{
					height: 1,
					width: "100%",
					backgroundColor: "#CED0CE",
					marginLeft: "5%",
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
							roundAvatar
							title={`${item.first_name} ${item.last_name}`}
							//subtitle={item.email}
							//avatar={{ uri: item.picture.thumbnail }}
							containerStyle={{ borderBottomWidth: 0 }}

						/>
					</TouchableOpacity>
	);

	// renderHeading = () => {
	// 	return <SearchBar placeholder="Search" lightTheme round
	// 			ref={(ref) => this.searchBar = ref}
	// 			//data={data}
	// 			handleResults={this._handleResults}
	// 			/>;
	// };

	renderHeading = () => {
		return <SearchBar placeholder="Search" lightTheme round
				ref={(ref) => this.searchBar = ref}
				//data={data}
				onChangeText={this.handleSearch}
				/>;
	};

	// toTitleCase = (str) => {
	// 	return str.replace(
	// 		/\w\S*/g,
	// 		function(txt) {
	// 			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	// 		}
	// 	)
	// }

	// toTitleCase(str) {
  //   return str.replace(/\w\S*/g, function(txt){
  //       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  //   });
	// };

	handleSearch = (text) => {
		//console.log("text", text);
		// does not handle spaces!! :(
		const formatQuery = text.replace(/(^|\s)[a-z]/g,function(f){return f.toUpperCase();});
		const data = _.filter(this.state.fullData, res => {
			return contains(res, formatQuery);
		});
		this.setState({query: formatQuery, data});
	};

	componentDidMount() {
		this.makeRemoteRequest();
	}
	makeRemoteRequest = () => {
		const { page, seed } = this.state;
		const url = 'https://cuwomen.org/functions/app.gwln.php';
		this.setState({ loading: true });
		fetch(url, {
			method: "POST",
			headers: {
				'X-Token': 'hub46bubg75839jfjsbs8532hs09hurdfy47sbub',
			},
			body: JSON.stringify({
 				"code": "getMembersShares"
 			}),

		})
			.then(res => res.json())
			.then(res => {
				this.setState({
					//data: page === 1 ? res : [...this.state.data, ...res],
					error: res.error || null,
					loading: false,
					refreshing: false,
					data: res,
					fullData: res,
				});
				//console.log(this.state.data);

			})
			.catch(error => {
				this.setState({ error, loading: false });
			});

	};

	render() {
		return(
			<View style={styles.mainContainer}>
				<List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0}}>
				<FlatList
						data={this.state.data}
						renderItem={this._renderItem}
						keyExtractor={(item) => item.email}
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
