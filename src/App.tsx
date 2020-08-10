import React, { useState } from 'react'
import TodoFooter from './components/TodoFooter'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import TodoHeader from './components/TodoHeader'
import { v4 as uuid } from 'uuid'

function App() {
  const [dataSource] = useState([
    { id: uuid(), value: 'one', checked: true },
    { id: uuid(), value: 'two', checked: false },
    { id: uuid(), value: 'three', checked: false },
  ])

  return (
    <>
      <section className="todoapp">
        <TodoHeader></TodoHeader>
        <TodoList
          dataSource={dataSource}
          renderItem={(item, index) => <TodoItem {...item} index={index} key={item.id}></TodoItem>}
        ></TodoList>
        <TodoFooter></TodoFooter>
      </section>
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>
          Template by <a href="http://sindresorhus.com">Sindre Sorhus</a>
        </p>
        <p>
          Created by <a href="http://todomvc.com">you</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  )
}

export default App
