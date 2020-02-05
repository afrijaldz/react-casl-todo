import React from 'react';
import Todo from './components/Todo'
import * as helper from './helper'
import Can from './Can';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    helper.setUsers()

    this.state = {
      users: helper.getUsers()
    }
  }
  
  render() {
    return (
      <div className="App">
        <div>
          signin as: <span>
            <select>
              {this.state.users.map((user, i) => (
                <option key={i} value={user.user_id}>{user.name}</option>
              ))}
            </select>
          </span>
        </div>
        <Todo />
      </div>
    );
  }
}