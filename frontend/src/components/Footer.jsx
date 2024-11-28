import React from 'react'
import styles from './componentModule/Footer.module.css'
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";
import { PiSnapchatLogoBold } from "react-icons/pi";

function Footer() {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.upperContainer}>
            <div className={styles.upperContainerChild}>
                <div>
                    <img id={styles.appLogo} src="./assets/logo.png" alt="logo" />
                </div>
                <div className={styles.bothButton}>
                    <button className={styles.downloadButton}>
                        <FaApple className={styles.icon}/>
                        <div className={styles.buttonName}>
                            <p>Download on the</p>
                            <h3>App Store</h3>
                        </div>
                    </button>
                    <button className={styles.downloadButton}>
                        <img id={styles.playStoreIcon} src="./assets/playStoreLogo.png" alt="logo" className={styles.icon}/>
                        <div className={styles.buttonName}>
                            <p>Get it on</p>
                            <h3>Google Play</h3>
                        </div>
                    </button>
                </div>
                <p>Company # 490039-445, Registered with <br />House of companies.</p>
            </div>

            <div className={styles.upperContainerChild}>
                <h4>Get Exclusive Deals in your Inbox</h4>
                <div className={styles.subscribe}>
                    <div>youremail@gmail.com</div>
                    <button>Subscribe</button>
                </div>
                <p>we wont spam, read our <span className={styles.emailPolicy}>email policy</span></p>
                <div className={styles.socialIcons}>
                    <FaFacebook className={styles.socialIcon}/>
                    <AiFillInstagram className={styles.socialIcon}/>
                    <AiFillTikTok className={styles.socialIcon}/>
                    <PiSnapchatLogoBold className={styles.socialIcon}/>
                </div>
            </div>

            <div className={`${styles.upperContainerChild} ${styles.upperHalfRight}`}>
                <h4>Legal Pages</h4>
                <p>Terms and conditions</p>
                <p>Privacy</p>
                <p>Cookies</p>
                <p>Modern Slavery Statement</p>
            </div>

            <div className={`${styles.upperContainerChild} ${styles.upperHalfRight}`}>
                <h4>Important Links</h4>
                <p>Get help</p>
                <p>Add your restaurant</p>
                <p>Sign up to deliver</p>
                <p>Create a business account</p>
            </div>
        </div>

        <div className={styles.lowerContainer}>
            <div id={styles.lowerLeftContainer}>
                <p>Order.uk Copyright 2024, All Rights Reserved.</p>
            </div>
            <div id={styles.lowerRightContainer}>
                <p>Privacy Policy </p>
                <p>Terms </p>
                <p>Pricing </p>
                <p>Do not sell or share my personal information </p>
            </div>
        </div>
    </div>
  )
}

export default Footer
