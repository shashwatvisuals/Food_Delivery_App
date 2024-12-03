


// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Header from '../components/Header';
// import styles from './pageModule/OrderSuccessful.module.css';

// function OrderSuccessful() {
//   const { state } = useLocation();  // Retrieve state passed from Payment.jsx
//   const { cartItems } = state || { cartItems: [] };
//   const navigate = useNavigate();  // Initialize navigate function

//   const handleBackToHome = () => {
//     navigate('/home');  // Navigate to home page
//   };

//   return (
//     <div>
//       <Header />
//       <div>
//         <h4>Order Placed Successfully</h4>
//         <p>Your order is confirmed and on its way. Get set to savor your chosen delights!</p>
//         <div className={styles.OderSummery}>
//           <h5>Order Summary:</h5>
//           {cartItems.length > 0 ? (
//             cartItems.map((item) => (
//               <p key={item._id}>{item.name} - Quantity: {item.quantity}</p>
//             ))
//           ) : (
//             <p>No items found in your order.</p>
//           )}
//           <button onClick={handleBackToHome}>Back to Home</button> {/* Back to home button */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OrderSuccessful;


// import React, { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Header from '../components/Header';
// import styles from './pageModule/OrderSuccessful.module.css';
// import axios from 'axios';

// function OrderSuccessful() {
//   const { state } = useLocation();
//   const { cartItems } = state || { cartItems: [] };
// //   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate();

//   // Function to send order details to the backend
//   const sendOrderDetails = async () => {
//     const orderData = {
//       items: cartItems.map(item => ({
//         name: item.name,
//         quantity: item.quantity,
//         price: item.price,
//         id: item._id,
//       })),
//       totalAmount: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
//       orderDate: new Date().toISOString(),
//     };

//     try {
//       const response = await axios.post('http://localhost:4000/api/order/place', orderData);
//       console.log('Order placed successfully:', response.data);
//     } catch (error) {
//       console.error('Error placing order:', error);
//     }
//   };

//   // Trigger the API call when the component mounts
//   useEffect(() => {
//     if (cartItems.length > 0) {
//       sendOrderDetails();
//     }
//   }, [cartItems]);

//   const handleBackToHome = () => {
//     navigate('/home');
//   };

//   return (
//     <div>
//       <Header />
//       <div>
//         <h4>Order Placed Successfully</h4>
//         <p>Your order is confirmed and on its way. Get set to savor your chosen delights!</p>
//         <div className={styles.OderSummery}>
//           <h5>Order Summary:</h5>
//           {cartItems.map((item) => (
//             <p key={item._id}>{item.name} - Quantity: {item.quantity}</p>
//           ))}
//           <button onClick={handleBackToHome}>Back to Home</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OrderSuccessful;










// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Header from '../components/Header';
// import styles from './pageModule/OrderSuccessful.module.css';
// import axios from 'axios';

// function OrderSuccessful() {
//   const { state } = useLocation();
//   const { cartItems } = state || { cartItems: [] };
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate();

//   // Function to send order details to the backend
//   const sendOrderDetails = async () => {
//     const orderData = {
//       items: cartItems.map(item => ({
//         name: item.name,
//         quantity: item.quantity,
//         price: item.price,
//         id: item._id,
//       })),
//       totalAmount: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
//       orderDate: new Date().toISOString(),
//     };

//     try {
//       const response = await axios.post('http://localhost:4000/api/order/place', orderData);
//       console.log('Order placed successfully:', response.data);
//     } catch (error) {
//       console.error('Error placing order:', error);
//     }
//   };

//   // Trigger the API call when the component mounts or when cartItems change
//   useEffect(() => {
//     if (cartItems.length > 0 && !isSubmitting) {
//       setIsSubmitting(true);
//       sendOrderDetails();
//     }
//   }, [cartItems, isSubmitting]);

//   const handleBackToHome = () => {
//     navigate('/home');
//   };

//   return (
//     <div>
//       <Header />
//       <div>
//         <h4>Order Placed Successfully</h4>
//         <p>Your order is confirmed and on its way. Get set to savor your chosen delights!</p>
//         <div className={styles.OrderSummary}>
//           <h5>Order Summary:</h5>
//           {cartItems.map((item) => (
//             <p key={item._id}>{item.name} - Quantity: {item.quantity}</p>
//           ))}
//           <button onClick={handleBackToHome}>Back to Home</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OrderSuccessful;





// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Header from '../components/Header';
// import styles from './pageModule/OrderSuccessful.module.css';
// import axios from 'axios';

// function OrderSuccessful() {
//   const { state } = useLocation();
//   const { cartItems } = state || { cartItems: [] };
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [orderPlaced, setOrderPlaced] = useState(false); // New state to track if order has been placed
//   const navigate = useNavigate();

