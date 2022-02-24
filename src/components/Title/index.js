import React from 'react'

import styles from './title.module.scss'

const Title = ({ children }) => {
  return <div className={styles.Title}>{children}</div>
}

export default Title
