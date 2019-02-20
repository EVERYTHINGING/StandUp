import React from 'react';
import { StyleSheet, View, TextInput, Text, Dimensions } from 'react-native';
import Carousel from '../components/Carousel';

export default class New extends React.Component {
  state = {
    who: '',
    what: '',
    when: '',
    where: ''
  };

  render() {
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

    return (
         <Carousel
            style={[styles.container, {}]}
            speed={500}
            pagerColor="#000"
            activePagerColor="#fff"
          >
            <View style={[styles.card]}>
              <Text>Who?</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => this.setState({who: text})}
                value={this.state.who}
              />
            </View>
            <View style={[styles.card]}>
              <Text>What?</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => this.setState({what: text})}
                value={this.state.what}
              />
            </View>
            <View style={[styles.card]}>
              <Text>When?</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => this.setState({when: text})}
                value={this.state.when}
              />
            </View>
            <View style={[styles.card]}>
              <Text>Where?</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => this.setState({where: text})}
                value={this.state.where}
              />
            </View>
          </Carousel>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 500, 
    height: 500
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

