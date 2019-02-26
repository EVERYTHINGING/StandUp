import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import cases from '../casesStore';
import TopBar from '../components/TopBar';
import { Link, Route } from '../routing';

export default class Cases extends React.Component {
  render() {
    return (
      <View>
        <TopBar name="All Cases" />
        <View style={styles.container}>
          <FlatList
            data = {cases}
            keyExtractor = {cases => cases.id}
            renderItem = { ({item}) => 
              <Link to={`${this.props.match.url}/${item.id}`}>
                <Text>Case {item.id}</Text>
              </Link>
            }
          />
        </View>
        
        <Route path={`${this.props.match.url}/:id`} render={({match}) => (
          <View style={styles.case}>
            <Text>Who: {cases[match.params.id].who}</Text>
            <Text>What: {cases[match.params.id].what}</Text>
            <Text>When: {cases[match.params.id].when}</Text>
            <Text>Where: {cases[match.params.id].where}</Text>
          </View>
        )} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  case: {
    
  }
});