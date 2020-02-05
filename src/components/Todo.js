import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import * as helper from '../helper'

export default class Todo extends React.Component {
  state = {
    todos: helper.getTodos()
  }

  submit = todo => {
    this.setState(prev => ({
      todos: prev.todos.concat(todo)
    }))

    helper.post(this.state.todos)
  }

  render() {
    return (
      <>
        <h4>Todo List</h4>
        <TodoInput submit={this.submit} />
        <TodoList items={this.state.todos} />
      </>
    )
  }
}