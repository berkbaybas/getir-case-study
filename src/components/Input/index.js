import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { postAsyncTodo } from '../../store/actions/todoAction'

import styles from './Input.module.scss'

const Input = ({ setIsAlertActive }) => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const addTodoHandler = () => {
    if (inputValue.length === 0) {
      setIsAlertActive(true)
      return
    }

    dispatch(postAsyncTodo(inputValue))
    setInputValue('')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTodoHandler()
    }
  }

  const inputFormatHandle = () => {
    setInputValue((prevState) => prevState.trim())
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
        onBlur={inputFormatHandle}
      />
      <button onClick={addTodoHandler}>Add</button>
    </div>
  )
}

export default Input
