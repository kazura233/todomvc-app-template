import React from 'react'
import classnames from 'classnames'

export interface Item {
  id: string
  value: string
  checked: boolean
}

export interface TodoItemProps extends Item {
  index: number
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { value, checked } = props
  return (
    <li
      className={classnames({
        completed: true,
        editing: false,
      })}
    >
      <div className="view">
        <input className="toggle" type="checkbox" defaultChecked={checked} />
        <label>{value}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" defaultValue={value} />
    </li>
  )
}

export default TodoItem
