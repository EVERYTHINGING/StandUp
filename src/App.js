import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Router, Switch, Route } from './routing';
import Home from './routes/Home';
import Cases from './routes/Cases';
import New from './routes/New';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Switch>
            <Route exact path="/" render={ props => <Home {...props} /> } />
            <Route path="/cases" render={ props => <Cases {...props} /> } />
            <Route path="/new" render={ props => <New {...props} /> } />
          </Switch>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
