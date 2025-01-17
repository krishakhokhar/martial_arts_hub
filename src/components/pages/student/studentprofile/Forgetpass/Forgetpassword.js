import React, { useState, useEffect } from 'react';
import { FaQuoteRight, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';
import { BsCheck } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import img1 from '../../../../../image/home/21.png';
import Studentcolfirstcommun from '../studentcolfirstcommun.js';
import Studentcolsecond from '../Studentcolsecond.js';
import './Forgetpassword.css';
import { MdTimer } from 'react-icons/md';
import { IoMdArrowBack } from 'react-icons/io';
import imgreset from '../../../../../image/home/22.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Getintouch from '../../../../comman/Getintouch.js';
import Footer from '../../../../comman/Footer.js';
import axios from 'axios';
import baseUrl from '../../../../../baseUrl.js';

function Forgetpassword() {
    const [email, setEmail] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(60);
    const [isResendEnabled, setIsResendEnabled] = useState(false);
    const [otpError, setOtpError] = useState('');
    const [formData, setFormData] = useState({
        NewPassword: "",
        confrim_password: "",
        studentId: "", // Ensure studentId is part of formData
    });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [generatedOtp, setGeneratedOtp] = useState(''); // Store the generated OTP

    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
    const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

    useEffect(() => {
        const storedEmail = localStorage.getItem('userEmail');
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);

    useEffect(() => {
        let countdown;
        if (timer > 0) {
            countdown = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else {
            setIsResendEnabled(true);
            clearInterval(countdown);
        }
        return () => clearInterval(countdown);
    }, [timer]);

    const handleInputChange = (index, value) => {
        if (!/^\d*$/.test(value)) return;
        const updatedOtp = [...otp];
        updatedOtp[index] = value;
        setOtp(updatedOtp);

        if (value && index < otp.length - 1) {
            const nextInput = document.getElementById(`otp-input-${index + 1}`);
            if (nextInput) nextInput.focus();
        }
    };

    const handleResendClick = async () => {
        if (isResendEnabled) {
            setTimer(60);
            setIsResendEnabled(false);
            try {
                await axios.post(`${baseUrl}/student/forgot/password/resendotp`, { email });
                toast.success('OTP resent successfully!');
            } catch (error) {
                toast.error('Failed to resend OTP. Please try again.');
            }
        }
    };

    const handleGetOtp = async () => {
        if (!email) {
            toast.error('Please enter your email address.');
            return;
        }
        try {
            const response = await axios.post(`${baseUrl}/student/forgot/password/sendotp`, { email });
            setFormData({ ...formData, studentId: response.data.studentId }); // Store studentId from response
            setShowSuccessModal(true);
        } catch (error) {
            console.error("Error Details:", error.response?.data || error.message);
            toast.error(error.response?.data?.message || 'Failed to send OTP. Please check your email.');
        }
    };

    const handleCloseOtpModal = async () => {
        const enteredOtp = otp.join('');
        
        // Check if OTP is filled
        if (!enteredOtp || enteredOtp.length !== 4) { // Ensure OTP length is 4
            setOtpError('OTP must be 4 digits long.');
            toast.error('Please enter a valid 4-digit OTP.');
            return;
        }
    
        try {
            const response = await axios.post(
                `${baseUrl}/student/forgot/password/otpVerification`,
                { 
                    email, 
                    otp: enteredOtp, 
                    studentId: formData.studentId 
                }
            );
    
            if (response.status === 200) {
                setShowOtpModal(false);
                setShowResetPasswordModal(true);
                setOtpError('');
                toast.success('OTP verified successfully!');
            } else {
                throw new Error('Invalid OTP');
            }
        } catch (error) {
            console.error("Error Details:", error.response?.data || error.message);
            setOtpError('Invalid OTP. Please try again.');
            toast.error(error.response?.data?.message || 'Invalid OTP. Please try again.');
        }
    };
    const handleOpenOtpModal = () => {
        setShowSuccessModal(false);
        setShowOtpModal(true);
    };

    const handleResetPassword = async () => {
        const newPassword = formData.NewPassword.trim();
        const confirmPassword = formData.confrim_password.trim();

        if (!newPassword || !confirmPassword) {
            setPasswordError('Both fields are required!');
            toast.error('Both fields are required!');
            return;
        }

        if (newPassword !== confirmPassword) {
            setPasswordError('Passwords do not match!');
            toast.error('Passwords do not match!');
            return;
        }

        if (newPassword.length < 8) {
            setPasswordError('Password must be at least 8 characters long!');
            toast.error('Password must be at least 8 characters long!');
            return;
        }

        try {
            const response = await axios.post(`${baseUrl}/student/newpassword`, {
                NewPassword: newPassword,
                confrim_password: confirmPassword,
                studentId: formData.studentId,
            });

            if (response.status === 200) {
                toast.success('Password reset successfully!');
                setShowResetPasswordModal(false);
                setFormData({ NewPassword: "", confrim_password: "", studentId: "" });
                setPasswordError('');
            } else {
                toast.error('Failed to reset password. Please try again.');
            }
        } catch (error) {
            console.error("Error resetting password:", error.response ? error.response.data : error.message);
            if (error.response && error.response.status === 400) {
                toast.error(error.response.data.message || 'Bad Request. Please check your input and try again.');
            } else {
                toast.error('Failed to reset password. Please try again.');
            }
        }
    };

    const isOtpComplete = otp.every((digit) => digit !== '');

    return (
        <div style={{ paddingTop: '100px', filter: showSuccessModal || showOtpModal || showResetPasswordModal ? 'blur(8px)' : 'none' }}>
            <ToastContainer />
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
                        <div className='forget-pass'>
                            <div>
                                <img src={img1} alt='img' className='forgrtimg' />
                            </div>
                            <div className='password-worry'>
                                <h2>Forgot Your Password?</h2>
                                <p>Do Not worry! We will help you in logging in back to your Martial Arts Hub account safely! Enter Your Email address and proceed further!</p>
                                <input
                                    type='text'
                                    placeholder='Email ID'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button onClick={handleGetOtp}>Get OTP</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            <Modal show={showSuccessModal} onHide={() => { }} centered className='custom-modal'>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body className='modelboddy'>
                    <div className=" div3-warnin3">
                        <div className="div2-warning2">
                            <div className="div-warning1">
                                <BsCheck className='sucsses' />
                            </div>
                        </div>
                    </div>
                    <h2>OTP Sent!</h2>
                    <p style={{ fontSize: '15px' }}>OTP has been successfully sent to your email! Please check your email app and proceed to the new password generation step.</p>
                    <button className="btn-LogIn" onClick={handleOpenOtpModal}>Go to email app</button>
                </Modal.Body>
            </Modal>

            {/* OTP Modal */}
            <Modal show={showOtpModal} onHide={() => { }} centered className='custom-modal'>
                <Modal.Body className='modelboddy otpmodel'>
                    <div>
                        <IoMdArrowBack
                            className='IoMdArrowBack'
                            onClick={() => {
                                setShowOtpModal(false);
                                setShowSuccessModal(true);
                            }}
                        />
                        <h2> OTP Verification</h2>
                    </div>
                    <p style={{ fontSize: '15px' }}>
                        Please enter OTP we sent to your email <strong>{email}</strong>
                        <AiOutlineEdit className='autoai' />
                        <b style={{ color: 'black' }}>Edit</b>
                    </p>
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                id={`otp-input-${index}`}
                                type="text"
                                placeholder='-'
                                className="otp-input"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                            />
                        ))}
                    </div>
                    {otpError && <p style={{ color: 'red', marginTop: '10px' }}>{otpError}</p>}
                    <p className='timedivforget'>
                        Didn’t receive OTP?{' '}
                        <span
                            className={`resend ${isResendEnabled ? '' : 'disabled'}`}
                            onClick={handleResendClick}
                        >
                            Resend
                        </span>
                        {timer > 0 && (
                            <span style={{ marginLeft: '10px', fontSize: '18px', color: 'black' }}>
                                <MdTimer className='timerr' />
                                {timer}s
                            </span>
                        )}
                    </p>
                    <button
                        className="btn-LogIn LogInotp"
 onClick={handleCloseOtpModal}
                        disabled={!isOtpComplete}
                    >
                        Submit
                    </button>
                </Modal.Body>
            </Modal>

            {/* Reset Password Modal */}
            <Modal show={showResetPasswordModal} onHide={() => setShowResetPasswordModal(false)} centered className='custom-modal'>
                <Modal.Body className='modelboddy resetpassmodel'>
                    <div>
                        <IoMdArrowBack
                            className='IoMdArrowBack IoMdArrowBack12'
                            onClick={() => {
                                setShowResetPasswordModal(false);
                                setShowOtpModal(true);
                            }}
                        />
                        <img src={imgreset} alt='img' />
                    </div>
                    <h2>Create New Password</h2>
                    <p>This password will be used to protect your account and keep your information safe.</p>
                    <div className='resetpass1'>
                        <div className='password-field'>
                            <input
                                type={passwordVisible ? "text" : "password"}
                                placeholder="Create Password"
                                value={formData.NewPassword}
                                onChange={(e) => setFormData({ ...formData, NewPassword: e.target.value })}
                            />
                            <span onClick={togglePasswordVisibility}>
                                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                        <div className='password-field'>
                            <input
                                type={confirmPasswordVisible ? "text" : "password"}
                                placeholder="Re-enter Password"
                                value={formData.confrim_password}
                                onChange={(e) => setFormData({ ...formData, confrim_password: e.target.value })}
                            />
                            <span onClick={toggleConfirmPasswordVisibility}>
                                {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                    </div>
                    <button className="btn-LogIn LogInotp" onClick={handleResetPassword}>Create</button>
                </Modal.Body>
            </Modal>
            <Getintouch />
            <Footer />
        </div>
    );
}

export default Forgetpassword;