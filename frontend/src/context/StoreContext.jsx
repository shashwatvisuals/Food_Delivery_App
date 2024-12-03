// import axios from "axios";
// import { createContext, useEffect, useState } from "react";

// export const StoreContext = createContext(null)

// const StoreContextProvider = (props) => {

// const [cartItems, setCartItems] = useState({});
// const url = "http://localhost:4000";
// const [token, setToken] = useState("");
// const [food_list, setFoodList] = useState([])

// const addToCart = (itemId) => {
// if (!cartItems [itemId]) {
//     setCartItems((prev) => ({...prev, [itemId]: 1 }))
// }
// else {
// setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))   
// }
// }

// const removeFromCart = (itemId) => {
// setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
// }

// const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//     if (cartItems[item] > 0) {
//     let itemInfo = food_list.find((product) => product._id === i)
//     totalAmount += itemInfo.price * cartItems[item];
//     }
// }
// return totalAmount;
// }

// const fetchFoodList = async () => {
//     const resonse = await axios.get(url+"/api/food/list")
//     setFoodList(resonse.data.data)
// }

// useEffect(() => {

//     async function loadData() {
//         await fetchFoodList()
//         if(localStorage.getItem("token")) {
//             setToken(localStorage.getItem("token"));
//         }
//     }
//     loadData();
// },[])

// return (
//     <StoreContext. Provider value={contextValue}>
//     {props.children}
//     </StoreContext. Provider>
// )
// }
// export default StoreContextProvider;


import React, { createContext, useState } from 'react';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    setBasket((prevBasket) => [...prevBasket, item]);
  };

  return (
    <StoreContext.Provider value={{ basket, addToBasket }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;