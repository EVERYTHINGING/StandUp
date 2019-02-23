import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from '../routing';

export default class Menu extends React.Component {
  render() {
    return (
      <View style={styles.menuButton}>
        <Link to="/">
			<Text style={styles.icon}>&#9776;</Text>
		</Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuButton: {
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
