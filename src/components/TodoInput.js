import React from 'react'
import * as helper from '../helper'

export default class TodoInput extends React.Component {
  state = {
    task: '',
    asignees: helper.getUsers(),
    asignee: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.todo === '' || this.state.asignee === '') {
      alert('todo or asignee must not be empty')
    } else {
      const todo = {
        task: this.state.task,
        user_id: this.state.asignee,
      }

      this.props.submit(todo)
      this.setState({ task: '', asignee: '' })
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input name="task" value={this.state.task} onChange={this.handleChange} />
          {' '}
          <select name="asignee" value={this.state.asignee} onChange={this.handleChange}>
            <option value="">-- asigned to --</option>
            {this.state.asignees.map((asignee, i) => (
              <option key={i} value={asignee.name}>{asignee.name}</option>
            ))}
          </select>
          {' '}
          <button>add</button>
        </form>
      </>
    )
  }
}