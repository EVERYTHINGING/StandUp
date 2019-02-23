import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import cases from '../casesStore';
import TopBar from '../components/TopBar';

export default class Cases extends React.Component {
  render() {
    return (
      <View>
        <TopBar name="All Cases" />
        <View style={styles.container}>
          <FlatList
            data = {cases}
            keyExtractor = {cases => cases.number}
            renderItem = { ({item}) => <Text>{item.name}</Text> }
          />
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