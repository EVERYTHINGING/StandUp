import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Link } from '../routing';

export default class Home extends React.Component {
  render() {
    return (
      <View>
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
