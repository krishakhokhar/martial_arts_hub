import React, { useState } from 'react'
import './Instuctorsignup.css';
import signupimg from '../../../../image/home/20.png';
import { FaArrowLeft, FaQuoteLeft } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import axios from "axios";
import eye from '../../../../image/home/eye.png';
import eyeslash from '../../../../image/home/eyeslash.png';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../comman/Footer'
import Modal from 'react-bootstrap/Modal';
import { BsCheckCircleFill } from 'react-icons/bs';



function Instuctorsignup() {
    const Navigat = useNavigate("")
    const home = () => {
        Navigat("/");
    };

    const Navigat1 = useNavigate("")
    const login = () => {
        Navigat1("/Becomeinlogin")
    };
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [userEmail, setUserEmail] = useState(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const closeSuccessModal = () => {
        setShowSuccessModal(false);
        navigate('/MyProfileform')
    }
    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required!';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid!';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required!';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters!';
        }
        if (!formData.confirmpass) {
            newErrors.confirmpass = 'Confirm password is required!';
        } else if (formData.confirmpass !== formData.password) {
            newErrors.confirmpass = 'Passwords do not match!';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const postData = (event) => {
        event.preventDefault();
        if (validateForm()) {
            setShowSuccessModal(true);
            localStorage.setItem('userEmail', formData.email);
            //   localStorage.setItem('userName', formData.name);

            setUserEmail(formData.email);
            //   setUserName(formData.name);


            axios.post("http://localhost:3000/insructorsignup", {
                email: formData.email,
                password: formData.password,
                confirmpass: formData.confirmpass,
            })
                .then(() => {
                    setFormData({ name: '', email: '', password: '', confirmpass: '' });
                    setErrors({});
                })
                .catch((error) => console.error("Error:", error));
        }
    };
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpass: ''
    });

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
                        <FaArrowLeft className='iconearrow' onClick={home} />
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
                                    <label>Create Password</label>
                                    <div className='email-input'>
                                        <input
                                            type={isPasswordVisible ? "text" : "password"}
                                            placeholder='Create password'
                                            name='password'
                                            id='pass'
                                            maxLength='6'
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
                                            name='confirmpass'
                                            id='confirmpass'
                                            maxLength='6'
                                            value={formData.confirmpass}
                                            onChange={handleChange}
                                        />
                                        <img
                                            src={isPasswordVisible ? eye : eyeslash}
                                            alt="toggle visibility"
                                            onClick={togglePasswordVisibility}
                                            className="eye"
                                            style={{ cursor: "pointer" }}
                                        />
                                        {errors.confirmpass && <div className="error-message">{errors.confirmpass}</div>}
                                    </div>
                                </div>
                            </div>
                            <div className='tobtn2'>
                                <button className="loginaccount" type='submit'>Create My Profile & Next</button>
                                <button className='loginaccount2'><AiOutlineGoogle className='iconeg' /> Sign Up with Google</button>
                            </div>
                            <p className='signop'>Already have an account? <span className='link' onClick={login}>Login</span></p>
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
                    <div className="div3-warning3">
                        <div className="div2-warning2">
                            <div className="div-warning1">
                                <BsCheckCircleFill className='sucsses' />
                            </div>
                        </div>
                    </div>
                    <h2>Success!</h2>
                    <p>You have successfully logged in to your martial arts hub student account. Thank you for joining us again. Explore new courses, talk with instructors, and join your favorite classes!</p>
                    <button className="btn-LogIn" title="Close" onClick={closeSuccessModal}>Okay, Thanks!</button>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Instuctorsignup