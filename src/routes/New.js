import React from 'react';
import { StyleSheet, View, TextInput, Text, Dimensions, ScrollView, Button } from 'react-native';
import TopBar from '../components/TopBar';

export default class New extends React.Component {
  constructor(){
    super();

    this.state = {
      who: '',
      what: '',
      when: '',
      where: '',
      currentCard: 0,
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
        <View>
          <TopBar name="New Case" />
          <View style={styles.backButtonContainer}>
          { this.state.currentCard !== 0 && 
            <Button
              onPress={this.handleBackPress}
              title="&#60;"
              color="#5844ed"
              accessibilityLabel="Go to previous step"
            />
          }
          </View>
           <ScrollView horizontal={true} pagingEnabled={true} scrollEnabled={false} ref="_scrollView">
              <View style={[styles.card, {width: viewportWidth}]}>
                <Text style={styles.cardTitle}>Who?</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({who: text})}
                  value={this.state.who}
                  returnKeyType="done"
                  multiline
                />
                <Button
                  onPress={this.handleNextPress}
                  title="Next"
                  color="#5844ed"
                  accessibilityLabel="Go to next step"
                  disabled={this.state.who === ''}
                />
              </View>
              <View style={[styles.card, {width: viewportWidth}]}>
                <Text style={styles.cardTitle}>What?</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({what: text})}
                  value={this.state.what}
                  returnKeyType="done"
                  multiline
                />
                <Button
                  onPress={this.handleNextPress}
                  title="Next"
                  color="#5844ed"
                  accessibilityLabel="Go to next step"
                  disabled={this.state.what === ''}
                />
              </View>
              <View style={[styles.card, {width: viewportWidth}]}>
                <Text style={styles.cardTitle}>When?</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({when: text})}
                  value={this.state.when}
                  returnKeyType="done"
                  multiline
                />
                <Button
                  onPress={this.handleNextPress}
                  title="Next"
                  color="#5844ed"
                  accessibilityLabel="Go to next step"
                  disabled={this.state.when === ''}
                />
              </View>
              <View style={[styles.card, {width: viewportWidth}]}>
                <Text style={styles.cardTitle}>Where?</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({where: text})}
                  value={this.state.where}
                  returnKeyType="done"
                  multiline
                />
                <Button
                  onPress={this.handleSubmitPress}
                  title="Submit"
                  color="#5844ed"
                  accessibilityLabel="Submit"
                  disabled={this.state.where === ''}
                />
              </View>
            </ScrollView>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 30
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '33%',
    height: 100,
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 40,
    textAlign: 'center',
    fontSize: 25,
    padding: 10
  },
  backButtonContainer: {
    height: 50,
    alignItems: 'flex-start',
  }
});

