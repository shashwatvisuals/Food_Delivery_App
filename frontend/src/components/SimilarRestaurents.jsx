import React from 'react'
import styles from './componentModule/SimilarRestaurants.module.css'

function SimilarRestaurants() {
  return (
    <div>
        <div className={styles.cat}>
            <h2>Popular Restaurants</h2>
        </div>
      <div className={styles.restaurants}>       
            <div className={styles.cardCategory}>
                <img src="../assets/restaurents/macD.png" alt="image" />
                <div>
                    <h3>McDonald’s London</h3>
                </div>
            </div>
            
            <div className={styles.cardCategory}>
                <img src="../assets/restaurents/papa.png" alt="image" />
                <div>
                    <h3>Papa Johns</h3>
                </div>
            </div>
            
            <div className={styles.cardCategory}>
                <img src="../assets/restaurents/kfc.png" alt="image" />
                <div>
                    <h3>KFC West London</h3>
                </div>
            </div>
            
            <div className={styles.cardCategory}>
                <img src="../assets/restaurents/texas.png" alt="image" />
                <div>
                    <h3>Texas Chicken</h3>
                </div>
            </div>
            
            <div className={styles.cardCategory}>
                <img src="../assets/restaurents/burgerKing.png" alt="image" />
                <div>
                    <h3>Burger King</h3>
                </div>
            </div>
            
            <div className={styles.cardCategory}>
                <img src="../assets/restaurents/shaurma.png" alt="image" />
                <div>
                    <h3>Shaurma 1</h3>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SimilarRestaurants