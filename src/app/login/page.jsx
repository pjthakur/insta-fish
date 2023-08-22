import React from 'react'
import styles from './page.module.css'
import Form from '../components/form/Form'
import { AiFillFacebook } from "react-icons/ai";
const page = () => {
  return (
    <div className={styles.login}>
      <div className={styles.logoOuter}>
        <img src='https://static.cdninstagram.com/rsrc.php/v3/yx/r/WtxJZZ3-9ZP.png' className={styles.logo}/>
      </div>
      <Form/>
      <div className={styles.or}>
        <div className={styles.line}/>
        <p>OR</p>
        <div className={styles.line}/>
      </div>
      <div className={styles.facebookOuter}>
        <AiFillFacebook className={styles.facebook}/> 
        <p>Log in with Facebook</p>
      </div>
        <a className={styles.forgot}>Forgot password?</a>
        <p className={styles.sign}>Don't have an account? <a>Sign up</a></p>
        <p className={styles.sign}>Get the app.</p>
        <div className={styles.getApp}>
          <img src='https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png' className={styles.goog}/>
          <img src='https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png' className={styles.goog}/>
        </div>
    </div>
  )
}

export default page