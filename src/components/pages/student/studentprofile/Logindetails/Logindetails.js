import React, { useState } from 'react';
import './Logindetails.css';
import Studentcolfirstcommun from '../studentcolfirstcommun';
import Studentcolsecond from '../Studentcolsecond';
import { FaQuoteRight } from 'react-icons/fa';
import Getintouch from '../../../../comman/Getintouch'
import Footer from '../../../../comman/Footer'

function Logindetails() {
    const [formData, setFormData] = useState({
        email: localStorage.getItem("userEmail") || '', // Automatically pre-fill if email is stored
        name: localStorage.getItem("userName") || '', // Automatically pre-fill if name is stored
    });
    const [errors, setErrors] = useState({
        email: '',
        name: '',
    });

    // Validation function
    const validateForm = () => {
        const newErrors = {};

        // Validate email format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!emailPattern.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        // Validate name (not empty)
        if (!formData.name) {
            newErrors.name = 'Name is required.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            // Store name in localStorage when form is submitted
            localStorage.setItem("userName", formData.name);
            console.log('Form submitted successfully!');
        }
    };

    return (
        <div style={{ paddingTop: '100px' }}>
            <div className='student_profile'>
            <FaQuoteRight className='FaQuoteRightpro' /><br />
                <h3>We are what we repeatedly do. Excellence then is not an act but a habit.</h3>
            </div>
            <div className="container-fluid">
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-12 col-md-3">
                        <Studentcolfirstcommun />
                    </div>
                    <div className="col-12 col-md-9">
                        <Studentcolsecond />
                        <div className='main-login-div'>
                            <h2>Login Details</h2>
                            <p>The information you provided during login is displayed below. You can update your details here.</p>
                            <form onSubmit={handleSubmit}>
                                <div className='login-details-email'>
                                    <label>Email ID</label><br />
                                    <input
                                        type='text'
                                        placeholder='Enter email'
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                    {errors.email && <p className="error-message">{errors.email}</p>}
                                </div>
                                <div className='login-details-email'>
                                    <label>Name</label><br />
                                    <input
                                        type='text'
                                        placeholder='Enter Name'
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                    {errors.name && <p className="error-message">{errors.name}</p>}
                                </div>
                                <div className='btn-right'>
                                    <button type="submit" className="submit-btn1">Save Changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Getintouch/>
            <Footer/>
        </div>
    );
}

export default Logindetails;
