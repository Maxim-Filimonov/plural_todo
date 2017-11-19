import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default function TaskRow(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.task.name}</Text>
    </View>
  );
}
TaskRow.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
