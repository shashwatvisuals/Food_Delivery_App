import React from 'react'
import styles from './componentModule/DealsNCatagory.module.css'

function DealsNCatagory() {
  return (
    <div className={styles.MainContainer}>

        <div className={styles.dealsContainer}>
            <div>
                <h2>Up to -40% 🎊 Order.uk exclusive deals</h2>
            </div>

            <div className={styles.dishes}>
                <p>Vegan</p>
                <p>Sushi</p>
                <button>Pizza & Fast food </button>
                <p>others</p>
            </div>
        </div>


        <div className={styles.card}>
            <div>
                <img src="https://images.pexels.com/photos/3762069/pexels-photo-3762069.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <div className={styles.cardDetails}>
                <span>-40%</span>
                <h6>Restaurant</h6>
                <h4>Chef Burgers London</h4>
                </div>
            </div>

            <div>
                <img src="https://images.pexels.com/photos/7220886/pexels-photo-7220886.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <div className={styles.cardDetails}>
                <span>-20%</span>
                <h6>Restaurant</h6>
                <h4>Grand Ai Cafe London</h4>
                </div>
            </div>

            <div>
                <img src="https://images.pexels.com/photos/2089712/pexels-photo-2089712.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <div className={styles.cardDetails}>
                <span>-17%</span>
                <h6>Restaurant</h6>
                <h4>Butterbrot Caf’e London</h4>
                </div>
            </div>
        </div>

        <div className={styles.cat}>
            <h2>Order.uk Popular Categories 🤩</h2>
        </div>

        <div className={styles.categories}>       
            <div className={styles.cardCategory}>
                <img src="../assets/rectangle1.png" alt="image" />
                <div>
                    <h3>Burgers & Fast food</h3>
                    <p>21 Restaurants</p>
                </div>
            </div>
            
            <div className={styles.cardCategory}>
                <img src="../assets/Rectangle2.png" alt="image" />
                <div>
                    <h3>Salads</h3>
                    <p>32 Restaurants</p>
                </div>
            </div>
            
            <div className={styles.cardCategory}>
                <img src="../assets/Rectangle3.png" alt="image" />
                <div>
                    <h3>Pasta & Casuals</h3>
                    <p>4 Restaurants</p>
                </div>
            </div>
            
            <div className={styles.cardCategory}>
                <img src="../assets/Rectangle4.png" alt="image" />
                <div>
                    <h3>Pizza</h3>
                    <p>32 Restaurants</p>
                </div>
            </div>
            
            <div className={styles.cardCategory}>
                <img src="../assets/Rectangle5.png" alt="image" />
                <div>
                    <h3>Breakfast</h3>
                    <p>4 Restaurants</p>
                </div>
            </div>
            
            <div className={styles.cardCategory}>
                <img src="../public/assets/Rectangle6.png" alt="image" />
                <div>
                    <h3>Soups</h3>
                    <p>32 Restaurants</p>
                </div>
            </div>

        </div>


    </div>
  )
}

export default DealsNCatagory
