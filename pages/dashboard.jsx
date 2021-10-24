import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login.module.css'

import Logo from '../public/whitecalhackslogo.png'

export default function Dashboard() {
  return (
    <> 
      <head>
          <title>OpenDoAR</title>
      </head>
      <div className={styles.dashboard}>
      </div>
    </>
  );
}
