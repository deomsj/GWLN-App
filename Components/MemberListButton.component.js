import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import styles from './Button.component.style.js';

class MemberListButton extends Component {
	render() {
		return (
				<View style={styles.container}>
					<Text style={styles.ButtonText}> Member List </Text>
				</View>
		);
	}
}
export default MemberListButton;