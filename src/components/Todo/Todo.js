import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteAsyncTodo, editAsyncTodo } from '../../store/actions/todoAction'
import useOnClickOutside from '../../hooks/useOnClickOutside'

import { AiOutlineCloseCircle, AiOutlineCheck } from 'react-icons/ai'
import { VscDebugRestart } from 'react-icons/vsc'

import styles from './todo.module.scss'

const Todo = ({ todo }) => {
  const dispatch = useDispatch()
  const inputEl = useRef(null)
  const [titleEditMode, setTitleEditMode] = useState(false)
  const [currentTitle, setCurrentTitle] = useState(todo.title)

  useEffect(() => {
    if (titleEditMode && inputEl.current) {
      inputEl.current.focus()
    }
    if (!titleEditMode && inputEl !== null) {
      const newTodo = { ...todo, title: currentTitle }
      dispatch(editAsyncTodo(newTodo))
    }
  }, [inputEl, titleEditMode])

  useOnClickOutside(inputEl, () => setTitleEditMode(false))

  const currentTitleHandler = (title) => {
    setCurrentTitle(title)
  }

  const editTodoHandler = () => {
    const newTodo = { ...todo, isCompleted: !todo.isCompleted }
    dispatch(editAsyncTodo(newTodo))
  }

  const removeTodoHandler = (id) => {
    dispatch(deleteAsyncTodo(id))
  }

  const editModeHandler = () => {
    setTitleEditMode(true)
  }

  return (
    <div
      className={`${styles.Todo} ${todo.isCompleted ? styles.completed : ''} 
      ${titleEditMode ? styles.editMode : ''}`}
    >
      <div className={styles['Todo-info']} onClick={editModeHandler}>
        {titleEditMode ? (
          <textarea
            ref={inputEl}
            onFocus={(e) =>
              // add cursor end of the text
              e.currentTarget.setSelectionRange(
                e.currentTarget.value.length,
                e.currentTarget.value.length
              )
            }
            type="text"
            value={currentTitle}
            onChange={(e) => {
              currentTitleHandler(e.target.value)
            }}
            className={styles.editInput}
          />
        ) : (
          todo.title
        )}
      </div>
      <div className={styles['Todo-icons']}>
        <AiOutlineCloseCircle
          className={`${styles['Todo-icons-closeIcon']} ${styles.icon}`}
          onClick={() => {
            removeTodoHandler(todo.id)
          }}
        />
        <button
          onClick={() => {
            editTodoHandler(todo.id)
          }}
        >
          {todo.isCompleted ? (
            <VscDebugRestart
              className={`${styles['Todo-icons-notCompletedIcon']} ${styles.icon}`}
            />
          ) : (
            <AiOutlineCheck
              className={`${styles['Todo-icons-completedIcon']} ${styles.icon}`}
            />
          )}
        </button>
      </div>
    </div>
  )
}

export default Todo
