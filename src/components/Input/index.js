import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTodo } from '../../store/actions/todoAction'
import { ADD_TODO } from '../../constant/actionTypes'

import styles from './Input.module.scss'

const Input = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const addTodoHandler = () => {
    console.log(inputValue)
    dispatch(addTodo(inputValue))
    setInputValue('')
  }

  return (
    <div className={styles.Input}>
      <input
        type="text"
        placeholder="type your todo"
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        value={inputValue}
      />
      <button onClick={addTodoHandler}>Add</button>
    </div>
  )
}

export default Input
