import React from 'react'
import { useSelector } from 'react-redux'

import Todo from './Todo'

import styles from './todolist.module.scss'

const TodoList = () => {
  const { items } = useSelector((state) => state.todo)
  console.log(items.length)
  return (
    <div className={styles.TodoList}>
      {items.length > 0 ? (
        items.map((item) => <Todo key={item.id} todo={item} />)
      ) : (
        <p>There is no todo to display..</p>
      )}
    </div>
  )
}

export default TodoList
