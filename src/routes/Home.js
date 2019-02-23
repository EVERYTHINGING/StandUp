import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Link } from '../routing';
import TopBar from '../components/TopBar';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopBar name="Home" />
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
});
