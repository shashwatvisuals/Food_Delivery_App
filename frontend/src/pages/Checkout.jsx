// import React from 'react';
// import { useNavigate,useLocation } from 'react-router-dom';
// import { FaArrowLeft } from 'react-icons/fa';
// import styles from './pageModule/Checkout.module.css';
// import Header from '../components/Header';
// import SimilarRestaurants from '../components/SimilarRestaurents';
// import { toast } from 'react-toastify';

// function Checkout() {
//     const navigate = useNavigate();
//   const location = useLocation();
//   const { state } = useLocation();
//   const { cartItems } = location.state || { cartItems: [] };

//   const goToAddress = () => {
//     navigate('/address', { state }); // Pass cart items to Address.jsx
//   };

//   const handleGoBack = () => {
//     navigate('/product', { state }); // Pass cart items back to Product.jsx
//   };
//   return (
//     <div>
//       <Header />
//       <div>
//         <div onClick={handleGoBack}><h2><FaArrowLeft /> Your Order Details</h2></div>
//         <div className={styles.orderDetailsNAddressDiv}>
//           <div className={styles.orderDetails}>
//             {cartItems.map((item) => (
//               <div key={item._id} className={styles.itemCard}>
//                 <img src={item.imageUrl} alt={item.name} className={styles.itemImage} />
//                 <p>{item.name} - ₹{item.price} x {item.quantity}</p>
//               </div>
//             ))}
//           </div>

//           <div className={styles.AddressNSubtotalDiv}>
//             <div className={styles.AddressDiv} onClick={goToAddress}>{state?.defaultAddress ? (
//           <>
//             <h4>{state.defaultAddress.name}</h4>
//             <p>{state.defaultAddress.address.split(',')[0]}, {state.defaultAddress.state}</p>
//           </>
//         ) : (
//           <p>Address</p>
//         )}</div>
//             <div>
//               <div>
//                 <p>Items <span>₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</span></p>
//                 <p>Sales Tax <span>₹10</span></p>
//               </div>
//               <div className={styles.subtotal}>
//                 <p>Subtotal ({cartItems.length} items) <span>₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + 10}</span></p>
//               </div>
//               <button>Choose Payment Method</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <SimilarRestaurants />
//     </div>
//   );
// }

// export default Checkout;


import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './pageModule/Checkout.module.css';
import Header from '../components/Header';
import SimilarRestaurants from '../components/SimilarRestaurents';
import { toast } from 'react-toastify';

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

  const goToPayment = () => {
    navigate('/payment', { state }); // Pass cartItems to Payment.jsx
  };

  return (
    <div>
      <Header userName={userName}/>
      <div>
        <div onClick={handleGoBack}><h2><FaArrowLeft /> Your Order Details</h2></div>
        <div className={styles.orderDetailsNAddressDiv}>
          <div className={styles.orderDetails}>
            {cartItems.map((item) => (
              <div key={item._id} className={styles.itemCard}>
                <img src={item.imageUrl} alt={item.name} className={styles.itemImage} />
                <p>{item.name} - ₹{item.price} x {item.quantity}</p>
              </div>
            ))}
          </div>

          <div className={styles.AddressNSubtotalDiv}>
            <div className={styles.AddressDiv} onClick={goToAddress}>
              {state?.defaultAddress ? (
                <>
                  <h4>{state.defaultAddress.name}</h4>
                  <p>{state.defaultAddress.address.split(',')[0]}, {state.defaultAddress.state}</p>
                </>
              ) : (
                <p>Address</p>
              )}
            </div>
            <div>
              <div>
                <p>Items <span>₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</span></p>
                <p>Sales Tax <span>₹10</span></p>
              </div>
              <div className={styles.subtotal}>
                <p>Subtotal ({cartItems.length} items) <span>₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + 10}</span></p>
              </div>
              <button onClick={goToPayment}>Choose Payment Method</button>
            </div>
          </div>
        </div>
      </div>
      <SimilarRestaurants />
    </div>
  );
}

export default Checkout;



