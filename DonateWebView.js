import React, { Component } from 'react';
import { View, WebView, StyleSheet } from 'react-native';

const DonateWebView = () => {
	return (
			<View style = {styles.container}>
				<WebView
					source = {{uri: 'https://www.woccu.org/give?s=7'}}
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
