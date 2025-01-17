import React, { useState } from 'react';
import './Instuctorsignup.css';
import signupimg from '../../../../image/home/20.png';
import { FaArrowLeft, FaQuoteLeft } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import axios from "axios";
import eye from '../../../../image/home/eye.png';
import eyeslash from '../../../../image/home/eyeslash.png';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../comman/Footer';
import Modal from 'react-bootstrap/Modal';
import { BsCheck } from 'react-icons/bs';
import baseUrl from '../../../../baseUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Instuctorsignup() {
    const navigate = useNavigate();
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [userEmail, setUserEmail] = useState(null);
    const [errors, setErrors] = useState({});
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const closeSuccessModal = () => {
        setShowSuccessModal(false);
        navigate('/MyProfileform');
    };

    const validateForm = () => {
        const newErrors = {};

        // Validate email
        if (!formData.email) {
            newErrors.email = 'Email is required!';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format!';
        }

        // Validate password
        if (!formData.password) {
            newErrors.password = 'Password is required!';
        }

        // Validate confirm password
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Confirm password is required!';
        } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = 'Passwords do not match!';
        }

        // Update errors state
        setErrors(newErrors);

        // Return true if no errors
        return Object.keys(newErrors).length === 0;
    };
    const postData = async (event) => {
        try {
            event.preventDefault();
            if (validateForm()) {
                setIsSignedUp(true); // Keep the sign-up modal open
                localStorage.setItem("userEmail", formData.email);

                setUserEmail(formData.email);

                // API request
                const response = await axios.post(`${baseUrl}/instructor/signup`, {
                    email: formData.email,
                    password: formData.password,
                    confirmPassword: formData.confirmPassword,
                });

                if (response.status === 201) {
                    // Signup success
                    setFormData({ email: "", password: "", confirmPassword: "" });
                    setErrors({});
                    setShowSuccessModal(true); // Show success modal
                    toast.success("Signup successful!"); // Success message
                }
            }
        } catch (error) {
            console.error("Error details:", error);
            if (error.response) {
                if (error.response.status === 400) {
                    setErrors({ email: "Email already in use. Please try another email." });
                    toast.error("Email already in use.");
                } else {
                    // Handle other status codes and show error messages
                    toast.error(`Error: ${error.response.data.message || 'Something went wrong!'}`);
                }
            } else if (error.request) {
                // No response received from the server
                console.error("No response received:", error.request);
                toast.error("Server not responding. Please try again later.");
            } else {
                // General unexpected error
                console.error("Unexpected error:", error.message);
                toast.error("An unexpected error occurred. Please try again.");
            }
        }
    }

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <div>
            <div className='main-padding2'>
                <div className='flex-item'>
                    <div className='formlogin2'>
                        <FaArrowLeft className='iconearrow' onClick={() => navigate("/")} />
                        <h2>Welcome Instructor!</h2>
                        <p>Please fill below details to join<span>martial arts hub</span> as a student!</p>
                        <form name='form2' id='form' onSubmit={postData}>
                            <div className='Welcome'>
                                <div className='email-login'>
                                    <label>Email</label>
                                    <div className='email-input'>
                                        <input type='email' placeholder='Enter your email' id='email' name='email' value={formData.email} onChange={handleChange} />
                                        {errors.email && <div className="error-message">{errors.email}</div>}
                                    </div>
                                </div>
                                <div className='email-login'>
                                    <label>Create Password </label>
                                    <div className='email-input'>
                                        <input
                                            type={isPasswordVisible ? "text" : "password"}
                                            placeholder='Create password'
                                            name='password'
                                            id='pass'
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                        <img
                                            src={isPasswordVisible ? eye : eyeslash}
                                            alt="toggle visibility"
                                            onClick={togglePasswordVisibility}
                                            className="eye"
                                            style={{ cursor: "pointer" }}
                                        />
                                        {errors.password && <div className="error-message">{errors.password}</div>}
                                    </div>
                                </div>
                                <div className='email-login'>
                                    <label>Re-enter Password</label>
                                    <div className='email-input'>
                                        <input
                                            type={isPasswordVisible ? "text" : "password"}
                                            placeholder='Re-enter password'
                                            name='confirmPassword'
                                            id='confirmpass'
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                        />
                                        <img
                                            src={isPasswordVisible ? eye : eyeslash}
                                            alt="toggle visibility"
                                            onClick={togglePasswordVisibility}
                                            className="eye"
                                            style={{ cursor: "pointer" }}
                                        />
                                        {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
                                    </div>
                                </div>
                            </div>
                            <div className='tobtn2'>
                                <button className="loginaccount" type='submit'>Create My Profile & Next</button>
                                <button className='loginaccount2'><AiOutlineGoogle className='iconeg' /> Sign Up with Google</button>
                            </div>
                            <p className='signop'>Already have an account? <span className='link'>Login</span></p>
                        </form>
                    </div>

                    <div className='img-div3'>
                        <img src={signupimg} alt='img' className='karate2' />
                        <div className='writting-div'>
                            <FaQuoteLeft className='qution' />
                            <p>Joining this martial arts community was the best decision I ever made. Highly recommended!</p>
                            <div className='boldtag'>
                                <h2>John Doe</h2>
                                <p>Student</p>
                            </div>
                        </div>
                        <div className='login-shape'>
                            <h2>martial arts hub.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            {/* Success Modal (Only for Sign Up) */}
            <Modal show={showSuccessModal} onHide={closeSuccessModal} centered className='custom-modal'>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body className='modelboddy'>
                    <div className="div3-warnin3">
                        <div className="div2-warning2">
                            <div className="div-warning1">
                                <BsCheck className='sucsses' />
                            </div>
                        </div>
                    </div>
                    <h2>Success!</h2>
                    <p>Congratulations! Your martial arts hub student account is created and activated successfully. Start exploring our platform, talk with instructors and join your favourite classes!</p>
                    <button className="btn-LogIn" title="Close" onClick={closeSuccessModal}>Okay, Thanks!</button>
                </Modal.Body>
            </Modal>
            {/* Toast Container for notifications */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                progressClassName="toast-progress"
            />
        </div>
    );
}

export default Instuctorsignup