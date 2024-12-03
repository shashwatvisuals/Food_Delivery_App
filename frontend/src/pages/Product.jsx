import React, { useState, useEffect } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { LuShare2 } from 'react-icons/lu';
import styles from './pageModule/Product.module.css';
import Header from '../components/Header';
import ProductHeader from '../components/ProductHeader';
import Info from '../components/Info';
import SimilarRestaurants from '../components/SimilarRestaurents';
import { useNavigate,useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

function Product() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isBasketVisible, setIsBasketVisible] = useState(false);
  const [foodItems, setFoodItems] = useState([]); // State to store food items
  // const [cart, setCart] = useState([]); 
  const [cart, setCart] = useState(state?.cartItems || []);

  const handleCheckout = (e) => {
    e.preventDefault()
    if (cart.length === 0) {
      toast.error('Please add items for checkout'); // Show error toast
      return;
    }
  
    navigate('/checkout', { state: { cartItems: cart } }); // Use the correct variable
  };
  

  const toggleBasket = () => {
    setIsBasketVisible((prev) => !prev);
  };

  // Fetch food data from the API when the component mounts
  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/food/list');
        const result = await response.json();
        if (result.success) {
          setFoodItems(result.data); // Set the fetched data in state
        }
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    };

    fetchFoodData();
  }, []);

  // Group food items by category
  const groupedItems = foodItems.reduce((acc, item) => {
    const { category } = item;
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  // Handle adding items to the cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem._id === item._id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Handle removing one item from the cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      return prevCart
        .map((cartItem) =>
          cartItem._id === itemId && cartItem.quantity > 0
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0); // Ensure item is removed if quantity is 0
    });
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalPayable = totalAmount + 10 - 10; // Delivery Fee

  return (
    <div>
      <Header onCartClick={toggleBasket} />
      <div className={styles.mainDiv}>
        <div className={styles.searchBar}>
          <h2>All Offers from McDonald’s East London</h2>
          <div className={styles.search}>
            <CiSearch className={styles.searchIcon} />
            <input type="text" placeholder="Search from menu..." />
          </div>
        </div>
      </div>
      <div className={styles.productNbasketDiv}>
        <div
          className={styles.productDiv}
          style={{
            width: isBasketVisible ? 'calc(100% - 320px)' : 'auto',
            transition: 'width 10s ease',
          }}
        >
          <ProductHeader />
          {Object.keys(groupedItems).map((category) => (
            <div key={category}>
              <h2>{category}</h2>
              <div className={styles.cardAlign}>
                {groupedItems[category].map((item) => (
                  <MenuItemCard key={item._id} item={item} addToCart={addToCart} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {isBasketVisible && (
          <div className={styles.basketContainer}>
            <div className={styles.shareCart}>
              <span><LuShare2/></span>
              <h4>Share this cart <br /> with your friends</h4>
              <button>Copy Link</button>
            </div>

            <div className={styles.myBasket}>
              <div>
                <h2><img src="../assets/Basket.png" alt="Image" />My Basket</h2>
              </div>
              <div className={styles.addedItems}>
                {cart.length === 0 ? (
                  <p>Your cart is empty</p>
                ) : (
                  cart.map((item) => (
                    <div key={item._id} className={styles.cartItem}>
                      <p>{item.name} - ₹{item.price} x {item.quantity}</p>
                      <button
                        className={styles.deleteButton}
                        onClick={() => removeFromCart(item._id)}
                      >
                        Delete
                      </button>
                    </div>
                  ))
                )}
              </div>
              <div>
                <h2>Sub Total:<span>₹{totalAmount}</span></h2>
                <h2>Discounts:<span>-₹10.00</span></h2>
                <h2>Delivery Fee:<span>₹10.00</span></h2>
              </div>
              <div>
                <h3>Total to pay <span>₹{totalPayable}</span></h3>
              </div>
              <div>
                <div>
                  <h4>Delivery</h4>
                  <p>Starts at 17:50</p>
                </div>
                <div>
                  <h4>Collection</h4>
                  <p>Starts at 16:50</p>
                </div>
              </div>
              <button onClick={handleCheckout}>Checkout!</button>
            </div>
          </div>
        )}
      </div>
      <Info />
      <SimilarRestaurants />
    </div>
  );
}

export default Product;

const MenuItemCard = ({ item, addToCart }) => (
  <div className={styles.card}>
    <div className={styles.content}>
      <h3>{item.name}</h3>
      <div className={styles.itemList}>
        <span>{item.description}</span>
      </div>
      <p className={styles.price}>₹{item.price}</p>
    </div>
    <img
      src={item.imageUrl}
      alt={item.name}
      className={styles.image}
    />
    <div className={styles.addButtonDiv}>
      <button className={styles.addButton} onClick={() => addToCart(item)}>
        <BsFillPlusCircleFill className={styles.plusIcon} />
      </button>
    </div>
  </div>
);




