import { useDispatch } from 'react-redux'
import { removeTodo, changeStatusTodo } from '../../store/actions/todoAction'

import { AiOutlineCloseCircle, AiOutlineCheck } from 'react-icons/ai'
import { VscDebugRestart } from 'react-icons/vsc'

import styles from './todo.module.scss'

const Todo = ({ todo }) => {
  const dispatch = useDispatch()
  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id))
  }

  const changeStatusHandler = (id) => {
    dispatch(changeStatusTodo(id))
  }

  return (
    <div
      className={`${styles.Todo} ${todo.isCompleted ? styles.completed : ''}`}
    >
      <div className={styles['Todo-info']}>{todo.title}</div>
      <div className={styles['Todo-icons']}>
        <AiOutlineCloseCircle
          className={`${styles['Todo-icons-closeIcon']} ${styles.icon}`}
          onClick={() => {
            removeTodoHandler(todo.id)
          }}
        />
        <button
          onClick={() => {
            changeStatusHandler(todo.id)
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
