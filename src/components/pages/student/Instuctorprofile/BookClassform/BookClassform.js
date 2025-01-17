import React, { useState, useEffect } from "react";
import './BookClassform.css';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoMdStar } from 'react-icons/io';
import star7 from '../../../../../image/home/Star 7.png';
import { GoHeart } from "react-icons/go";
import { BsLightningChargeFill } from "react-icons/bs";

function BookClassform() {
    const location = useLocation();
    const { instructor } = location.state || {}; // Get instructor data passed to this component

    const navigate = useNavigate();

    // Fetch the user's email from localStorage or context
    const [userEmail, setUserEmail] = useState("");
    const [formData, setFormData] = useState({
        message: "",
        date: "",
        timeSlot: "",
        classType: "",
        mobile: ""
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        // Simulating fetching email from localStorage
        const loggedInEmail = localStorage.getItem("userEmail"); // Replace with your auth system
        if (loggedInEmail) {
            setUserEmail(loggedInEmail);
        }

        // Load form data from localStorage
        const savedFormData = JSON.parse(localStorage.getItem("formData"));
        if (savedFormData) {
            setFormData(savedFormData);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "mobile" && !/^\d*$/.test(value)) {
            return;
        }
        setFormData({ ...formData, [name]: value });
        // Save form data to localStorage
        localStorage.setItem("formData", JSON.stringify({ ...formData, [name]: value }));
    };

    const handleSubmit = () => {
        if (validateForm()) {
            console.log("Form submitted successfully:", formData);
            // Clear the form data
            setFormData({
                message: "",
                date: "",
                timeSlot: "",
                classType: "",
                mobile: ""
            });
            // Clear localStorage data for formData
            localStorage.removeItem("formData");
            // Navigate to the next page
            navigate('/PaymentCredit', { state: { instructor: instructor } });
        }
    };


    const validateForm = () => {
        const newErrors = {};
        if (!formData.message) newErrors.message = "Message is required.";
        if (!formData.date) newErrors.date = "Date is required.";
        if (!formData.timeSlot) newErrors.timeSlot = "Time slot is required.";
        if (!formData.classType) newErrors.classType = "Class type is required.";
        if (!formData.mobile) {
            newErrors.mobile = "Mobile number is required.";
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = "Enter a valid 10-digit mobile number.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    if (!instructor) {
        return <div>No instructor data available. Please go back and select an instructor.</div>;
    }
    const handleStageClick = () => {
        navigate('/InstructorProfile', { state: { instructor } }); // Pass instructor data back
    };
    return (
        <div style={{ overflow: 'hidden' }}>
            <div className="row">
                <div className="col-md-4 col-12">
                    <IoMdArrowBack onClick={handleStageClick} className="bookclassback" />
                    <div className="bokkclasamargin">
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
                                    4.3 <span style={{ textDecoration: 'underline' }}>(25 Reviews)</span>
                                </p>
                            </div>
                        </div>
                        <p className="Availablebook"> <BsLightningChargeFill className="thunder" /> Available & responds in 1 Hour</p>
                    </div>
                </div>
                <div className="col-md-8 col-12 usecallpadding">
                    <div className="bokk-classow">
                        <h1>Book Class!</h1>
                        <p>You are joining Instructor Kiya’s class as student!</p>
                    </div>
                    <div className="bookclasstext">
                        <label className="msgbook">Your message</label><br />
                        <textarea
                            cols="10"
                            rows="6"
                            placeholder="Write Your message here*"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>
                    <div className="book-class-grid">
                        <div className="bookclasstext">
                            <label className="msgbook">Date of First Class</label><br />
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                            />
                            {errors.date && <span className="error">{errors.date}</span>}
                        </div>
                        <div className="bookclasstext">
                            <label className="msgbook">Select Time Slot</label><br />
                            <select
                                name="timeSlot"
                                className="selct-times"
                                value={formData.timeSlot}
                                onChange={handleChange}
                            >
                                <option value="">--Select time--</option>
                                <option value="9:00 AM To 10:00AM">9:00 AM To 10:00AM</option>
                                <option value="11:00 AM To 12:00AM">11:00 AM To 12:00AM</option>
                                <option value="1:00 PM To 2:00PM">1:00 PM To 2:00PM</option>
                                <option value="4:00 PM To 5:00PM">4:00 PM To 5:00PM</option>
                                <option value="5:00 PM To 6:00PM">5:00 PM To 6:00PM</option>
                            </select>
                            {errors.timeSlot && <span className="error">{errors.timeSlot}</span>}
                        </div>
                    </div>
                    <div className="bookclasstext">
                        <label className="msgbook">How would you like to attend your class?</label><br />
                        <div className="class-type-grid">
                            <div className="rediobook">
                                <label className="msgbook">Face to Face</label>
                                <input
                                    type="radio"
                                    name="classType"
                                    value="Face to Face"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="rediobook">
                                <label className="msgbook">Online</label>
                                <input
                                    type="radio"
                                    name="classType"
                                    value="Online"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        {errors.classType && <span className="error">{errors.classType}</span>}
                    </div>
                    <div className="contact_details">
                        <h3>Contact Details</h3>
                        <p>Don’t worry! Your information is well-protected. It will be accessible only to the instructors you choose.</p>
                    </div>
                    <div className="bookclasstext">
                        <label className="msgbook">Email Address</label><br />
                        <input
                            type="text"
                            value={userEmail} // Automatically fill the logged-in email
                            readOnly
                        />
                    </div>
                    <div className="bookclasstext">
                        <label className="msgbook">Mobile No.</label><br />

                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="Mobile No. here"
                            maxLength="10"
                        />
                        {errors.mobile && <span className="error">{errors.mobile}</span>}
                    </div>
                    <button className="next-btnbok" onClick={handleSubmit}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default BookClassform;
