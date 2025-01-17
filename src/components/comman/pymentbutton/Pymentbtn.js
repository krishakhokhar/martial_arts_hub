import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Pymentbtn.css'; // Import the CSS file

function Pymentbtn() {
  const [activeButton, setActiveButton] = useState('');
  const location = useLocation();
  const { instructor } = location.state || {};
  const navigate = useNavigate();

  useEffect(() => {
    const currentMethod = location.pathname;
    if (currentMethod === '/PaymentCredit') {
      setActiveButton('Credit / Debit Card');
    } else if (currentMethod === '/Paypal') {
      setActiveButton('PayPal');
    } else if (currentMethod === '/apple-pay') {
      setActiveButton('Apple Pay');
    } else {
      setActiveButton('');
    }
  }, [location.pathname]);

  const handlePaypalClick = () => {
    navigate('/Paypal', { state: { instructor: instructor } });
  };
  const paycredit=()=>{
    navigate('/PaymentCredit', { state: { instructor: instructor } });
  }

  return (
    <div className="payment-container">
      <div className="payment-buttons">
        <button className={`payment-button ${activeButton === 'Credit / Debit Card' ? 'active' : ''}`} onClick={paycredit}>
          <Link to="/PaymentCredit" className="payment-link">
            Credit / Debit Card
          </Link>
        </button>
        <button
          className={`payment-button ${activeButton === 'PayPal' ? 'active' : ''}`}
          onClick={handlePaypalClick} // Trigger the navigation with data
        >
          <Link to="/Paypal" className="payment-link">
            PayPal
          </Link>
        </button>
        <button className={`payment-button ${activeButton === 'Apple Pay' ? 'active' : ''}`}>
          <Link to="/apple-pay" className="payment-link">
            Apple Pay
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Pymentbtn;
