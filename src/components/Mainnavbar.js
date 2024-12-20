
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import logo from '../image/logo.png';
import Offcanvas from "react-bootstrap/Offcanvas";
import './Mainnavbar.css';
import loginimg from '../image/home/19.png';
import signupimg from '../image/home/20.png';
import { FaArrowLeft, FaQuoteLeft } from 'react-icons/fa';
import Button from './comman/Button';
import { AiOutlineGoogle } from 'react-icons/ai';
import eye from '../image/home/eye.png';
import eyeslash from '../image/home/eyeslash.png';
import axios from "axios";
import { BsCheckCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { TiWarning } from 'react-icons/ti';
import baseUrl from '../baseUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const dropdownitem = [
  { name: "Dashboard", url: "/Dashbord" },
  { name: "My Profile", url: "/Studentprofile" },
  { name: "Messages", url: "/MyMessages" },
];

function Mainnavbar({ text }) {

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showLoginSuccessModal, setShowLoginSuccessModal] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const location = useLocation();

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);
  const closeLoginModal = () => setShowLoginModal(false);

  useEffect(() => {
    const mainContent = document.getElementById("main-content");
    const loginModal = document.getElementById("login-modal");

    if (showSuccessModal || showLoginSuccessModal) {
      mainContent.classList.add("blur-background");
      if (loginModal) loginModal.classList.add("blur-background");
    } else {
      mainContent.classList.remove("blur-background");
      if (loginModal) loginModal.classList.remove("blur-background");
    }
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
    setShowSignUpModal(false);
  };

  const openSignUpModal = () => {
    setShowSignUpModal(true);
    setShowLoginModal(false);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required!';
    }
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
    if (!formData.confirm_password) {
      newErrors.confirm_password = 'Confirm password is required!';
    } else if (formData.confirm_password !== formData.password) {
      newErrors.confirm_password = 'Passwords do not match!';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const postData = async (event) => {
    try {
      event.preventDefault();
  
      if (validateForm()) {
        setIsSignedUp(true); // Keep the sign-up modal open
        localStorage.setItem("userEmail", formData.email);
        localStorage.setItem("userName", formData.name);
  
        setUserEmail(formData.email);
        setUserName(formData.name);
  
        // API request
        const response = await axios.post(`${baseUrl}/student/signup`, {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          confrim_password: formData.confirm_password,
        });
  
        if (response.status === 201) {
          // Signup success
          setFormData({ name: "", email: "", password: "", confirm_password: "" });
          setErrors({});
          setShowSuccessModal(true); // Show success modal
          toast.success("Signup successful!"); // Success message
        }
      }
    } catch (error) {
      console.error("Error details:", error);  // Log the full error object
  
      // Check if it's an axios error with a response
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
  };
  

  // Close success modal and open login modal
  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    openLoginModal(); // Open login modal when success modal is closed
  };
  
  const validateForm1 = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is not valid';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters long';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  useEffect(() => {
    const savedIsSignedUp = localStorage.getItem('isSignedUp') === 'true'; 
    const savedUserName = localStorage.getItem('userName') || ''; 

    setIsSignedUp(savedIsSignedUp); // Sync state
    setUserName(savedUserName);
  }, []);

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
      setIsSignedUp(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validateForm1()) {
        try {
            const response = await axios.post(`${baseUrl}/student/login`, {
                email: email,
                password: password
            });
            if (response.status === 200) {
              setShowLoginSuccessModal(true); // Show success modal
              const userData = response.data.data; // Assuming the user data is in response.data.data
              setUserEmail(userData.email);
              setUserName(userData.name); // Set user's name from response
              localStorage.setItem("userEmail", userData.email); // Store email in local storage
              localStorage.setItem("userName", userData.name); // Store name in local storage
              setIsSignedUp(true); //
            }
        } catch (error) {
            if (error.response) {
                // Handle error messages
                if (error.response.data.message) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error("Login failed. Please try again.");
                }
            } else {
                toast.error("An unexpected error occurred.");
            }
        }
    }
};
 
  // Close both modals
  const closeBothModals = () => {
    setShowLoginModal(false);
    setShowLoginSuccessModal(false);
  };

 
  const handleLogout = () => {
    setShowLogoutConfirm(true);
    setIsSignedUp(false);
    localStorage.removeItem('isSignedUp'); // Remove from localStorage
    localStorage.removeItem('userName');
    navigate("/");
  };

  const Navigat = useNavigate("");
  const handleclick = () => {
    Navigat("/Becomeinlogin");
    if (showOffcanvas) {
      handleClose();
    }
  };
  const handlenavitemclick = () => {
    if (showOffcanvas) {
      handleClose();
    }
  };
  return (
    <div id="main-content">
      <header className={`top-0 left-0 z-[9] fixed-top`}>
        <div className="container">
          <Navbar expand="lg" className="mx-auto flex items-center justify-between p-6 lg:px-8">
            <Navbar.Brand href="#home" className="flex flex-1">
              <Link className='logo'>martial arts hub.</Link>
            </Navbar.Brand>

            <div className="flex lg:hidden toggle destop-toggle">
              <button className="-m-2.5 inline-flex items-center rounded-md p-2.5 text-gray-700 togglebtn1" onClick={handleShow}>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="other-screen-button flex items-center become3">
                {!isSignedUp && (
                  <>
                    <button className="badge rounded-pill Login1 text-sm rounded-full py-[5px] px-[13px]" onClick={openLoginModal}>
                      Login
                    </button>
                    <button className="badge rounded-pill Become" onClick={handleclick}>Become an Instructor</button>
                  </>
                )}
                {isSignedUp && (
                  <Dropdown align="end" className='dropdown'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="profile-button">
                      {userEmail[0].toUpperCase()}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {dropdownitem.map((item, index) => (
                        <Dropdown.Item key={index} href={item.url} className={`nav-link ${location.pathname === item.url ? 'active' : ''}`}>
                          {item.name}
                        </Dropdown.Item>
                      ))}
                      <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              </div>
            </div>

            <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <Navbar.Brand as={Link} to="#home" className="flex flex-1">
                    <img src={logo} alt="Logo" className="logo font-extrabold text-lg leading-[21.6px] tracking-[-1px]" />
                  </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {text.map((item, index) => (
                  <Link
                    key={index}
                    to={item.url}
                    onClick={handlenavitemclick}
                    className={`nav-link ${location.pathname === item.url ? 'active' : ''}`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="line-hr"></div>
                {!isSignedUp && (
                  <>
                    <button className="badge rounded-pill Login1 text-sm border rounded-full py-[5px] px-[13px]" onClick={openLoginModal}>
                      Login
                    </button>
                    <button className="badge rounded-pill Become" onClick={handleclick}>Become an Instructor</button>
                  </>
                )}
              </Offcanvas.Body>
            </Offcanvas>

            <div style={{ display: 'flex' }}>
              <div className="destop-header">
                <Nav className="navbaratag ml-auto flex flex-col sm:flex-row items-center w-full lg:w-auto">
                  {text.map((item, index) => (
                    <Link
                      key={index}
                      to={item.url}
                      onClick={handlenavitemclick}
                      className={`nav-link ${location.pathname === item.url ? 'active' : ''}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </Nav>
              </div>
              <div className="other-screen-button flex flex-col sm:flex-row ">
                {!isSignedUp && (
                  <>
                    <button className="badge rounded-pill Become2" onClick={handleclick}>Become an Instructor</button>
                    <button className="badge rounded-pill Login text-sm border border-black rounded-full py-[5px] px-[13px] login-2" onClick={openLoginModal}>
                      Login
                    </button>
                  </>
                )}
                {isSignedUp ? (
                  <Dropdown align="end" className='drop'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="profile-button">
                      {userEmail[0].toUpperCase()}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {dropdownitem.map((item, index) => (
                        <Dropdown.Item key={index} href={item.url} className={`nav-link ${location.pathname === item.url ? 'active' : ''}`}>
                          {item.name}
                        </Dropdown.Item>
                      ))}
                      <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : null}
              </div>
            </div>
          </Navbar>
        </div>

        {/* Login Modal */}
        <Modal show={showLoginModal} onHide={closeLoginModal} centered className='moaadel' id="login-modal">
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className='main-padding'>
              <div className='flex-item'>
                <div className='img-div'>
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
                <div className='formlogin'>
                  <FaArrowLeft className='iconearrow' />
                  <h2>Welcome Back! Ready to Learn?</h2>
                  <p>Please login to continue to your <span>martial arts hub</span> account!</p>
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
                      <button className='loginaccount2'> <AiOutlineGoogle className='iconeg' />Log In with Google</button>
                    </div>
                    <p className='signop'>Don’t have an account? <span className='link' onClick={openSignUpModal}>Sign Up</span></p>
                  </form>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        {/* Sign Up Modal */}
        <Modal show={showSignUpModal} onHide={openSignUpModal} centered className='moaadel' id="login-modal">
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className='main-padding'>
              <div className='flex-item'>
                <div className='img-div'>
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

                <div className='formlogin2'>
                  <FaArrowLeft className='iconearrow' />
                  <h2>Create an Account!</h2>
                  <p>Please fill below details to join <span>martial arts hub</span> as a student!</p>
                  <form name='form2' id='form' onSubmit={postData}>
                    <div className='Welcome'>
                      <div className='email-login'>
                        <label>Name</label>
                        <div className='email-input'>
                          <input type='text' placeholder='Enter your name' name='name' id='username' value={formData.name} onChange={handleChange} />
                          {errors.name && <div className="error-message">{errors.name}</div>}
                        </div>
                      </div>
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
                            name='confirm_password'
                            id='confirm_password'
                            value={formData.confirm_password}
                            onChange={handleChange}
                          />
                          <img
                            src={isPasswordVisible ? eye : eyeslash}
                            alt="toggle visibility"
                            onClick={togglePasswordVisibility}
                            className="eye"
                            style={{ cursor: "pointer" }}
                          />
                          {errors.confirm_password && <div className="error-message">{errors.confirm_password}</div>}
                        </div>
                      </div>
                    </div>
                    <div className='tobtn2'>
                      <button className="loginaccount" type='submit'>Create your account</button>
                      <button className='loginaccount2'><AiOutlineGoogle className='iconeg' /> Sign Up with Google</button>
                    </div>
                    <p className='signop'>Already have an account? <span className='link' onClick={openLoginModal}>Login</span></p>
                  </form>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        {/* Success Modal (Only for Sign Up) */}
        <Modal show={showSuccessModal} onHide={closeSuccessModal} centered className='custom-modal'>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className='modelboddy'>
            <div className="div3-warnin3">
              <div className="div2-warning2">
                <div className="div-warning1">
                  <BsCheckCircleFill className='sucsses' />
                </div>
              </div>
            </div>
            <h2>Success!</h2>
            <p>Congratulations! Your martial arts hub student account is created and activated successfully. Start exploring our platform, talk with instructors and join your favourite classes!</p>
            <button className="btn-LogIn" title="Close" onClick={closeSuccessModal}>Okay, Thanks!</button>
          </Modal.Body>
        </Modal>

        <Modal show={showLoginSuccessModal} onHide={closeBothModals} centered className='custom-modal'>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className='modelboddy'>
            <div className="div3-warnin3">
              <div className="div2-warning2">
                <div className="div-warning1">
                  <BsCheckCircleFill className='sucsses' />
                </div>
              </div>
            </div>
            <h2>Success!</h2>
            <p>You have successfully logged in to your martial arts hub student account. Thank you for joining us again. Explore new courses, talk with instructors, and join your favorite classes!</p>
            <button className="btn-LogIn" title="Close" onClick={closeBothModals}>Okay, Thanks!</button>
          </Modal.Body>
        </Modal>
        <Modal
          show={showLogoutConfirm}
          onHide={() => setShowLogoutConfirm(false)}
          centered
          dialogClassName="custom-modal1"
        >
          <Modal.Body className="text-center areyou">
            <div className="div3-warning">
              <div className="div2-warning">
                <div className="div-warning">
                  <TiWarning className="warning" />
                </div>
              </div>
            </div>
            <h4>Are you sure?</h4>
            <p>
              Are you sure you want to log out from your <b>martial arts hub</b> account?
            </p>
            <div className="mt-4 bttons">
              <button
                type="button"
                onClick={() => {
                  setIsSignedUp(false);
                  localStorage.removeItem("userEmail");
                  setShowLogoutConfirm(false); // Close modal after logout
                }}
                className="logout"
              >
                Logout
              </button>
              <button
                type="button"
                onClick={() => setShowLogoutConfirm(false)} // Close modal without action
                className="goback"
              >
                Go Back
              </button>
            </div>
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
      </header>
    </div>
  );
};

export default Mainnavbar;