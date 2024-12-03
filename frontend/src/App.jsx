import Footer from "./components/Footer"
import Login from "./pages/login"
import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Address from "./pages/Address";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css"

function App() {


  return (
    <Router className={styles.mainPage}>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/address" element={<Address />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App






