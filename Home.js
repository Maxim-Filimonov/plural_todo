import React, { Component } from 'react';
import TaskList from './TaskList';

export default class Home extends Component {
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
  render() {
    return (
      <TaskList tasks={this.state.tasks} onAddStarted={this.onAddStarted} />
    );
  }
  onAddStarted() {
    this.props.navigation.navigate('TaskForm');
  }
}
