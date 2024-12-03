import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";
import styles from './pageModule/Checkout.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav';
import SimilarRestaurants from '../components/SimilarRestaurents';

function Checkout() {
    const userName = localStorage.getItem("userName");
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { cartItems } = state || { cartItems: [] };

  const goToAddress = () => {
    navigate('/address', { state });
  };

  const handleGoBack = () => {
    navigate('/product', { state });
  };

  // const goToPayment = () => {
  //   navigate('/payment', { state }); // Pass cartItems to Payment.jsx
  // };

  const goToPayment = () => {
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + 10;
    navigate('/payment', { state: { ...state, subtotal } }); // Pass subtotal to Payment.jsx
  };
  

  return (
    <div className={styles.mainDiv}>
      <MobileNav />
      <div id={styles.header}>
      <Header userName={userName}/>
      </div>
      <div>
        <div onClick={handleGoBack} className={styles.goBack}><h2><FaArrowLeft id={styles.goBack}/> Your Order Details</h2></div>
        <div className={styles.orderDetailsNAddressDiv}>
          <div className={styles.orderDetails}>
            {cartItems.map((item) => (
              <div key={item._id} >
                <div className={styles.itemCard}>
                <img src={item.imageUrl} alt={item.name} className={styles.itemImage} />
                <div>
                  <div className={styles.nameNPrice}>
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                </div>
                <p>{item.quantity}X item</p>
                </div>
                </div>
              </div>
            ))}
            <div className={styles.notes}>
              <p>Notes</p>
              <div>Add order notes</div>
            </div>
          </div>

          <div className={styles.AddressNSubtotalDiv}>
            <div className={styles.AddressDiv} onClick={goToAddress}>
              {state?.defaultAddress ? (
                <div className={styles.addressNlogo}>
                <span><IoLocationSharp id={styles.locationLogo}/></span>
                <div className={styles.address}>
                  <p>Delivery Address </p>
                  <div className={styles.defaultAddress}>
                  <p>{state.defaultAddress.name}</p>
                  <p>{state.defaultAddress.address.split(',')[0]}, {state.defaultAddress.state}</p>
                  </div>
                  </div>
                </div>
              ) : (
                <p>Delivery Address</p>
              )}
            </div>
            <div>
              <div className={styles.taxablebill}>
                <p>Items <span>₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</span></p>
                <p>Sales Tax <span>₹10</span></p>
              </div>
              <div className={styles.subtotal}>
                <p>Subtotal ({cartItems.length} items) <span>₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + 10}</span></p>
              </div>
              <button className={styles.submitButton} onClick={goToPayment}>Choose Payment Method</button>
            </div>
          </div>
        </div>
      </div>
      <div id={styles.similarRestaurants}>
      <SimilarRestaurants />
      </div>
      <div id={styles.footer}>
        <Footer/>
      </div>
    </div>
  );
}

export default Checkout;



