/*
 * @Author: kazura233
 * @Date: 2020-07-28 16:39:58
 * @Last Modified by: kazura233
 * @Last Modified time: 2020-07-28 21:18:22
 */

import React, { useState } from 'react'
import { ENTER_KEY } from '../constants'

export interface TodoHeaderProps {
  addItem: (value: string) => void
}

const TodoHeader: React.FC<TodoHeaderProps> = (props) => {
  const { addItem } = props
  const [value, setValue] = useState('')

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === ENTER_KEY) {
      addItem(value.trim())
      setValue('')
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
        onKeyDown={(event) => handleKeyDown(event)}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus={true}
      />
    </header>
  )
}

export default TodoHeader
