/*
 * @Author: kazura233
 * @Date: 2020-07-28 16:39:44
 * @Last Modified by: kazura233
 * @Last Modified time: 2020-07-29 15:11:36
 */

import React, { useState, useEffect, useMemo } from 'react'
import TodoFooter from './components/TodoFooter'
import TodoList from './components/TodoList'
import TodoItem, { Item } from './components/TodoItem'
import TodoHeader from './components/TodoHeader'
import { STORE_NAMESPACE, ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from './constants'
import { v4 as uuid } from 'uuid'

const routerMap = new Map([
  ['/', ALL_TODOS],
  ['/active', ACTIVE_TODOS],
  ['/completed', COMPLETED_TODOS],
])

const App = () => {
  /**
   * 当前页面所展示的类目
   */
  const [nowShowing, setNowShowing] = useState(
    routerMap.get(window.location.hash.slice(1)) || ALL_TODOS
  )

  /**
   * 所有数据
   */
  const [dataSource, setDataSource] = useState<Array<Item>>(
    JSON.parse(localStorage.getItem(STORE_NAMESPACE) || '[]') as Array<Item>
  )

  /**
   * 当前要展示的数据
   */
  const shownDataSource = useMemo(
    () =>
      dataSource.filter((item) => {
        switch (nowShowing) {
          case ACTIVE_TODOS:
            return !item.checked
          case COMPLETED_TODOS:
            return item.checked
          default:
            return true
        }
      }),
    [dataSource, nowShowing]
  )

  /**
   * 数据发生变化，自动保存。
   */
  useEffect(() => {
    localStorage.setItem(STORE_NAMESPACE, JSON.stringify(dataSource))
  }, [dataSource])

  /**
   * 未完成数量
   */
  const activeCount = useMemo(
    () => dataSource.reduce((count, item) => (item.checked ? count : count + 1), 0),
    [dataSource]
  )

  /**
   * 增加
   * @param value
   */
  const addItem = (value: string) => {
    setDataSource(
      dataSource.concat({
        id: uuid(),
        value,
        checked: false,
      })
    )
  }

  /**
   * 更新
   * @param id
   * @param cover
   */
  const changeItem = (id: string, cover: Partial<Item>) => {
    setDataSource(dataSource.map((item) => (item.id !== id ? item : { ...item, ...cover })))
  }

  /**
   * 保存
   * @param id
   * @param value
   */
  const save = (id: string, value: string) => {
    changeItem(id, { value })
  }

  /**
   * 切换
   * @param id
   * @param checked
   */
  const toggle = (id: string, checked: boolean) => {
    changeItem(id, { checked })
  }

  /**
   * 全部切换
   * @param checked
   */
  const toggleAll = (checked: boolean) => {
    setDataSource(dataSource.map((item) => ({ ...item, checked })))
  }

  /**
   * 销毁
   * @param id
   */
  const destroy = (id: string) => {
    setDataSource(dataSource.filter((item) => item.id !== id))
  }

  /**
   * 清除已经完成
   */
  const clearCompleted = () => {
    setDataSource(dataSource.filter(({ checked }) => !checked))
  }

  return (
    <>
      <section className="todoapp">
        <TodoHeader addItem={addItem}></TodoHeader>
        <TodoList
          dataSource={shownDataSource}
          renderItem={(item, index) => (
            <TodoItem
              {...item}
              index={index}
              key={item.id}
              save={save}
              toggle={toggle}
              destroy={destroy}
            ></TodoItem>
          )}
          toggleAll={toggleAll}
          activeCount={activeCount}
        ></TodoList>
        <TodoFooter
          nowShowing={nowShowing}
          setNowShowing={setNowShowing}
          activeCount={activeCount}
          completedCount={dataSource.length - activeCount}
          clearCompleted={clearCompleted}
        ></TodoFooter>
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
