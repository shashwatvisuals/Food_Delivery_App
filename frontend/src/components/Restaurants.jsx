import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importing the navigate hook
import styles from './componentModule/Restaurants.module.css';

function Restaurants() {
  const navigate = useNavigate(); // Hook to navigate to Product page

  // Array of restaurant objects (name, image path)
  const restaurants = [
    { name: "McDonald’s London", image: "../assets/restaurents/macD.png" },
    { name: "Papa Johns", image: "../assets/restaurents/papa.png" },
    { name: "KFC West London", image: "../assets/restaurents/kfc.png" },
    { name: "Texas Chicken", image: "../assets/restaurents/texas.png" },
    { name: "Burger King", image: "../assets/restaurents/burgerKing.png" },
    { name: "Shaurma 1", image: "../assets/restaurents/shaurma.png" },
  ];

  // Function to handle the card click
  const handleCardClick = (restaurantName) => {
    navigate('/product', { state: { restaurantName } }); // Pass restaurantName to Product page
  };

  return (
    <div>
      <div className={styles.cat}>
        <h2>Popular Restaurants</h2>
      </div>
      <div className={styles.restaurants}>
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.name}
            className={styles.cardCategory}
            onClick={() => handleCardClick(restaurant.name)} // Handle click
          >
            <img src={restaurant.image} alt={restaurant.name} />
            <div>
              <h3>{restaurant.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurants;

