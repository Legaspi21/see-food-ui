'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class Registration extends Component {
  render() {
    return (
      <View>
        <Text style={styles.textStyle}>Welcome to See Food!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	textStyle: {
		color: 'red'
	}
});


export default Registration;
