import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Header from '../components/Header';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './pageModule/Address.module.css';

function Address() {
  const navigate = useNavigate();
  const { state } = useLocation(); // Access cart items
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'Mike Ross',
      address: '45, Green Street, Sector 12, New Delhi, 110001, India',
      phone: '8734637468',
      state: 'Delhi',
      district: 'New Delhi',
      isDefault: true,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: '',
    address: '',
    phone: '',
    state: '',
    district: '',
    isDefault: false,
  });

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands'
  ];

  const handleGoBack = () => {
    navigate('/checkout', { state: { ...state, defaultAddress: addresses.find((addr) => addr.isDefault) } });
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({ ...newAddress, [name]: value });
  };

  const saveAddress = () => {
    setAddresses([...addresses, { ...newAddress, id: addresses.length + 1 }]);
    closeModal();
  };

  const setDefaultAddress = (id) => {
    setAddresses(
      addresses.map((addr) =>
        addr.id === id ? { ...addr, isDefault: true } : { ...addr, isDefault: false }
      )
    );
  };

  return (
    <div>
      <Header />
      <div className={styles.mainContainer}>
        <h2 onClick={handleGoBack} style={{ cursor: 'pointer' }}>
          <FaArrowLeft /> Your Addresses
        </h2>
        <div className={styles.addAddressDiv} onClick={openModal}>
          Add Address
        </div>

        {addresses.map((addr) => (
          <div
            key={addr.id}
            className={addr.isDefault ? styles.defaultAddress : styles.savedAddress}
          >
            <h4>{addr.name}</h4>
            <p>{addr.address}</p>
            <p>Phone Number: {addr.phone}</p>
            <p>State: {addr.state}, District: {addr.district}</p>
            <div>
              <button onClick={() => setDefaultAddress(addr.id)}>Set as Default</button>
              <button>Edit</button>
              <button>Remove</button>
            </div>
          </div>
        ))}

        {showModal && (
          <div className={styles.modal}>
            <h3>Add New Address</h3>
            <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
            <input type="text" name="address" placeholder="Detailed Address" onChange={handleInputChange} />
            <input type="text" name="phone" placeholder="Phone Number" onChange={handleInputChange} />
            <select name="state" onChange={handleInputChange}>
              <option value="">Select State</option>
              {indianStates.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
            <input type="text" name="district" placeholder="District" onChange={handleInputChange} />
            <button onClick={saveAddress}>Save Address</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Address;




