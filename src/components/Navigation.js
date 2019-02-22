import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from '../routing';

export default class Navigation extends React.Component {
  render() {
    return (
      <View style={styles.topBar}>
        <Link to="/">
			<Text style={styles.icon}>&#9776;</Text>
		</Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    zIndex: 100
  },
  icon: {
  	fontSize: 30
  }
});
