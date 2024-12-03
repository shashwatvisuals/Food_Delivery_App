import React from 'react';
import { TiLocation } from 'react-icons/ti';
import { IoArrowDownCircle } from 'react-icons/io5';
import { FaCircleUser } from 'react-icons/fa6';
import styles from './componentModule/Header.module.css';
import MobileNav from './MobileNav';
import { useNavigate } from 'react-router-dom';

function Header({ onCartClick, userName}) {
  const navigate = useNavigate();
  const handleClick = () => {
    // console.log("you click on userprofile")
    navigate('/profile');
  }
  return (
    <div className={styles.mainContainer}>

    <div className={styles.mobileNavbar}>
    <MobileNav />

      <div id={styles.userNcartDiv}>
          <div onClick={handleClick} id={styles.user}>
            <FaCircleUser id={styles.userLogo} />
            <h4>{userName ? `hey, ${userName.charAt(0).toUpperCase() + userName.slice(1)}` : 'Login/Signup'}</h4>
          </div>
          <div className={styles.cartDiv} onClick={onCartClick}>
            <div className={styles.cartButton}>
              <div id={styles.cartIcon}>
                <img src="https://github.com/user-attachments/assets/6e7605b3-8872-45f6-91ab-a25c8acf03b6" alt="basket" />
                <span>My Cart</span>
              </div>
            </div>
          </div>
      </div>

    </div>

      <div className={styles.topMostDiv}>
        <div id={styles.offers}>
          <div className={styles.flexedRow}>
        <img src="./assets/star.png" alt="" />
        <h5>
          Get 5% Off your first order,{' '}
          <span className={styles.highlight}>Promo: ORDER5</span>
        </h5>
        </div>
        <div className={styles.flexedRow}>
        <div>
          <TiLocation />
        </div>
        <p>
          Regent Street, A4, A4201, London{' '}
          <span className={styles.highlight}>Change Location</span>
        </p>
        </div>
        </div>
        <div id={styles.cartDiv} className={styles.cartDiv} onClick={onCartClick}>
          <div className={styles.cartButton}>
            <div id={styles.cartIcon}>
              <img src="https://github.com/user-attachments/assets/6e7605b3-8872-45f6-91ab-a25c8acf03b6" alt="basket" />
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
        <div>
        <div id={styles.logo}>
          <img src="https://github.com/user-attachments/assets/81431aa1-fb53-47e8-ac4c-7546e57548ed" alt="logo.png" />
        </div>
        </div>
        <div className={styles.navbarLinks}>
          <div id={styles.links}> 
          <h5 id={styles.homeLink}>Home</h5>
          <h5>Browse Menu</h5>
          <h5>Special Offers</h5>
          <h5>Restaurants</h5>
          <h5>Track Order</h5>
          </div>
          <div onClick={handleClick} id={styles.user}>
            <FaCircleUser id={styles.userLogo} />
            <h4>{userName ? `hey, ${userName.charAt(0).toUpperCase() + userName.slice(1)}` : 'Login/Signup'}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

