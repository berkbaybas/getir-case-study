import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTodo } from '../../store/actions/todoAction'

import styles from './Input.module.scss'

const Input = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const addTodoHandler = () => {
    console.log(inputValue)
    dispatch(addTodo(inputValue))
    setInputValue('')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTodoHandler()
    }
  }

  return (
    <div className={styles.Input}>
      <input
        type="text"
        placeholder="type your todo"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addTodoHandler}>Add</button>
    </div>
  )
}

export default Input
