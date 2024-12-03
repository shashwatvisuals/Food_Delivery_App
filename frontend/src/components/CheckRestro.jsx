import React from 'react'
import styles from '../components/componentModule/CheckRestro.module.css'
import { IoIosArrowDroprightCircle } from "react-icons/io";

function CheckRestro() {
  return (
    <div id={styles.checkRestro}>
    <p>Order Restaurant food, takeaway and groceries</p>
    <h1>Feast Your Senses, <br /><span>Fast and Fresh</span></h1>
    <p>Enter a postcode to see what aw deliver</p>
    <div>
      <p>e.g. EC4R 3TE</p>
      <button><IoIosArrowDroprightCircle id={styles.rightArrrow}/></button>
      </div>
  </div>    
  )
}

export default CheckRestro
