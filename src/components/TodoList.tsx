import React from 'react'
import { Item } from './TodoItem'

export interface TodoListProps {
  dataSource?: Array<Item>
  renderItem?: (item: Item, index: number) => React.ReactNode
}

const TodoList: React.FC<TodoListProps> = (props) => {
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
