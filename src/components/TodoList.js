import React from 'react'
import { getTodos } from '../helpers/storage'

export default class TodoList extends React.Component {
  render() {
    console.log(this.props)
    return (
      <>
        <ul>
          {this.props.items.map((todo, i) => (
            <li key={i}>{todo.task}</li>
          ))}
        </ul>
      </>
    )
  }
}