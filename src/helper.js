const APP_NAME = 'todos'
let id = 0

exports.post = (todo) => {
  localStorage.setItem(APP_NAME, JSON.stringify(todo))
}

exports.getTodos = () => {
  const todos = JSON.parse(localStorage.getItem(APP_NAME) || '[]')
  
  return todos
}

exports.setUsers = () => {
  localStorage.setItem('users', JSON.stringify([
    {
      name: 'kadiman',
      user_id: 1,
    },
    {
      user_id: 2,
      name: 'tukijan',
    },
    {
      user_id: 3,
      name: 'sukimin',
    },
    {
      user_id: 4,
      name: 'paijo',
    },
  ]))
}

exports.getUsers = () => {
  const users = JSON.parse(localStorage.getItem('users'))
  
  return users
}