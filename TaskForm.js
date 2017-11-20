import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 150,
    backgroundColor: '#F7F7F7',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D7D7D7',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderRadius: 3,
  },
  buttonContainer: {
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#05A5D1',
    margin: 10,
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  cancelButtonContainer: {
    backgroundColor: 'lightgray',
  },
});

export default class TaskFormScreen extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} />
        <TouchableHighlight style={styles.buttonContainer}>
          <Text style={styles.button}>
            Add
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.cancelButtonContainer]}>
          <Text style={styles.button}>
            Cancel
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
