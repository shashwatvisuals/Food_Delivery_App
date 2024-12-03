// import React, { useState } from 'react';
// import { FaArrowLeft } from 'react-icons/fa';
// import Header from '../components/Header';
// import { useNavigate, useLocation } from 'react-router-dom';
// import styles from './pageModule/Payment.module.css'

// function Payment() {
//   return (
//     <div>
//       <Header/>
//       <div>
//       <h2 style={{ cursor: 'pointer' }}>
//           <FaArrowLeft /> Choose and Pay
//           <div>
//           <div className={styles.paymentMethods}>
//             <div>
//                 <h4>Wallet</h4>
//                 <p>Available balance: ₹300</p>
//             </div>
            
//             <div>
//                 <h4>MaestroKard</h4>
//             </div>

//             <div>
//                 <h4>Paypal</h4>
//             </div>

//             <div>
//                 <h4>Stripe</h4>
//             </div>

//             <div className={styles.addDebitCard}>
//                 <h4>Add Debit Card</h4>
//             </div>
//           </div>
//           <div>
//             <p>Amount to be payed<span>₹240</span></p>
//           </div>
//           <button>Proceed Payment</button>
//           </div>
//         </h2>
//       </div>
//     </div>
//   )
// }

// export default Payment

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

