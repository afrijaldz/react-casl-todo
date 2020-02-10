import React from 'react';
import Todo from './components/Todo'
import * as helper from './helper'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    helper.setUsers()

    this.state = {
      users: helper.getUsers()
    }
  }

  handleChangeUser = e => {
    e.persist()
    localStorage.setItem('user', e.target.value)
  }

  render() {
    return (
      <div className="App">
        <div>
          signin as: <span>
            <select onChange={this.handleChangeUser}>
              {this.state.users.map((user, i) => (
                <option key={i} value={JSON.stringify(user)}>{user.name}</option>
              ))}
            </select>
          </span>
        </div>
        <Todo />
      </div>
    );
  }
}