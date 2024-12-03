import Login from "./pages/Login"
import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Address from "./pages/Address";
import Payment from "./pages/Payment";
import Header from "./components/Header";
import OrderSuccessful from "./pages/OrderSuccessful";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css"
import Profile from "./pages/Profile";



function App() {


  return (
    <Router className={styles.mainPage}>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/address" element={<Address />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/order-successful" element={<OrderSuccessful />} />
      <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App






