import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Router, Switch, Route, Link } from './routing';
import Home from './routes/Home';
import Cases from './routes/Cases';
import New from './routes/New';
import Navigation from './components/Navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Router>
          <View>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} /> } />
              <Route path="/cases" component={Cases} /> } />
              <Route path="/new" component={New} /> } />
            </Switch>
          </View>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30
  }
});
