import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';
import styles from './pageModule/OrderSuccessful.module.css';
import { FiCheck } from "react-icons/fi";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";



function OrderSuccessful() {
  const backendURL = import.meta.env.VITE_BACKEND_URL

  const userName = localStorage.getItem("userName");
  const { state } = useLocation();
  const { cartItems, paymentStatus, userAddress } = state || { cartItems: [], paymentStatus: false, userAddress: {} };
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to send order details to the backend
  const sendOrderDetails = async () => {
    if (isSubmitting) return;  // Prevent multiple submissions
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalPaid = paymentStatus ? totalAmount : 0;  // If paymentStatus is true, set totalPaid to totalAmount, else set it to 0

    const orderData = {
      items: cartItems.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        id: item._id,
      })),
      amount: totalAmount,
      address: userAddress,  // User's address passed from previous page
      status: "Food Processing", 
      payment: paymentStatus,  // Payment status (true if paid)
      totalPaid,  
    };

    try {
      toast.success('Order Placed Successfully');
      setIsSubmitting(true);
      const response = await axios.post(`${backendURL}/api/order/place`, orderData);
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error placing order:', error);
      setIsSubmitting(false);
    }
  };

  // Trigger the API call when the component mounts and cartItems are available
  useEffect(() => {
    if (cartItems.length > 0) {
      sendOrderDetails();
    }
  }, [cartItems]);

  const handleBackToHome = () => {
    navigate('/home');
  };

  return (
    <div>
      <ToastContainer />
      <MobileNav />
      <div className={styles.parent}>
      <div id={styles.header}>
      <Header userName={userName}/>
      </div>
      <div className={styles.mainDiv}>
        <div id={styles.checkLogoDiv}><FiCheck id={styles.checkLogo}/></div>
        <h4>Order Placed Successfully</h4>
        <p id={styles.dialouge}>Your order is confirmed and on its way. Get set to savor your chosen delights!</p>
        <div className={styles.OrderSummary}>
          {cartItems.map((item) => (
            <p key={item._id}>{item.name} - Quantity: {item.quantity}</p>
          ))}
          <button onClick={handleBackToHome}>Back to Home</button>
        </div>
      </div>
      <div id={styles.footer}>
      <Footer />
      </div>
    </div>
    </div>
  );
}

export default OrderSuccessful;




