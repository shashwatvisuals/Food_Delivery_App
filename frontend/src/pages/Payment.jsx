import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './pageModule/Checkout.module.css';
import Header from '../components/Header';
import SimilarRestaurants from '../components/SimilarRestaurents';
import { toast } from 'react-toastify';

function Payment() {
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { cartItems } = state || { cartItems: [] };

  const handleProceedPayment = () => {

    navigate('/order-successful', { state: { cartItems } });
  };

  const handleGoBack = () => {
    navigate('/checkout', { state });
  };

  return (
    <div>
      <Header userName={userName}/>
      <div>
        <div onClick={handleGoBack}><h2><FaArrowLeft /> Your Order Details</h2></div>
        <div className={styles.paymentDetails}>
          <h2>Choose Payment Method</h2>
          <button onClick={handleProceedPayment}>Proceed Payment</button>
        </div>
      </div>
      <SimilarRestaurants />
    </div>
  );
}

export default Payment;

