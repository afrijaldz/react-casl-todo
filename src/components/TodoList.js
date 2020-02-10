import React from 'react'
import Can from '../Can'

export default class TodoList extends React.Component {
  render() {
    return (
      <>
        <ul>
          {this.props.items.map((todo, i) => (
            <li key={i}>{todo.task}&nbsp;
              <Can I="delete" this="Todo">
                <button onClick={() => this.props.delete(todo)}>delete</button>
              </Can>
            </li>
          ))}
        </ul>
      </>
    )
  }
}