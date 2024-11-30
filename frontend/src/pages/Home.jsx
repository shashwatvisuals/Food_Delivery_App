import React from 'react'
import Header from '../components/Header'
import Notification from '../components/Notification'
import DealsNCatagory from '../components/DealsNCatagory'
import styles from './pageModule/Home.module.css'

function Home() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <Notification />
      <DealsNCatagory />
    </div>
  )
}

export default Home
