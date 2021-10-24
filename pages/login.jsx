import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login.module.css'

import router from 'next/router'

import Logo from '../public/whitecalhackslogo.png'

export default function Login() {
  return (
    <> 
      <head>
          <title>OpenDoAR</title>
      </head>
      <div className={styles.login}>
        <div id={styles.logocontainer}>
          <div id={styles.logo}></div>
        </div>
        

        <h1>
          OpenDoAR
        </h1>

        <h3>Email</h3>
        <input className={styles.input} placeholder="Email Address"/>
        <h3>Password</h3>
        <input className={styles.input} placeholder="Password"/>

        <div onClick={()=>router.push('dashboard')} className={styles.loginButton}>
          Sign In
        </div>
        
      </div>
    </>
  );
}
