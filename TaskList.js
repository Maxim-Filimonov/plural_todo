import React, { Component } from 'react';

import {
  Text,
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
});
class TaskList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hi, this is a tasklist</Text>
      </View>
    );
  }
}
export default TaskList;
