import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import styles from "../pages/pageModule/Profile.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaArrowLeft } from "react-icons/fa";
import { LuPenLine } from "react-icons/lu";
import { LuCreditCard } from "react-icons/lu";
import { FiPlus } from "react-icons/fi"
import { RxCrossCircled } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";

function Profile() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail"); // Assuming email is stored during login
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiration: "",
    cvc: "",
    nameOnCard: "",
  });

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  // Fetch user details
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          setError("No authentication token found. Please log in again.");
          setIsLoading(false);
          return;
        }

        const response = await axios.get(`${backendURL}/api/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data?.success) {
          setUserDetails(response.data.user);
        } else {
          setError("Failed to fetch user details. Please try again.");
        }
      } catch (err) {
        console.error("Error fetching user details:", err);
        setError("An error occurred while fetching user details.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserDetails();
  }, [backendURL]);

  // Load saved cards from local storage on mount
  useEffect(() => {
    const userCards = JSON.parse(localStorage.getItem("userCards")) || {};
    setSavedCards(userCards[userEmail] || []); // Load cards specific to the logged-in user
  }, [userEmail]);

  // Save cards to local storage
  const saveCardsToLocalStorage = (cards) => {
    const userCards = JSON.parse(localStorage.getItem("userCards")) || {};
    userCards[userEmail] = cards;
    localStorage.setItem("userCards", JSON.stringify(userCards));
  };

  const handleEditClick = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    if (
      cardDetails.cardNumber &&
      cardDetails.expiration &&
      cardDetails.cvc &&
      cardDetails.nameOnCard
    ) {
      const updatedCards = [...savedCards, cardDetails];
      setSavedCards(updatedCards); // Update state
      saveCardsToLocalStorage(updatedCards); // Persist to local storage

      setCardDetails({
        cardNumber: "",
        expiration: "",
        cvc: "",
        nameOnCard: "",
      }); // Reset the form
      setIsModalOpen(false);
    } else {
      // alert("Please fill in all the fields.");
      toast.error('Please fill in all the fields.', { position: "top-center" });
    }
  };

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  const handleEditCard = (index) => {
    const cardToEdit = savedCards[index];
    setCardDetails(cardToEdit);
    setIsModalOpen(true);
    setEditingIndex(index);
  };
  
  const handleRemoveCard = () => {
    if (editingIndex !== null) {
      const updatedCards = savedCards.filter((_, index) => index !== editingIndex);
      setSavedCards(updatedCards); // Update state
      saveCardsToLocalStorage(updatedCards); // Persist changes to local storage
      setIsModalOpen(false);
      setEditingIndex(null);
      setCardDetails({
        cardNumber: "",
        expiration: "",
        cvc: "",
        nameOnCard: "",
      }); // Reset form
    }
  };

 const goBack = () => {
  navigate('/home')
 }

  return (
    <div className={styles.parent}>
      <ToastContainer autoClose={2000}/>
      <Header userName={userName} />
      <div onClick={goBack} className={styles.goBack}>
        <span><FaArrowLeft /></span>
        {/* <div id={styles.mainDetails}> */}
        <h2>My Profile</h2>
      </div>
      <div className={styles.user}>
        <div>
          <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" />
          <p>{userDetails?.name || "No name available"}</p>
        </div>
        <button>Edit</button>
      </div>

      <div className={styles.userDetails}>
        <div className={styles.userDetailsChild}>
          <p>Full Name</p>
          <div>{userDetails?.name || "No name available"}</div>
          <p>Gender</p>
          <div>{userDetails?.gender || "Male"}</div>
        </div>

        <div className={styles.userDetailsChild}>
          <p>Email Address</p>
          <div>{userDetails?.email || "No email available"}</div>
          <p>Country</p>
          <div>{userDetails?.country || "India"}</div>
        </div>
      </div>

      <div className={styles.savedPaymentMethod}>
        <h2>Saved Payment Methods</h2>
        <div className={styles.savedCard}>
        {savedCards.length === 0 ? (
          <p>No saved cards.</p>
        ) : (
          savedCards.map((card, index) => (
            <div key={index} className={styles.card}>
              <span id={styles.cardLogo}><LuCreditCard /></span>
              <div>
              <p>xxxx xxxx xxxx {card.cardNumber.slice(-4)}</p>
              <p>{card.nameOnCard}</p>
              </div>
              {/* <p>Expiration: {card.expiration}</p> */}
              <span onClick={() => handleEditCard(index)}><LuPenLine /></span>
            </div>
          ))
        )}
        <button onClick={handleEditClick}> <span id={styles.plusIcon}><FiPlus id={styles.plus}/></span> Add New Card</button>
      </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div id={styles.headContent}>
            <h2>Edit Payment Method</h2>
            <span onClick={handleModalClose}><RxCrossCircled id={styles.cut}/></span>
            </div>
            <div className={styles.cardEntry}>
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleInputChange}
                placeholder="Enter card number"
              />
            </div>
            <div className={styles.cardEntry}>
              <label>Expiration</label>
              <input
                type="text"
                name="expiration"
                value={cardDetails.expiration}
                onChange={handleInputChange}
                placeholder="MM/YY"
              />
            </div>
            <div className={styles.cardEntry}>
              <label>CVC</label>
              <input
                type="text"
                name="cvc"
                value={cardDetails.cvc}
                onChange={handleInputChange}
                placeholder="CVC"
              />
            </div>
            <div className={styles.cardEntry}>
              <label>Name on Card</label>
              <input
                type="text"
                name="nameOnCard"
                value={cardDetails.nameOnCard}
                onChange={handleInputChange}
                placeholder="Name on card"
              />
            </div>
            <div className={styles.modalActions}>
              <button onClick={handleRemoveCard} id={styles.remove}>Remove</button>
              <div id={styles.cancelNSave}>
              <button onClick={handleModalClose} id={styles.cancel}>Cancel</button>
              <button onClick={handleSaveChanges}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
        
      )}
      <Footer />
    </div>
  );
}

export default Profile;


