import React, { Component } from 'react';
import TaskList from './TaskList';

export default class PluralTodo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tasks: [
        { name: 'Finish Pluralsight Tutorial..' },
        { name: 'Cleanup NatRhythms App component..' },
      ],
    };
    this.onAddStarted = this.onAddStarted.bind(this);
  }
  onAddStarted() {
    console.log('add started');
  }
  render() {
    return (
      <TaskList tasks={this.state.tasks} onAddStarted={this.onAddStarted} />
    );
  }
}
