import React, { useState } from 'react'
import './ResetPassword.css';
import { FaQuoteRight } from 'react-icons/fa';
import Studentcolfirstcommun from '../studentcolfirstcommun';
import Studentcolsecond from '../Studentcolsecond';
import imgresetimg1 from '../../../../../image/home/22.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Getintouch from '../../../../comman/Getintouch.js'
import Footer from '../../../../comman/Footer.js'

function ResetPassword() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const naviagt = useNavigate()
    const forgetpass = () => {
        naviagt('/Forgetpassword')
    }
    return (
        <div style={{ paddingTop: '100px' }}>
            <div className='student_profile' >
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
                        <div className='forget-pass'>
                            <div className='resetpassword3'>
                                <img src={imgresetimg1} alt='img' className='resertimg2' />
                                <h1>Reset Your Password</h1>
                                <p>Regularly resetting your password is essential for account security. Follow the steps below to reset your password and keep your account safe.</p>
                            </div>
                            <div className="resetpasswordstd">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter current Password"
                                    className="password-input"
                                />
                                <span className="password-icon" onClick={togglePasswordVisibility}>
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </span>
                                <p>
                                    Didn’t remember?{' '}
                                    <span className="forgot-password" onClick={forgetpass}>Forgot Password</span>
                                </p>
                            </div>
                            <div className="resetpasswordstd">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Create new Password"
                                    className="password-input"
                                />
                                <span className="password-icon" onClick={togglePasswordVisibility}>
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                            <div className="resetpasswordstd">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Re-enter Password"
                                    className="password-input"
                                />
                                <span className="password-icon" onClick={togglePasswordVisibility}>
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                            <button className="cterbuttonforgotpass">Create</button>
                        </div>
                    </div>
                </div>
            </div>
            <Getintouch />
            <Footer />
        </div >
    )
}

export default ResetPassword