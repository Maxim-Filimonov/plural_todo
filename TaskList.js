import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
  Text,
  ListView,
  TouchableHighlight,
} from 'react-native';
import TaskRow from './TaskRow';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: 'lightgray',
    flex: 1,
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    height: 60,
    borderColor: '#05A5F1',
    borderWidth: 2,
    backgroundColor: '#333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: '#FAFAFA',
    fontSize: 22,
    fontWeight: '600',
  },
});

function TaskList(props) {
  const renderRow = task => (<TaskRow
    task={task}
    onRemovePressed={() => props.onTaskRemove(task)}
  />);
  const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
  });
  const taskSource = dataSource.cloneWithRows(props.tasks);
  return (
    <View style={styles.container}>
      <ListView
        dataSource={taskSource}
        renderRow={renderRow}
      />
      <TouchableHighlight onPress={props.onAddStarted} style={styles.buttonContainer}>
        <Text style={styles.button}>Add one</Text>
      </TouchableHighlight>
    </View>
  );
}
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddStarted: PropTypes.func.isRequired,
  onTaskRemove: PropTypes.func.isRequired,
};
// This is needed to make HMR stay on the same route
export default class extends Component {
  render() {
    return <TaskList {...this.props} />;
  }
}
