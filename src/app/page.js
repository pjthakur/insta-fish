"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useContext, useState } from 'react'
import { AppContext } from './components/Context'
import { useRouter } from "next/navigation";

export default function Home() {
  const {start, setStart} = useContext(AppContext)
  const router  = useRouter();
  console.log(start)
  const handleStart = () =>{
    setStart(!start);
    console.log(start);
  }
  if(start === true){
    router.push("/login");
  }
  if(start ===false){
    return (
      <main className={styles.main}>
        <h1 className={styles.heading}>The Friendship Test</h1>
        <p className={styles.para}>*Get your Friendship score <span className={styles.name}>Yash</span> now*</p>
        <button onClick={handleStart} className={styles.mainButton}>Start the quiz</button>
      </main>
    )
  }
}
