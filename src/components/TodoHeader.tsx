import React from 'react'

const TodoHeader = () => {
  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} />
    </header>
  )
}

export default TodoHeader
