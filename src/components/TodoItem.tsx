/*
 * @Author: kazura233
 * @Date: 2020-07-28 16:40:03
 * @Last Modified by: kazura233
 * @Last Modified time: 2020-07-29 15:11:50
 */

import React, { useState, useEffect, useRef } from 'react'
import classnames from 'classnames'
import { ESCAPE_KEY, ENTER_KEY } from '../constants'

export interface Item {
  id: string
  value: string
  checked: boolean
}

export interface TodoItemProps extends Item {
  index: number
  save: (id: string, value: string) => void
  toggle: (id: string, checked: boolean) => void
  destroy: (id: string) => void
}

const TodoItem = (props: TodoItemProps) => {
  const { id, value, checked, save, toggle, destroy } = props

  const [isEditing, setIsEditing] = useState(false)

  const [localValue, setLocalValue] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  const handleDoubleClick = () => {
    setIsEditing(true)
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus()
        inputRef.current.setSelectionRange(localValue.length, localValue.length)
      }
    })
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsEditing(false)
    save(id, localValue.trim())
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // 退出编辑模式，保存内容
    if (event.keyCode === ENTER_KEY) {
      setIsEditing(false)
      save(id, localValue.trim())
    }
    // 退出编辑模式，回滚内容
    if (event.keyCode === ESCAPE_KEY) {
      setIsEditing(false)
      setLocalValue(value)
    }
  }

  return (
    <li
      className={classnames({
        completed: !isEditing && checked,
        editing: isEditing,
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={checked}
          onChange={(event) => toggle(id, event.target.checked)}
        />
        <label onDoubleClick={() => handleDoubleClick()}>{localValue}</label>
        <button className="destroy" onClick={() => destroy(id)}></button>
      </div>
      <input
        className="edit"
        ref={inputRef}
        value={localValue}
        onBlur={(event) => handleBlur(event)}
        onChange={(event) => setLocalValue(event.target.value)}
        onKeyDown={(event) => handleKeyDown(event)}
      />
    </li>
  )
}

export default TodoItem
