import React from 'react'
import { FaApple } from "react-icons/fa";
import styles from './componentModule/About.module.css'
function About() {
    const playStoreLogo = "https://github.com/user-attachments/assets/4b426798-1071-4bd2-9661-b01e8b1ad12c"
  return (
    <div className={styles.mainContainer}>
        <div className={styles.hiddenContainer}></div>
      <div className={styles.banner}>
        <img src="../assets/laughing.png" alt="image" />
      </div>

      <div className={styles.rightDiv}>
        <div className={styles.appLogo}>
        <img  src="logo.png" alt="logo" />
        <span>ing is more</span>
        </div>
        <h1><span id={styles.underLine}>Personalised</span> & Instant</h1>
        <p>Download the Order.uk app for faster ordering</p>
        <div className={styles.bothButton}>
                    <button className={styles.downloadButton}>
                        <FaApple className={styles.icon}/>
                        <div className={styles.buttonName}>
                            <p>Download on the</p>
                            <h3>App Store</h3>
                        </div>
                    </button>
                    <button className={styles.downloadButton}>
                        <img id={styles.playStoreIcon} src={playStoreLogo} alt="logo" className={styles.icon}/>
                        <div className={styles.buttonName}>
                            <p>Get it on</p>
                            <h3>Google Play</h3>
                        </div>
                    </button>
                </div>
                <div id={styles.bannerM}>
        <img src="../assets/laughing.png" alt="image" />
      </div>
      </div>
    </div>
  )
}

export default About
