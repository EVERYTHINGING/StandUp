import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default class New extends React.Component {
  state = {
    text: ''
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 5,
    borderColor: '#000'
  },
});

