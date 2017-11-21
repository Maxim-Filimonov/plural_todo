import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  doneButton: {
    borderRadius: 5,
    backgroundColor: '#EAEAEA',
    padding: 5,
  },
});
export default function TaskRow(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.task.name}</Text>
      <TouchableHighlight style={styles.doneButton} onPress={props.onRemovePressed}>
        <Text>Done</Text>
      </TouchableHighlight>
    </View>
  );
}
TaskRow.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onRemovePressed: PropTypes.func.isRequired,
};
