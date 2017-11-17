import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import TaskList from './TaskList';

export default class PluralTodo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        { task: 'Finish Pluralsight Tutorial' },
        { task: 'Cleanup NatRhythms App component' },
      ],
    };
  }
  render() {
    return (
      <TaskList />
    );
  }
}
