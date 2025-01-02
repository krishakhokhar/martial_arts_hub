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
import { toast, ToastContainer } from 'react-toastify'; // Importing toast
import 'react-toastify/dist/ReactToastify.css'; // Importing CSS for toast
import Getintouch from '../../../../comman/Getintouch.js'
import Footer from '../../../../comman/Footer.js'

function Forgetpassword() {
    const [email, setEmail] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(60);
    const [isResendEnabled, setIsResendEnabled] = useState(false);
    const [otpError, setOtpError] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [passwordError, setPasswordError] = useState('');

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

    const handleResendClick = () => {
        if (isResendEnabled) {
            setTimer(60);
            setIsResendEnabled(false);
            toast.success('OTP resent successfully!'); // Toast notification for OTP resend
        }
    };

    const handleGetOtp = () => {
        if (!email) {
            setOtpError('Please enter your email address.');
            toast.error('Please enter your email address.'); // Toast notification for error
            return;
        }
        setShowSuccessModal(true);
    };

    const handleOpenOtpModal = () => {
        setShowSuccessModal(false);
        setShowOtpModal(true);
    };

    const handleCloseOtpModal = () => {
        const enteredOtp = otp.join('');
        if (enteredOtp === '1234' && otp.every(digit => digit !== '')) {
            setShowOtpModal(false);
            setShowResetPasswordModal(true);
            setOtpError('');
        } else {
            setOtpError(otp.includes('') ? 'Please fill all OTP fields.' : 'Invalid OTP. Please try again.');
            toast.error(otp.includes('') ? 'Please fill all OTP fields.' : 'Invalid OTP. Please try again.'); // Toast notification for OTP error
        }
    };

    const handleResetPassword = () => {
        // Reset password validation
        if (!newPassword || !confirmPassword) {
            setPasswordError('Both fields are required!');
            toast.error('Both fields are required!'); // Toast notification for empty fields
            return;
        }

        if (newPassword !== confirmPassword) {
            setPasswordError('Passwords do not match!');
            toast.error('Passwords do not match!'); // Toast notification for password mismatch
            return;
        }

        // If passwords match and are filled, reset the password
        toast.success('Password reset successfully!'); // Toast notification for success
        setShowResetPasswordModal(false);
        setNewPassword('');
        setConfirmPassword('');
        setPasswordError('');
    };

    const isOtpComplete = otp.every((digit) => digit !== '');

    return (
        <div style={{ paddingTop: '100px', filter: showSuccessModal || showOtpModal || showResetPasswordModal ? 'blur(8px)' : 'none' }}>
            <ToastContainer /> {/* Toast container for notifications */}
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
                    <div className="div3-warnin3">
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

            {/* forget Password Modal */}
            <Modal show={showResetPasswordModal} onHide={() => setShowResetPasswordModal(false)} centered className='custom-modal'>
                <Modal.Body className='modelboddy resetpassmodel'>
                    <div>
                        <IoMdArrowBack
                            className='IoMdArrowBack'
                            onClick={() => {
                                setShowResetPasswordModal(false);
                                setShowOtpModal(true);
                            }}
                            style={{ marginTop: '-50%' }}
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
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <span onClick={togglePasswordVisibility}>
                                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                        <div className='password-field'>
                            <input
                                type={confirmPasswordVisible ? "text" : "password"}
                                placeholder="Re-enter Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
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
            <Getintouch/>
            <Footer/>
        </div>
    );
}

export default Forgetpassword;