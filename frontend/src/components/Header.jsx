// import React from 'react'
// import { TiLocation } from "react-icons/ti";
// import { IoArrowDownCircle } from "react-icons/io5";
// import { FaCircleUser } from "react-icons/fa6";
// import styles from "./componentModule/Header.module.css"

// function Header() {
//   return (
// <div className={styles.mainContainer}>
//       <div className={styles.topMostDiv}>
//         <img src="./assets/star.png" alt="" />
//         <h5> Get 5% Off your first order,<span className={styles.highlight}>Promo: ORDER5</span></h5>
//         <div><TiLocation /></div>
//         <p>Regent Street, A4, A4201, London <span className={styles.highlight}>Change Location</span></p>
//         <div className={styles.cartDiv}>
//         <div className={styles.cartButton}>
//           <div id={styles.cartIcon}>
//         <img src="../public/assets/Basket.png" alt="basket" />
//         <span>My Cart</span>
//         </div>
//         <div id={styles.verticalLines}></div>
//         <div >
//         <IoArrowDownCircle id={styles.downArrow}/>
//         </div>
//         </div>
//         </div>
//       </div>
//       <div className={styles.navbar}>
//         <div id={styles.logo}>
//         <img src="../public/assets/logo.png" alt="logo.png" />
//         </div>
//         <div className={styles.navbarLinks}>
//           <h5 id={styles.homeLink}>Home</h5>
//           <h5>Browse Menu</h5>
//           <h5>Special Offers</h5>
//           <h5>Restaurants</h5>
//           <h5>Track Order</h5>
//           <div id={styles.user}>
//           <FaCircleUser id={styles.userLogo}/>
//           <h4>Login/Signup</h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header

import React from 'react';
import { TiLocation } from 'react-icons/ti';
import { IoArrowDownCircle } from 'react-icons/io5';
import { FaCircleUser } from 'react-icons/fa6';
import styles from './componentModule/Header.module.css';

function Header({ onCartClick, userName}) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topMostDiv}>
        <img src="./assets/star.png" alt="" />
        <h5>
          Get 5% Off your first order,{' '}
          <span className={styles.highlight}>Promo: ORDER5</span>
        </h5>
        <div>
          <TiLocation />
        </div>
        <p>
          Regent Street, A4, A4201, London{' '}
          <span className={styles.highlight}>Change Location</span>
        </p>
        <div className={styles.cartDiv} onClick={onCartClick}>
          <div className={styles.cartButton}>
            <div id={styles.cartIcon}>
              <img src="../public/assets/Basket.png" alt="basket" />
              <span>My Cart</span>
            </div>
            <div id={styles.verticalLines}></div>
            <div>
              <IoArrowDownCircle id={styles.downArrow} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navbar}>
        <div id={styles.logo}>
          <img src="../public/assets/logo.png" alt="logo.png" />
        </div>
        <div className={styles.navbarLinks}>
          <h5 id={styles.homeLink}>Home</h5>
          <h5>Browse Menu</h5>
          <h5>Special Offers</h5>
          <h5>Restaurants</h5>
          <h5>Track Order</h5>
          <div id={styles.user}>
            <FaCircleUser id={styles.userLogo} />
            <h4>{userName ? `hey, ${userName.charAt(0).toUpperCase() + userName.slice(1)}` : 'Login/Signup'}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

