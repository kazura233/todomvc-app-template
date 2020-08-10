/*
 * @Author: kazura233
 * @Date: 2020-07-28 16:40:08
 * @Last Modified by: kazura233
 * @Last Modified time: 2020-07-28 23:20:30
 */

import React from 'react'

export interface TodoListProps<T> {
  dataSource?: T[]
  renderItem?: (item: T, index: number) => React.ReactNode
  toggleAll: (checked: boolean) => void
  activeCount: number
}

function TodoList<T>(props: TodoListProps<T>) {
  const { dataSource = [], renderItem = () => null, toggleAll, activeCount } = props

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={activeCount === 0}
        onChange={(event) => toggleAll(event.target.checked)}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">{dataSource.map(renderItem)}</ul>
    </section>
  )
}

export default TodoList