//   // Function to send order details to the backend
//   const sendOrderDetails = async () => {
//     const orderData = {
//       items: cartItems.map(item => ({
//         name: item.name,
//         quantity: item.quantity,
//         price: item.price,
//         id: item._id,
//       })),
//       totalAmount: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
//       orderDate: new Date().toISOString(),
//     };

//     try {
//       const response = await axios.post('http://localhost:4000/api/order/place', orderData);
//       console.log('Order placed successfully:', response.data);
//       setOrderPlaced(true); // Set orderPlaced to true when order is successfully placed
//     } catch (error) {
//       console.error('Error placing order:', error);
//     }
//   };

//   // Trigger the API call when the component mounts or when cartItems change, but only if the order has not been placed
//   useEffect(() => {
//     if (cartItems.length > 0 && !isSubmitting && !orderPlaced) {
//       setIsSubmitting(true);
//       sendOrderDetails();
//     }
//   }, [cartItems, isSubmitting, orderPlaced]); // Add orderPlaced to dependency array

//   const handleBackToHome = () => {
//     navigate('/home');
//   };

//   return (
//     <div>
//       <Header />
//       <div>
//         <h4>Order Placed Successfully</h4>
//         <p>Your order is confirmed and on its way. Get set to savor your chosen delights!</p>
//         <div className={styles.OrderSummary}>
//           <h5>Order Summary:</h5>
//           {cartItems.map((item) => (
//             <p key={item._id}>{item.name} - Quantity: {item.quantity}</p>
//           ))}
//           <button onClick={handleBackToHome}>Back to Home</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OrderSuccessful;







// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Header from '../components/Header';
// import styles from './pageModule/OrderSuccessful.module.css';
// import axios from 'axios';

// function OrderSuccessful() {
//   const { state } = useLocation();
//   const { cartItems, paymentStatus, userAddress } = state || { cartItems: [], paymentStatus: false, userAddress: {} };
//   const navigate = useNavigate();

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Function to send order details to the backend
//   const sendOrderDetails = async () => {
//     const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//     const totalPaid = paymentStatus ? totalAmount : 0;  // Assuming paymentStatus is true if the payment was successful

//     const orderData = {
//       items: cartItems.map(item => ({
//         name: item.name,
//         quantity: item.quantity,
//         price: item.price,
//         id: item._id,
//       })),
//       amount: totalAmount,
//       address: userAddress,  // User's address passed from previous page
//       payment: paymentStatus,  // Payment status
//       totalPaid,  // The total amount paid
//     };

//     try {
//       setIsSubmitting(true);
//       const response = await axios.post('http://localhost:4000/api/order/place', orderData);
//       console.log('Order placed successfully:', response.data);
//       setIsSubmitting(false);
//     } catch (error) {
//       console.error('Error placing order:', error);
//       setIsSubmitting(false);
//     }
//   };

//   // Trigger the API call when the component mounts
//   useEffect(() => {
//     if (cartItems.length > 0) {
//       sendOrderDetails();
//     }
//   }, [cartItems]);

//   const handleBackToHome = () => {
//     navigate('/product');
//   };

//   return (
//     <div>
//       <Header />
//       <div>
//         <h4>Order Placed Successfully</h4>
//         <p>Your order is confirmed and on its way. Get set to savor your chosen delights!</p>
//         <div className={styles.OrderSummary}>
//           <h5>Order Summary:</h5>
//           {cartItems.map((item) => (
//             <p key={item._id}>{item.name} - Quantity: {item.quantity}</p>
//           ))}
//           <button onClick={handleBackToHome}>Back to Home</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OrderSuccessful;



import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import styles from './pageModule/OrderSuccessful.module.css';
import axios from 'axios';

function OrderSuccessful() {
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
      status: "Food Processing", // You can set the default status here if needed
      payment: paymentStatus,  // Payment status (true if paid)
      totalPaid,  // Total amount paid (if paymentStatus is true, otherwise 0)
    };

    try {
      setIsSubmitting(true);
      const response = await axios.post('http://localhost:4000/api/order/place', orderData);
      console.log('Order placed successfully:', response.data);
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error placing order:', error);
      setIsSubmitting(false);
    }
  };

  // Trigger the API call when the component mounts and cartItems are available
  useEffect(() => {
    if (cartItems.length > 0) {
      sendOrderDetails();  // Trigger sending order details once when cartItems are available
    }
  }, [cartItems]);

  const handleBackToHome = () => {
    navigate('/product');
  };

  return (
    <div>
      <Header userName={userName}/>
      <div>
        <h4>Order Placed Successfully</h4>
        <p>Your order is confirmed and on its way. Get set to savor your chosen delights!</p>
        <div className={styles.OrderSummary}>
          <h5>Order Summary:</h5>
          {cartItems.map((item) => (
            <p key={item._id}>{item.name} - Quantity: {item.quantity}</p>
          ))}
          <button onClick={handleBackToHome}>Back to Home</button>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccessful;




