import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import router from 'next/router'

export default function Home() {
  return (
    <> 
      <head>
          <title>OpenDoAR</title>
      </head>
      <div className={styles.home}>
        <div id={styles.logocontainer}>
          <div id={styles.logo}></div>
        </div>
        

        <h1>
          OpenDoAR
        </h1>
        

        <div onClick={()=>router.push('login')} className={styles.loginButton}>
          Sign In
        </div>
      </div>
    </>
  );
}
