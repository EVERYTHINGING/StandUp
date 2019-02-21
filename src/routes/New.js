import React from 'react';
import { StyleSheet, View, TextInput, Text, Dimensions, ScrollView, Button } from 'react-native';

export default class New extends React.Component {
  constructor(){
    super();

    this.state = {
      who: '',
      what: '',
      when: '',
      where: '',
      currentCard: 0
    };

    this.scrollView = null;
    this.handleNextPress = this.handleNextPress.bind(this);
    this.handleBackPress = this.handleBackPress.bind(this);
  }

  handleNextPress(e){
    const xPos = Dimensions.get('window').width*(this.state.currentCard+1);
    this.refs._scrollView.scrollTo({x: xPos, y: 0, animated: true});

    this.setState({ currentCard: this.state.currentCard+1 });
  }

  handleBackPress(e){
    const xPos = Dimensions.get('window').width*(this.state.currentCard-1);
    this.refs._scrollView.scrollTo({x: xPos, y: 0, animated: true});

    this.setState({ currentCard: this.state.currentCard-1 });
  }

  render() {
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

    return (
         <ScrollView horizontal={true} pagingEnabled={true} scrollEnabled={false} ref="_scrollView">
            <View style={[styles.card, {width: viewportWidth}]}>
              <Text>Who?</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => this.setState({who: text})}
                value={this.state.who}
              />
              <Button
                onPress={this.handleNextPress}
                title="Next"
                color="#5844ed"
                accessibilityLabel="Go to next step"
              />
            </View>
            <View style={[styles.card, {width: viewportWidth}]}>
              <Text>What?</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => this.setState({what: text})}
                value={this.state.what}
              />
              <Button
                onPress={this.handleNextPress}
                title="Next"
                color="#5844ed"
                accessibilityLabel="Go to next step"
              />
              <Button
                onPress={this.handleBackPress}
                title="Back"
                color="#5844ed"
                accessibilityLabel="Go to previous step"
              />
            </View>
            <View style={[styles.card, {width: viewportWidth}]}>
              <Text>When?</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => this.setState({when: text})}
                value={this.state.when}
              />
              <Button
                onPress={this.handleNextPress}
                title="Next"
                color="#5844ed"
                accessibilityLabel="Go to next step"
              />
              <Button
                onPress={this.handleBackPress}
                title="Back"
                color="#5844ed"
                accessibilityLabel="Go to previous step"
              />
            </View>
            <View style={[styles.card, {width: viewportWidth}]}>
              <Text>Where?</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => this.setState({where: text})}
                value={this.state.where}
              />
              <Button
                onPress={this.handleBackPress}
                title="Back"
                color="#5844ed"
                accessibilityLabel="Go to previous step"
              />
            </View>
          </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 5,
    borderColor: '#000',
    width: '50%'
  },
});

