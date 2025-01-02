import React, { useState } from 'react'
import { AiOutlineGoogle } from 'react-icons/ai'
import { FaArrowLeft, FaQuoteLeft } from 'react-icons/fa';
import Button from '../../../comman/Button';
import loginimg from '../../../../image/home/20.png';
import axios from "axios";
import eye from '../../../../image/home/eye.png';
import eyeslash from '../../../../image/home/eyeslash.png';
import './Becomeinlogin.css'
import Footer from '../../../comman/Footer';
import { useNavigate } from 'react-router-dom';


function Becomeinlogin() {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
  const [password, setPassword] = useState('');

  const validateForm1 = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is not valid';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters long';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validateForm1()) {
      try {
        const response = await axios.post("http://localhost:3000/Signup", {
          id: email,
          password: password,
        });

      } catch (error) {
        if (error.response) {
          setErrors({ login: error.response.data.message || "Login failed. Please try again." });
        } else {
          setErrors({ login: "An unexpected error occurred." });
        }
      }
    }
  };
  const Navigat = useNavigate("")
  const handleclick = () => {
    Navigat("/Instuctorsignup");
  };

  const Navigat1 = useNavigate("")
  const home = () => {
      Navigat1("/");
  };
  return (
    <div>
      <div className='main-padding2'>
        <div className='flex-item'>
          <div className='formlogin'>
            <FaArrowLeft className='iconearrow' onClick={home} />
            <h2>Welcome Instructor!</h2>
            <p>Please fill below details to join<span>martial arts hub</span> as a student!</p>
            <form id='form1' name='form1' onSubmit={handleLogin}>
              <div className='Welcome'>
                <div className='email-login'>
                  <label>Email</label>
                  <div className='email-input'>
                    <input
                      type='email'
                      placeholder='Email'
                      id='email2'
                      name='email1'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className='error-message'>{errors.email}</p>}
                  </div>
                </div>
                <div className='email-login'>
                  <label>Password</label>
                  <div className='email-input'>
                    <input
                      className='rounded-pill'
                      placeholder='password'
                      type={isPasswordVisible ? 'text' : 'password'}
                      id='pass2'
                      name='pass1'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <img
                      src={isPasswordVisible ? eye : eyeslash}
                      alt="toggle visibility"
                      onClick={togglePasswordVisibility}
                      className="eye"
                      id="togglePassword"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
                {errors.password && <p className='error-message'>{errors.password}</p>}
              </div>
              <div className='tobtn'>
                <Button text={"Log In to your account"} className="loginaccount" />
                <button className='loginaccount2'> <AiOutlineGoogle className='iconeg' />Create My Profile & Next</button>
              </div ><p className='signop'>Don’t have an account? <span className='link' onClick={handleclick}>Sign Up</span></p>
            </form>
          </div>

          <div className='img-div2'>
            <img src={loginimg} alt='img' className='karate' />
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
      <Footer/>
    </div>
  )
}

export default Becomeinlogin