import React from 'react'
import styles from './componentModule/ProductHeader.module.css'
import { BsFillPlusCircleFill } from "react-icons/bs";
function ProductHeader() {
  return (
<div className={styles.mainDiv}>
    {/* <div className={styles.header}>
        <h4 id={styles.selectedlink}>Offers </h4>
        <h4>Burgers</h4>
        <h4>Fries</h4>
        <h4>Snacks</h4>
        <h4>Salads</h4>
        <h4>Cold drinks </h4>
        <h4> Happy Meal®</h4>
        <h4>Desserts</h4>
        <h4>Hot drinks</h4>
        <h4>Sauces</h4>
        <h4>Orbit®</h4>
    </div> */}
    <div className={styles.card}>
        <div>
            <img src="https://images.pexels.com/photos/6593913/pexels-photo-6593913.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
            <div className={styles.cardDetails}>
                <span>-20%</span>
                <h6>McDonald’s East London</h6>
                <h4>First Order Discount</h4>
                <div className={styles.addButton}><BsFillPlusCircleFill id={styles.plusIcon}/>
                </div>
            </div>
        </div>

        <div>
            <img src="https://images.pexels.com/photos/7314984/pexels-photo-7314984.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
            <div className={styles.cardDetails}>
                <span>-20%</span>
                <h6>McDonald’s East London</h6>
                <h4>Vegan Discount</h4>
                <div className={styles.addButton}><BsFillPlusCircleFill id={styles.plusIcon}/>
                </div>
            </div>
        </div>

        <div>
            <img src="https://images.pexels.com/photos/5060373/pexels-photo-5060373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <div className={styles.cardDetails}>
                <span>-100%</span>
                <h6>McDonald’s East London</h6>
                <h4>Free ice Cream Offer</h4>
                <div className={styles.addButton}><BsFillPlusCircleFill id={styles.plusIcon}/>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProductHeader
