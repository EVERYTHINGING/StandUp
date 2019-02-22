import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Link } from '../routing';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.topBarText}>Home</Text>
        </View>
      	<Link to="/cases">
      		<Text>See All Cases</Text>
      	</Link>
      	<Link to="/new">
      		<Text>New Case</Text>
      	</Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  topBar: {
    height: 50,
    alignItems: 'center'
  },
  topBarText: {
    fontSize: 20
  },
});
