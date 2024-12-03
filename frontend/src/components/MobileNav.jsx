import React from 'react'
import styles from '../components/componentModule/MobileNav.module.css'
import { GiHamburgerMenu } from "react-icons/gi";

function MobileNav() {
  return (
        <div className={styles.logoNUser}>
        <div id={styles.logo}>
          <img src="https://github.com/user-attachments/assets/81431aa1-fb53-47e8-ac4c-7546e57548ed" alt="logo.png" />
        </div>
        <div id={styles.hamburger}><GiHamburgerMenu id={styles.hamburgerLogo}/>
        </div>
    </div>
  )
}

export default MobileNav
