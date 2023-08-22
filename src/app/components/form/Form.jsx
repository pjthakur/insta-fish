"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
const Form = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    setPass("");
    setUsername("");
  }
  
  return (
    <div className={styles.formOuter}>
        <form className={styles.form} onSubmit={handleSubmit}>
        <input type='text' placeholder='Phone number, username or email' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        <input type='password' placeholder='Password' value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
        <button type='submit' >Log in</button>
        </form>
    </div>
  )
}

export default Form