import React from 'react'
import { HiLocationMarker } from "react-icons/hi";
import { BiSolidContact } from "react-icons/bi";
import { LuClock10 } from "react-icons/lu";
import styles from "./componentModule/Info.module.css"

function Info() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.card}>
            <h2><HiLocationMarker/>Delivery information</h2>
        <div>
        <p><span>Monday:</span>12:00 AM–3:00 AM, 8:00 AM–3:00 AM</p>
        <p><span>Tuesday:</span>8:00 AM–3:00 AM</p>
        <p><span>Wednesday:</span>8:00 AM–3:00 AM</p>
        <p><span>Thursday:</span>8:00 AM–3:00 AM</p>
        <p><span>Friday:</span>8:00 AM–3:00 AM</p>
        <p><span>Saturday:</span>8:00 AM–3:00 AM</p>
        <p><span>Sunday:</span>8:00 AM–12:00 AM</p>
        <p><span>Estimated time until delivery:</span>20 min</p>     
        </div>
      </div>

      <div className={styles.card}>
        <h2><BiSolidContact/>Contact information</h2>
        <div>
        <p>If you have allergies or other dietary</p>
        <p>restrictions, please contact the restaurant. The </p> <p>restaurant will provide food-specific </p> 
        <p> information upon request.</p>
        <span>Phone number</span>
        <p>+934443-43</p>
        <span>Website</span>
        <p>http://mcdonalds.uk/</p>     
        </div>
      </div>

      <div id={styles.rightMostCard} className={styles.card}>
            <h2><LuClock10/>Operational Times</h2>
        <div>
            <p><span>Monday:</span>8:00 AM–3:00 AM</p>
            <p><span>Tuesday:</span>8:00 AM–3:00 AM</p>
            <p><span>Wednesday:</span>8:00 AM–3:00 AM</p>
            <p><span>Thursday:</span>8:00 AM–3:00 AM</p>
            <p><span>Friday:</span>8:00 AM–3:00 AM</p>
            <p><span>Saturday:</span>8:00 AM–3:00 AM</p>
            <p><span>Sunday:</span>8:00 AM–3:00 AM</p> 
        </div>
      </div>
    </div>
  )
}

export default Info



// Phone number
// +934443-43
// Website
// http://mcdonalds.uk/
