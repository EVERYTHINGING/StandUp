import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TopBar = ({name}) => {
	return(
		<View style={styles.topBar}>
			<Text style={styles.topBarText}>{name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
  topBar: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  topBarText: {
    fontSize: 20
  },
});

export default TopBar;