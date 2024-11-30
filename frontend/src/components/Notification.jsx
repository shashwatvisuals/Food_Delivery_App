import React from 'react'
import styles from './componentModule/Notification.module.css'
function Notification() {
  return (

      <div className={styles.introContainer}>

        <div className={styles.leftContainer}>
          <p>Order Restaurant food, takeaway and groceries.</p>
          <h1>Feast Your Senses,<br />
          <span>Fast and Fresh </span></h1>
          <p>Enter a postcode to see what we deliver</p>
          <div id={styles.search}>
                    <div>e.g. EC4R 3TE</div>
                    <button>Search</button>
            </div>
            </div>
        <div className={styles.image1}>
          <img src="/assets/img1.png" alt="image" />
        </div>
        <div className={styles.image2}>
<img src="/assets/img2.png" alt="" />
</div>

      <div className={styles.rightDiv}>
      <div className={styles.notification1}>
      <span>1</span>
      <div className={styles.notificationdiv}>
        <div className={styles.notiLogodiv}>
          <img src="/assets/logo.png" alt="logo" />
          <p>now</p>
        </div>
        <h4>We’ve Received your order!</h4>
        <p>Awaiting Restaurant acceptance </p>
      </div>
      </div>

      <div className={styles.notification2}>
      <span>2</span>
      <div className={styles.notificationdiv}>
      <div className={styles.notiLogodiv}>
          <img src="/assets/logo.png" alt="logo" />
          <p>now</p>
        </div>
        <h4>Order Accepted! </h4>
        <p>Your order will be delivered shortly</p>
      </div>
      </div>

      <div className={styles.notification3}>
      <span>3</span>
      <div className={styles.notificationdiv}>
      <div className={styles.notiLogodiv}>
          <img src="/assets/logo.png" alt="logo" />
          <p>now</p>
        </div>
        <h4>Your rider's nearby</h4>
        <p>they're almost there - get ready </p>
      </div>
      </div>
      </div>
      </div>
  )
}

export default Notification
