import React from 'react'
import styles from './style.css'

class Login extends React.Component {
  render() {
    return (
      <div>
        Please <span className={styles['color-red']}>Login!</span>
      </div>
    )
  }
}

export default Login
