import React, { useState } from 'react';
import './PaymentCredit.css';
import { IoMdArrowBack } from 'react-icons/io';
import { IoMdStar } from 'react-icons/io';
import star7 from '../../../../../../image/home/Star 7.png';
import { GoHeart } from "react-icons/go";
import { BsLightningChargeFill } from "react-icons/bs";
import { useLocation, useNavigate } from 'react-router-dom';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import Pymentbtn from '../../../../../comman/pymentbutton/Pymentbtn';

function PaymentCredit() {
    const location = useLocation();
    const { instructor } = location.state || {};
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [errors, setErrors] = useState({});

    // Restrict non-numeric input
    const handleNumericInput = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
        e.target.value = value; // Update the input field
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        // Validate card number
        const cardNumberRegex = /^\d{16}$/; // 16 digits only
        if (!cardNumberRegex.test(cardNumber.replace(/\s/g, ''))) {
            newErrors.cardNumber = 'Please enter a valid 16-digit card number.';
        }

        // Validate expiry date
        const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (!expiryDateRegex.test(expiryDate)) {
            newErrors.expiryDate = 'Please enter a valid expiry date in the format MM/YY.';
        }

        const cvvRegex = /^\d{3,4}$/;
        if (!cvvRegex.test(cvv)) {
            newErrors.cvv = 'Please enter a valid CVV (3 or 4 digits).';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log('Payment details are valid. Proceeding with payment...');
            // Add your payment processing logic here
        }
    };

    if (!instructor) {
        return <div>No instructor data available. Please go back and select an instructor.</div>;
    }

    return (
        <div style={{ overflow: 'hidden' }}>
            <div className="row">
                <div className="col-md-4 col-12">
                    <IoMdArrowBack onClick={handleBack} className="bookclassback" />
                    <div className='bokkclasamargin'>
                        <div className="instructor-card">
                            <div className="sliderimg-container1">
                                <img src={instructor.img} alt="Instructor" className="instproq" />
                                <GoHeart className="heart-icon1" />
                                <div className="price-badge">
                                    <img src={star7} alt="Price Badge" className="badge-img" />
                                    <p className="badge-text">$5<span>/hr</span></p>
                                </div>
                            </div>
                            <h2 className="instructor-name">{instructor.name}</h2>
                            <div className="rating-section">
                                <div className="star2">
                                    {[...Array(5)].map((_, idx) => <IoMdStar key={idx} />)}
                                </div>
                                <p className="rating-text">
                                    4.3 <span style ={{ textDecoration: 'underline' }}>(25 Reviews)</span>
                                </p>
                            </div>
                        </div>
                        <p className="Availablebook"> <BsLightningChargeFill className="thunder" /> Available & responds in 1 Hour</p>
                    </div>
                </div>
                <div className="col-md-8 col-12 usecallpadding">
                    <div className="bokk-classow">
                        <h1>Student Pass!</h1>
                        <p>Your first free class with {instructor.name}!</p>
                    </div>
                    <div className="maincredit-icone">
                        <p className='othrcredit-p'> <RiVerifiedBadgeFill className='fillback' />Your payment will be processed only if Kiya John approves your request. Enjoy your first session at no cost!</p>
                        <p className='othrcredit-p'> <RiVerifiedBadgeFill className='fillback' />Other offer that student will get with this course will be added here</p>
                    </div>
                    <div className="bokk-classow">
                        <h3 className='typepay-h1'>Select Payment Method</h3>
                        <p>Please select your preferred payment method and proceed to the next step.</p>
                        <Pymentbtn />

                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className='bookclasstext'>
                                    <label className='msgbook'>Card Number</label>
                                    <input
                                        type='text'
                                        placeholder='XXXX XXXX XXXX XXXX'
                                        value={cardNumber}
                                        maxLength={16}
                                        onChange={(e) => setCardNumber(e.target.value)}
                                        onInput={handleNumericInput}
                                    />
                                    {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
                                </div>
                                <div className="book-class-grid">
                                    <div className="bookclasstext">
                                        <label className='msgbook'>Expiry Date</label>
                                        <input
                                            type='text'
                                            placeholder='MM / YY'
                                            value={expiryDate}
                                            maxLength={4}
                                            onChange={(e) => setExpiryDate(e.target.value)}
                                        />
                                        {errors.expiryDate && <p className="error">{errors.expiryDate}</p>}
                                    </div>
                                    <div className="bookclasstext">
                                        <label className='msgbook'>CVV</label>
                                        <input
                                            type='text'
                                            placeholder='CVV'
                                            value={cvv}
                                            maxLength={4}
                                            onChange={(e) => setCvv(e.target.value)}
                                            onInput={handleNumericInput}
                                        />
                                        {errors.cvv && <p className="error">{errors.cvv}</p>}
                                    </div>
                                </div>
                            </div>
                    <p className='noteofpay'><b>Note:</b> Students must fill in payment details even if the first session is free, for verification purposes.</p>
                            <button type="submit" className="next-btnbok">Pay $350</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PaymentCredit;