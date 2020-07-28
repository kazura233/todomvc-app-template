import React from 'react'

export interface Item {
  id: number
  value: string
  checked: boolean
}

export interface TodoItemProps extends Item {
  index: number
}

const TodoItem = (props: TodoItemProps) => {
  const { value, checked } = props
  return (
    <li className="completed">
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
