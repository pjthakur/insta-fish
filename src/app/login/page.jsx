"use client"
import React, { useContext } from 'react'
import styles from './page.module.css'
import Form from '../components/form/Form'
import { AiFillFacebook } from "react-icons/ai";
import Image from 'next/image';
import { AppContext } from '../components/Context';
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const {start} = useContext(AppContext);
  if(start===false){
    router.push("/")
  }
  if(start ===true){

  
  return (
    <div className={styles.login}>
      <div className={styles.logoOuter}>
        <Image width={180} height={180} src='https://static.cdninstagram.com/rsrc.php/v3/yx/r/WtxJZZ3-9ZP.png' className={styles.logo}/>
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
          <Image width={130} height={20} src='https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png' className={styles.goog}/>
          <Image width={130} height={20} src='https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png' className={styles.goog}/>
        </div>
        <div className={styles.foot}>
          <p>Meta</p>
          <p>About</p>
          <p>Blog</p>
          <p>Jobs</p>
          <p>Help</p>
          <p>API</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
        <p className={styles.copyright}>© 2023 Instagram from Meta</p>
    </div>
  )
  }
}

export default page