import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllTodo } from '../../store/actions/todoAction'

import Todo from './Todo'

import styles from './todolist.module.scss'

const TodoList = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state) => state.todo)

  useEffect(() => {
    dispatch(fetchAllTodo())
  }, [dispatch])

  return (
    <div className={styles.TodoList}>
      {items && items.map((item) => <Todo key={item.id} todo={item} />)}
    </div>
  )
}

export default TodoList
