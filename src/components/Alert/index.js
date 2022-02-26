import { useRef } from 'react'
import useOnClickOutside from '../../hooks/useOnClickOutside'

import styles from './alert.module.scss'

const Alert = ({ isAlertActive, setIsAlertActive }) => {
  const alertRef = useRef(null)
  useOnClickOutside(alertRef, () => setIsAlertActive(false))

  return isAlertActive ? (
    <div
      className={styles.Alert}
      onClick={() => setIsAlertActive(false)}
      ref={alertRef}
    >
      <p className={styles['Alert-title']}>You cannot enter a null value.</p>
    </div>
  ) : (
    ''
  )
}

export default Alert
