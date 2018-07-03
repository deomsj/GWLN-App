import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import t from 'tcomb-form-native'; // 0.6.14

// Form
const Form = t.form.Form;

// Form model
const User = t.struct({
  email: t.String,
  password: t.String,
});

class OrganizerSigninScreen extends React.Component {
  handleSubmit() {
    console.log(this.loginform);
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>Organizer Login</Text>
        <Form ref={c => this.loginform = c} type={User} />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Home')}
          color="#002a55"
        />Ï
      </View>
    );
  }

}

export default OrganizerSigninScreen;


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
