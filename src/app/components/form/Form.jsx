import React from 'react'
import styles from './page.module.css'
const Form = () => {
  return (
    <div className={styles.formOuter}>
        <form className={styles.form}>
        <input type='text' placeholder='Phone number, username or email'/>
        <input type='password' placeholder='Password'/>
        <button type='submit'>Log in</button>
        </form>
    </div>
  )
}

export default Form