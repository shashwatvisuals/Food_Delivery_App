import React from 'react'
import Header from '../components/Header'
import Notification from '../components/Notification'
import DealsNCatagory from '../components/DealsNCatagory'
import Restaurants from '../components/Restaurants'
import About from '../components/About'
import JoinUs from '../components/JoinUs'
import Footer from '../components/Footer'
import styles from './pageModule/Home.module.css'
import CheckRestro from '../components/CheckRestro'

function Home() {
  const userName = localStorage.getItem("userName");
    
  return (
    <div className={styles.mainContainer}>
      <Header userName={userName}/>
      <CheckRestro />
      <Notification />
      <DealsNCatagory />
      <Restaurants />
      <About />
      <JoinUs />
      <Footer />

    </div>
  )
}

export default Home
