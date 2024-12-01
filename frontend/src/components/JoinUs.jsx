import React from 'react'
import styles from './componentModule/JoinUs.module.css'

function JoinUs() {
  return (
    <div>
    <div className={styles.joinUs}>
    <div>
        <img src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
        <div className={styles.floatingDiv}>
            <h5>Earn more with lower fees</h5>
            <p>Signup as a business</p>
            <h1>Partner with us</h1>
            <button>Get Started</button>
        </div>
    </div>

    <div>
        <img src="https://images.pexels.com/photos/4393655/pexels-photo-4393655.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
        <div className={styles.floatingDiv}>
        <h5>Avail exclusive perks</h5>
        <p>Signup as a rider</p>
        <h1>Ride with us</h1>
        <button>Get Started</button>
        </div>
    </div>
    
    </div>
    <div className={styles.aboutUs}>
        <div className={styles.links}>
            <h1>Know more about us!</h1>
            <div>
                <button>Frequent Questions </button>
                <p>Who we are?</p>
                <p>Partner Program</p>
                <p>Help & Support</p>
            </div>
        </div>

        <div >
            <div className={styles.middleDiv}>
            <div className={styles.middleDiv1}>
                <h5 id={styles.heading1}>How does Order.UK work?</h5>
                <h5>What payment methods are accepted?</h5>
                <h5>Can I track my order in real-time?</h5>
                <h5>Are there any special discounts or promotions available?</h5>
                <h5>Is Order.UK available in my area?</h5>
            </div>
            <div id={styles.middlerightdiv}>     
        <div className={styles.allCard}>
            <div className={styles.card123}>
                <h5>Place an Order!</h5>
                <img src="../assets/order-food.png" alt="image" />
                <p>Place order through our website or Mobile app</p>
            </div>

            <div className={styles.card123}>
                <h5>Track Progress</h5>
                <img src="../assets/food.png" alt="image" />
                <p>Your can track your order status with delivery time</p>
            </div>

            <div className={styles.card123}>
                <h5>Get your Order!</h5>
                <img src="../assets/order.png" alt="image" />
                <p>Receive your order at a lighting fast speed!</p>
            </div>
            </div>
       
            <div className={styles.lastDiv}>
                <p>Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</p>
            </div>
        </div>   
        </div>
            </div>
        </div>

        <div className={styles.stats}>
            <div className={styles.statsBorder}>
            <span>546+</span>
            <h4>Registered Riders</h4>
            </div>

            <div className={styles.statsBorder}>
            <span>789,900+</span>
            <h4>Orders Delivered</h4>
            </div>

            <div className={styles.statsBorder}>
            <span>690+</span>
            <h4>Restaurants Partnered</h4>
            </div>

            <div>
            <span>17,457+</span>
            <h4>Food items</h4>
            </div>
        </div>
    </div>
  )
}

export default JoinUs
