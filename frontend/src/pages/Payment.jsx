import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './pageModule/Payment.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaWallet } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineCircle } from "react-icons/md";
import { RiAddFill } from "react-icons/ri";
import MobileNav from '../components/MobileNav';

function Payment() {
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { cartItems } = state || { cartItems: [] };
  const { subtotal } = state || {};

  const handleProceedPayment = () => {

    navigate('/order-successful', { state: { cartItems } });
  };

  const handleGoBack = () => {
    navigate('/checkout', { state });
  };

  return (
  <div className={styles.mainDiv}>
    <MobileNav />
    <div id={styles.header}>
    <Header userName={userName}/>
    </div>
    <div>
      <div id={styles.goBack} onClick={handleGoBack}><h2><FaArrowLeft /> Choose and Pay</h2>
      </div>
      <div className={styles.paymentMethodsNPay}>
        <div className={styles.paymentMethods}>
          <div id={styles.wallet} className={styles.paymentMethodsDiv}>
            <span><FaWallet /></span>
            <div className={styles.flexdRow}>
            <div>
              <h4>Wallet</h4>
              <p>Available balance: ₹300</p>
            </div>
            <div id={styles.arrow}><MdKeyboardArrowRight /></div>
            </div>
          </div>
          
          <div className={`${styles.card} ${styles.paymentMethodsDiv}`}>
            <h3>M</h3>
            <div className={styles.flexdRowCard}>
            <p>MaestroKard</p>
            <span><MdOutlineCircle id={styles.circle}/></span>
            </div>
          </div>

          <div className={`${styles.card} ${styles.paymentMethodsDiv}`}>
            <h3>P</h3>
            <div className={styles.flexdRowCard}> 
            <p>Paypal</p>
            <span><MdOutlineCircle id={styles.circle}/></span>
            </div>
          </div>

          <div className={`${styles.card} ${styles.paymentMethodsDiv}`}>
            <h3>S</h3>
            <div className={styles.flexdRowCard}>
            <p>Stripe</p>
            <span><MdOutlineCircle id={styles.circle}/></span>
            </div>
          </div>

          <div id={styles.addCard} className={styles.paymentMethodsDiv}>
            <div><RiAddFill id={styles.plus}/></div>
            <p>Add Debit Card</p>
          </div>
        </div>

        <div>
          <div className={styles.paymentDetails}>
            <div className={styles.totalPayedAmount}>
            <p>Amount to be payed</p>
            <h3>₹{subtotal}</h3>
            </div>
            <button onClick={handleProceedPayment}>Proceed Payment</button>
          </div>
        </div>
      </div>
    </div>
    <div id={styles.footer}>
    <Footer />
    </div>
  </div>
  );
}

export default Payment;

// #FFE8CE
//#2D3748