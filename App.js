import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './Home';
import TaskFormScreen from './TaskForm';


const Nav = StackNavigator({
  TaskList: {
    screen: Home,
  },
  TaskForm: {
    screen: TaskFormScreen,
  },
});

export default class PluralTodo extends Component {
  render() {
    return (
      <Nav ref={nav => this.navigator = nav} />
    );
  }
}
