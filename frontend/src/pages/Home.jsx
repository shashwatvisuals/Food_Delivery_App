import React from 'react'
import Header from '../components/Header'
import Notification from '../components/Notification'
import DealsNCatagory from '../components/DealsNCatagory'
import Restaurants from '../components/Restaurants'
import About from '../components/About'
import JoinUs from '../components/JoinUs'
import styles from './pageModule/Home.module.css'

function Home() {
  const userName = localStorage.getItem("userName");
  return (
    <div className={styles.mainContainer}>
      <Header userName={userName}/>
      <Notification />
      <DealsNCatagory />
      <Restaurants />
      <About />
      <JoinUs />
    </div>
  )
}

export default Home
