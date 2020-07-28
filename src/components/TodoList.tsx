import React from 'react'

export interface TodoListProps<T> {
  dataSource?: T[]
  renderItem?: (item: T, index: number) => React.ReactNode
}

function TodoList<T>(props: TodoListProps<T>) {
  const { dataSource = [], renderItem = () => null } = props

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">{dataSource.map(renderItem)}</ul>
    </section>
  )
}

export default TodoList
