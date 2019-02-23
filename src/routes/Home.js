import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Link } from '../routing';
import TopBar from '../components/TopBar';

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <TopBar name="Home" />
        <View style={styles.container}>
        	<Link to="/cases">
        		<Text>See All Cases</Text>
        	</Link>
        	<Link to="/new">
        		<Text>New Case</Text>
        	</Link>
        </View>
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
