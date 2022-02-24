import React from 'react'
import { useSelector } from 'react-redux'

import Todo from './Todo'

import styles from './todolist.module.scss'

const TodoList = () => {
  const { items } = useSelector((state) => state.todo)
  return (
    <div className={styles.TodoList}>
      {items.map((item) => (
        <Todo todo={item} />
      ))}
    </div>
  )
}

export default TodoList
