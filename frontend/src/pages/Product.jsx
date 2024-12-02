import React, { useContext, useState } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { LuShare2 } from "react-icons/lu";
import styles from './pageModule/Product.module.css';
import Header from '../components/Header';
import ProductHeader from '../components/ProductHeader';
import Info from '../components/Info';
import SimilarRestaurants from '../components/SimilarRestaurents';

function Product() {
  const [isBasketVisible, setIsBasketVisible] = useState(false);
  const {cartItems, FoodList,removeFromCart} = useContext(StoreContext);
  const toggleBasket = () => {
    setIsBasketVisible((prev) => !prev);
  };



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
          <h2>Burger</h2>
          <div className={styles.cardAlign}>
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
          </div>
          <h2>Fries</h2>
          <div className={styles.cardAlign}>
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
          </div>
          <h2>Cold Drinks</h2>
          <div className={styles.cardAlign}>
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
          </div>
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

              </div>
              <div>
                <h2>Sub Total:<span>₹230.00</span></h2>
                <h2>Discounts:<span>-₹3.00</span></h2>
                <h2>Delivery Fee:<span>₹3.00</span></h2>
              </div>
              <div>
                <h3>Total to pay <span>₹230.00</span></h3>
                <p>Choose your free item..<span></span></p>
                <p>Apply Coupon Code here<span></span></p>
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
              <button>Checkout!</button>
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

const MenuItemCard = () => (
  <div className={styles.card}>
    <div className={styles.content}>
      <h3>Royal Cheese Burger with extra Fries</h3>
      <div className={styles.itemList}>
        <span>1 McChicken™,</span>
        <span>1 Big Mac™,</span>
        <span>1 Royal Cheeseburger,</span>
        <span>3 Medium French Fries.</span>
        <span>3 Cold Drinks,</span>
      </div>
      <p className={styles.price}>₹120</p>
    </div>
    <img
      src="https://images.pexels.com/photos/5060373/pexels-photo-5060373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="Burger"
      className={styles.image}
    />
    <div className={styles.addButtonDiv}>
      <button className={styles.addButton}>
        <BsFillPlusCircleFill className={styles.plusIcon} />
      </button>
    </div>
  </div>
);
