import React, { Component } from 'react';
import { View, WebView, StyleSheet } from 'react-native';

const DonateWebView = () => {
	return (
			<View style = {styles.container}>
				<WebView
					source = {{uri: 'https://www.cuwomen.org/gwln_connect/gwln_new_member'}}
				/>
			</View>
		)
}

export default DonateWebView;

const styles = StyleSheet.create({
	container: {
		height: 1000,
	}
})