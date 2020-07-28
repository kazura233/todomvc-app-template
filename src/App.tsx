import React, { useState, useEffect } from 'react'
import './App.css'
import TodoFooter from './components/TodoFooter'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import TodoHeader from './components/TodoHeader'

function App() {
  const [dataSource] = useState([
    { id: 0, value: 'one', checked: true },
    { id: 1, value: 'two', checked: false },
    { id: 2, value: 'three', checked: false },
  ])

  useEffect(() => {
    require('todomvc-common/base')
  }, [])

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
