import React from 'react';
import './Paypal.css'
import { BsLightningChargeFill } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { IoMdArrowBack, IoMdStar } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import star7 from '../../../../../../image/home/Star 7.png';
import Pymentbtn from '../../../../../comman/pymentbutton/Pymentbtn';
import { RiVerifiedBadgeFill } from 'react-icons/ri';

function Paypal() {
    const location = useLocation();
    const { instructor } = location.state || {}; // Receiving instructor data

    const navigate = useNavigate();

    const handleBack = () => {
        // Pass the instructor data back to PaymentCredit
        navigate('/PaymentCredit', { state: { instructor } });
    };

    // Check if instructor data is available, otherwise display a message
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
                                {/* Check if instructor.img exists, if not, use a fallback image */}
                                <img
                                    src={instructor.img || "path/to/fallback-image.jpg"}
                                    alt="Instructor"
                                    className="instproq"
                                />
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
                                    4.3 <span style={{ textDecoration: 'underline' }}>(25 Reviews)</span>
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
                    </div>
                    <div className='bookclasstext'>
                        <label className='msgbook'>Enter your email</label><br />
                        <input type='email' placeholder='abc@gmail.com' />
                        <p className='passfor'>Forgot email?</p>
                    </div>
                    <div>
                        <button className='Proceed'>Proceed to Payment</button>
                        <button className='accountcreate'>Create an account</button>
                    </div>
                    <p className='noteofpay'><b>Note:</b> Students must fill in payment details even if the first session is free, for verification purposes.</p>
                </div>
            </div>
        </div>
    );
}

export default Paypal;