import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import cases from '../casesStore';

export default class Cases extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          data = {cases}
          keyExtractor = {cases => cases.number}
          renderItem = { ({item}) => <Text>{item.name}</Text> }
        />
      </View>
    );
  }
}
