import styles from './Input.module.scss'

const Input = () => {
  return (
    <div className={styles.Input}>
      <input type="text" placeholder="type your todo" />
      <button>Add</button>
    </div>
  )
}

export default Input
