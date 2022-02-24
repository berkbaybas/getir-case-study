import styles from './todo.module.scss'
import { AiOutlineCloseCircle, AiOutlineCheck } from 'react-icons/ai'

const Todo = ({ todo }) => {
  return (
    <div className={styles.Todo}>
      <div className={styles['Todo-info']}>{todo.title}</div>
      <div className={styles['Todo-icons']}>
        <AiOutlineCloseCircle
          className={`${styles['Todo-icons-closeIcon']} ${styles.icon}`}
        />
        <AiOutlineCheck
          className={`${styles['Todo-icons-completedIcon']} ${styles.icon}`}
        />
      </div>
    </div>
  )
}

export default Todo
