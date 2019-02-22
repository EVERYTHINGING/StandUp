import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import cases from '../casesStore';

export default class Cases extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.topBarText}>All Cases</Text>
        </View>
        <FlatList
          data = {cases}
          keyExtractor = {cases => cases.number}
          renderItem = { ({item}) => <Text>{item.name}</Text> }
        />
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