import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

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

function TaskForm(props) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <TouchableHighlight
        style={styles.buttonContainer}
        onPress={props.onAdd}
      >
        <Text style={styles.button}>
          Add
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.buttonContainer, styles.cancelButtonContainer]}
        onPress={props.onCancel}
      >
        <Text style={styles.button}>
          Cancel
        </Text>
      </TouchableHighlight>
    </View>
  );
}
TaskForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

// This is needed to make HMR stay on the same route
export default class extends Component {
  render() {
    return <TaskForm {...this.props} />;
  }
}
