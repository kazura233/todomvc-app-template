/*
 * @Author: kazura233
 * @Date: 2020-07-28 16:39:53
 * @Last Modified by: kazura233
 * @Last Modified time: 2020-07-28 23:19:28
 */

import React from 'react'
import classnames from 'classnames'
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants'

export interface TodoFooterProps {
  activeCount: number
  completedCount: number
  clearCompleted: () => void
  nowShowing: string
  setNowShowing: (nowShowing: string) => void
}

const TodoFooter: React.FC<TodoFooterProps> = (props) => {
  const { activeCount, completedCount, clearCompleted, nowShowing, setNowShowing } = props

  const pluralize = (word: string, count: number) => word + (count === 1 ? '' : 's')

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> {pluralize('item', activeCount)} left
      </span>
      <ul className="filters">
        <li>
          <a
            className={classnames({ selected: nowShowing === ALL_TODOS })}
            onClick={() => setNowShowing(ALL_TODOS)}
            href="#/"
          >
            All
          </a>
        </li>
        <li>
          <a
            className={classnames({ selected: nowShowing === ACTIVE_TODOS })}
            onClick={() => setNowShowing(ACTIVE_TODOS)}
            href="#/active"
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={classnames({ selected: nowShowing === COMPLETED_TODOS })}
            onClick={() => setNowShowing(COMPLETED_TODOS)}
            href="#/completed"
          >
            Completed
          </a>
        </li>
      </ul>
      <button
        className="clear-completed"
        style={{ display: completedCount > 0 ? 'inline-block' : 'none' }}
        onClick={() => clearCompleted()}
      >
        Clear completed
      </button>
    </footer>
  )
}

export default TodoFooter
