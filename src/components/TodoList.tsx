/*
 * @Author: kazura233
 * @Date: 2020-07-28 16:40:08
 * @Last Modified by: kazura233
 * @Last Modified time: 2020-07-28 23:20:30
 */

import React from 'react'
import { Item } from './TodoItem'

export interface TodoListProps {
  dataSource?: Array<Item>
  renderItem?: (item: Item, index: number) => React.ReactNode
  toggleAll: (checked: boolean) => void
  activeCount: number
}

const TodoList: React.FC<TodoListProps> = (props) => {
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
