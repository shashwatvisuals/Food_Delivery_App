import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { HiOutlinePlus } from "react-icons/hi";
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
    <div className={styles.parent}>
      <Header />
      <div className={styles.mainContainer}>
        <h2 onClick={handleGoBack} style={{ cursor: 'pointer' }}>
          <FaArrowLeft /> Your Addresses
        </h2>
        <div className={styles.addressParent}>
        <div className={styles.addAddressDiv} onClick={openModal}>
        <span><HiOutlinePlus id={styles.plusLogo}/></span>
        <p>Add Address</p>
        </div>

        {addresses.map((addr) => (
          <div
            key={addr.id}
            className={addr.isDefault ? styles.defaultAddress : styles.savedAddress}
          >
            <div id={styles.nameRow}>
            <h4>{addr.name}</h4>
            <button onClick={() => setDefaultAddress(addr.id)}>Set as Default</button>
            </div>
            <p>{addr.address}</p>
            <p>Phone Number: {addr.phone}</p>
            <p>State: {addr.state}, District: {addr.district}</p>
            <div  className={styles.editDel}>
              <button>Edit</button>
              <div className={styles.edit}></div>
              <button id={styles.remove}>Remove</button>
            </div>
          </div>
        ))}

        {showModal && (
          <>
            <div onClick={closeModal} className={styles.modalOverlay}></div>
          <div className={styles.modal}>
            <h3>Add Address</h3>
            <div className={styles.minorDetails}>
            <select id={styles.selectState} name="state" onChange={handleInputChange}>
              <option value="">Select State</option>
              {indianStates.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
            <input type="text" name="district" placeholder="City/District" onChange={handleInputChange} />
            <input type="number" name="pincode" placeholder="Pincode" onChange={handleInputChange} />
            <input type="text" name="phone" placeholder="Phone Number" onChange={handleInputChange} />
            </div>
            <div className={styles.addNsave}>
            <textarea type="text" name="address" placeholder="Enter full address" onChange={handleInputChange} />
            <button onClick={saveAddress}>Save</button>
            </div>
          </div>
          </>
        )}
      </div>
      </div>
    </div>
  );
}

export default Address;




