import React, { Component } from 'react';
import { StackNavigator, NavigationActions } from 'react-navigation';

import TaskList from './TaskList';
import TaskForm from './TaskForm';

const createComponent = (instance, props) =>
  navProps => React.createElement(instance, Object.assign({}, props, navProps));

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
    this.onAddCancel = this.onAddCancel.bind(this);
    this.onAddSubmit = this.onAddSubmit.bind(this);
  }
  onAddCancel() {
    this.navigator.dispatch(NavigationActions.back({}));
  }
  onAddSubmit() {
    console.log('Submitting!');
  }
  onAddStarted() {
    this.navigator.dispatch(NavigationActions.navigate({ routeName: 'TaskForm' }));
  }
  render() {
    const Nav = StackNavigator({
      TaskList: {
        screen: createComponent(TaskList, {
          tasks: this.state.tasks,
          onAddStarted: this.onAddStarted,
        }),
      },
      TaskForm: {
        screen: createComponent(TaskForm, {
          onCancel: this.onAddCancel,
          onAdd: this.onAddSubmit,
        }),
      },
    });
    return (
      <Nav ref={nav => this.navigator = nav} />
    );
  }
}
