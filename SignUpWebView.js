import React, { Component } from 'react';
import { WebView } from 'react-native';

class DonateWebView extends Component {
	render() {
		return (
			<WebView
				source={{uri: 'https://www.cuwomen.org/gwln_connect/gwln_new_member'}}
				style={{marginTop: 20}}
			/>
		);
	}
}