import React, { useState } from "react";
import './Instuctorprofile.css';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { TbVector } from 'react-icons/tb';
import { IoLanguageOutline } from 'react-icons/io5';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import Button from '../../../comman/Button';
import { IoMdHeart, IoMdStar } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoShareAndroid } from 'react-icons/go';
import { AiOutlineMessage } from 'react-icons/ai';
import { FaArrowUpLong } from 'react-icons/fa6';
import Secondslide from '../../../comman/Secondslide';
import Getintouch from '../../../comman/Getintouch';
import Footer from '../../../comman/Footer';
import { Modal } from 'react-bootstrap';
import { BsCheck } from "react-icons/bs";
import img25 from '../../../../image/home/25.png'

function InstructorProfile() {
    const [showMessageModal, setShowMessageModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [messageSuccessModal, setMessageSuccessModal] = useState(false);
    const [showRatingModal, setShowRatingModal] = useState(false);
    const [showFeedbackModal, setShowFeedbackModal] = useState(false); // New state for feedback modal
    const [userRating, setUserRating] = useState(0);
    const [feedback, setFeedback] = useState('');


    // State for message modal fields
    const [messageTitle, setMessageTitle] = useState('');
    const [messageContent, setMessageContent] = useState('');
    const [messageErrors, setMessageErrors] = useState({});

    const location = useLocation();
    const { instructor } = location.state || {}; // Get instructor data passed to this component
    const navigate = useNavigate();

    // const handleBack = () => {
    //     navigate('/PaymentCredit');
    // };

    const openMessageModal = () => {
        setShowMessageModal(true);
    };

    const closeMessageModal = () => {
        setShowMessageModal(false);
    };

    const openSuccessModal = () => {
        setShowSuccessModal(true);
    };

    const closeSuccessModal = () => {
        setShowSuccessModal(false);
        setShowRatingModal(true); // Open rating modal
    };

    const handleSendRequest = () => {
        // Validate message title and content
        const newErrors = {};
        if (!messageTitle) newErrors.title = "Title is required.";
        if (!messageContent) newErrors.content = "Message is required.";

        if (Object.keys(newErrors).length > 0) {
            setMessageErrors(newErrors);
        } else {
            openSuccessModal(); // Open the success modal
        }
    };

    const experiencePoints = [
        "Over 20 years of martial arts experience.",
        "Specialized in Karate, Taekwondo, and Brazilian Jiu-Jitsu.",
        "Competed in national and international tournaments.",
        "Trained under renowned martial arts masters globally.",
    ];

    const certifications = [
        ["5th Degree Black Belt in Karate", "4th Degree Black Belt in Taekwondo", "Certified Brazilian Jiu-Jitsu Instructor"],
        ["Certified Personal Trainer (CPT)", "First Aid and CPR Certified"]
    ];

    const rates = [
        [
            {
                title: "First Free Session",
                description: "Book your first introductory session for free!"
            },
            {
                title: "Group Class (up to 10 students)",
                description: "$30 per hour per student"
            }
        ],
        [
            {
                title: "Private Lesson (1-on-1)",
                description: "$75 per hour"
            },
            {
                title: "Advanced Techniques Session",
                description: "$90 per hour"
            }
        ]
    ];

    const history = [
        "Began martial arts training at age 7 in Karate",
        "Achieved first black belt at age 15",
        "Competed in and won multiple national tournaments in Karate and Taekwondo",
        "Trained in Brazil for advanced Brazilian Jiu-Jitsu techniques",
        "Opened own dojo in 2010, focusing on personalized and group martial arts training",
        "Continuously attending seminars and workshops to stay updated with the latest martial arts techniques and teaching methods"
    ];

    const [bookNowClicked, setBookNowClicked] = useState(false);
    const handleBookNow = () => {
        setBookNowClicked(true);
        navigate('/BookClassform', { state: { instructor } }); // Pass instructor data
    };

    if (!instructor) {
        return <div>No instructor data available. Please go back and select an instructor.</div>;
    }

    return (
        <div style={{ overflow: 'hidden' }}>
            <div className={`myprofilpage2 row ${showSuccessModal ? 'blur-background' : ''}`}>
                <div className="col-md-9 manicol">
                    <div>
                        <div className="head-button">
                            {['Martial Arts', 'Karate', 'Taekwondo', 'Jiu-Jitsu'].map((text, idx) => (
                                <Button key={idx} text={text} />
                            ))}
                        </div>
                        <h1 className="support">I’m here to support your fitness ambitions, cut fat, and develop strong, flexible muscles.</h1>
                        <div className="profile-instructor">
                            <h2>Instructor</h2>
                            <p>Top-rated instructor. Highly skilled, extensive experience, certified qualifications, and prompt responses. Alex is eager to schedule your first Pilates session.</p>
                        </div>
                        <div className="aboutcins">
                            <h3>About Me</h3>
                            <p>Hi, I'm Kia John! I started my martial arts journey 5 years ago and have been dedicated to improving my skills ever since.</p>
                            <p>Training in Karate, Taekwondo, and Brazilian Jiu-Jitsu has boosted my confidence, discipline, and physical fitness. I enjoy the challenges and continuous learning that come with martial arts.</p>
                        </div>
                        <div>
                            <h3>About the Class</h3>
                            <div className="head-button">
                                <button><HiOutlineStatusOnline className="classabout" /> Online</button>
                                <button><TbVector className="classabout" /> All Levels</button>
                                <button><IoLanguageOutline className="classabout" /> English</button>
                            </div>
                            <p className="hourclass">“This hour of martial arts training is a powerful gift to your body and mind, fostering inner strength and outer resilience. It’s not just about learning techniques; it’s about cultivating discipline, confidence, and a sense of empowerment.”</p>
                        </div>
                        <h3>Experience</h3>
                        <div className="expiryonce">
                            <ul>
                                {experiencePoints.map((point, index) => (
                                    <li key={index} className="experience-item">
                                        <RiVerifiedBadgeFill className="vrifyd" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <h3>Certifications</h3>
                        <div className="expiryonce">
                            {certifications.map((group, groupIndex) => (
                                <div key={groupIndex} className={groupIndex === 1 ? 'seconsirification' : ''}>
                                    {group.map((cert, index) => (
                                        <p key={index} className="cert-item">
                                            <RiVerifiedBadgeFill className="vrifyd" /> {cert}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <h3>Hourly Rates</h3>
                        <div className="expiryonce">
                            {rates.map((group, groupIndex) => (
                                <div key={groupIndex} className={groupIndex === 1 ? 'seconsirification' : ''}>
                                    {group.map((rate, index) => (
                                        <div key={index}>
                                            <span><RiVerifiedBadgeFill className="vrifyd1" /> {rate.title}</span>
                                            <p>{rate.description}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3>Training History</h3>
                            {history.map((item, index) => (
                                <p key={index}>
                                    <RiVerifiedBadgeFill className="vrifyd" /> {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="profile-sidebar">
                        <div className="sliderimg-container">
                            <img src={instructor.img} alt="img" className="sliderimg sliderimgprofile" />
                            <IoMdHeart className="heart-icon" />
                        </div>
                        <h1 className="name namrins">{instructor.name} <span>(Instructor)</span></h1>
                        <div className="rating-section">
                            <div className="star2">
                                {[...Array(5)].map((_, idx) => <IoMdStar key={idx} />)}
                            </div>
                            <p className="rating-text">4.3 <span style={{ textDecoration: 'underline' }}>(25 Reviews)</span></p>
                        </div>
                        <div>
                            <table className='istructorspro'>
                                <tr>
                                    <td>Hourly Fee</td>
                                    <td>$5</td>
                                </tr>
                                <tr>
                                    <td>Response Time </td>
                                    <td>1 Hour</td>
                                </tr>
                                <tr>
                                    <td>Number of Students</td>
                                    <td>45+</td>
                                </tr>
                            </table>
                        </div>
                        <div className='buttonsinst'>
                            <button onClick={handleBookNow}>Book Now</button>
                            <button onClick={openMessageModal}> <AiOutlineMessage className='buttonlisticon' />  Send a message</button>
                            <button> <GoShareAndroid className='buttonlisticon' />   Share Instructor’s Profile</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <section className='app appins'>
                    <h2>Download the App to Get more <span>Benefits</span></h2>
                    <p>Join us and begin your journey towards ultimate fitness, where you will feel empowered, stronger, healthier, and more confident than ever before.</p>
                    <Button className='Start-Today1 newget' text={'Get the App'} icone={<FaArrowUpLong className='arrow' />}></Button>
                </section>
            </div>

            <section className='md:py-space pb-20 lg:px-8 our '>
                <Secondslide />
            </section>
            <Getintouch />
            <Footer />
            {/* Message Modal */}
            <Modal show={showMessageModal} onHide={closeMessageModal} centered className={`moaadel ${showSuccessModal || showRatingModal || showFeedbackModal || messageSuccessModal ? 'blurred' : ''}`}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div style={{ padding: '20px' }}>
                        <div className="send-msgp">
                            <h3>Send a Message</h3>
                            <p>Please write your message here. Your message will be sent as a request to the instructor. Once they accept your request, you can chat with them. Write your query below:</p>
                        </div>
                        <div className="maspro">
                            <label>Title</label><br />
                            <input
                                type="text"
                                placeholder="Enter Your Title"
                                value={messageTitle}
                                onChange={(e) => {
                                    setMessageTitle(e.target.value);
                                    setMessageErrors(prev => ({ ...prev, title: '' })); // Clear error on change
                                }}
                            />
                            {messageErrors.title && <p className="error-message">{messageErrors.title}</p>}
                        </div>
                        <div className="maspro">
                            <label>Message</label><br />
                            <textarea
                                placeholder="Write Your message here*"
                                rows='7'
                                cols='10'
                                value={messageContent}
                                onChange={(e) => {
                                    setMessageContent(e.target.value);
                                    setMessageErrors(prev => ({ ...prev, content: '' })); // Clear error on change
                                }}
                            ></textarea>
                            {messageErrors.content && <p className="error-message">{messageErrors.content}</p>}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'end' }}>
                            <button className="Sendrequest" title="Send Request" onClick={handleSendRequest}>
                                Send Request
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Success Modal */}
            <Modal show={showSuccessModal} onHide={closeSuccessModal} centered className='custom-modal '>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body className='modelboddy'>
                    <div className="div3-warnin3">
                        <div className="div2-warning2">
                            <div className="div-warning1">
                                <BsCheck className='sucsses' />
                            </div>
                        </div>
                    </div>
                    <h2>Message Sent!</h2>
                    <p>Your message has been successfully sent to our instructor. They will contact you shortly. In the meantime, feel free to explore our courses! Have a wonderful day!</p>
                    <button className="btn-LogIn" title="Close" onClick={closeSuccessModal}>Okay!</button>
                </Modal.Body>
            </Modal>
            {/* ratting model */}
            <Modal show={showRatingModal} onHide={() => setShowRatingModal(false)} centered className='custom-modal'>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body className='modelboddy'>
                    <img src={img25} alt="image" className="imgrate" />
                    <h2>Rate Our Platform!</h2>
                    <p>Thank you for visiting our platform! Your feedback helps us improve! Rate your experience to let us know what we’re doing right and where we can grow.</p>
                    <div className="rating-stars">
                        {[...Array(5)].map((_, index) => (
                            <IoMdStar
                                key={index}
                                className="starrate"
                                style={{
                                    color: index < userRating ? '#ECB21E' : 'gray', // Change color based on rating
                                }}
                                onClick={() => setUserRating(index + 1)} // Set rating on click
                            />
                        ))}
                    </div>
                    <div>
                        <button className="btn-LogIn ratingbutnsubmit" title="Submit Rating" onClick={() => {
                            console.log("User  rating submitted:", userRating);
                            setShowRatingModal(false);
                            setShowFeedbackModal(true); // Open feedback modal after rating
                        }}>
                            Submit
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Feedback Modal */}
            <Modal show={showFeedbackModal} onHide={() => setShowFeedbackModal(false)} centered className='custom-modal'>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body className='modelboddy'>
                    <img src={img25} alt="image" className="imgrate" />
                    <h2>Rate Our Platform!</h2>
                    <p>Thank you for visiting our platform! Your feedback helps us improve! Rate your experience to let us know what we're doing right and where we can grow.</p>
                    <textarea
                        className="ratreviefeed"
                        placeholder="Write Your message here*"
                        rows='4'
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    />
                    <div>
                        <button className="btn-LogIn ratingbutnsubmit" title="Submit Feedback" onClick={() => {
                            console.log("User feedback submitted:", feedback);
                            setFeedback(''); // Clear feedback
                            setShowFeedbackModal(false); // Close feedback modal
                            setMessageSuccessModal(true); // Show success message modal
                        }}>
                            Submit
                        </button>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Message Success Modal */}
            <Modal show={messageSuccessModal} onHide={() => setMessageSuccessModal(false)} centered className='custom-modal'>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body className='modelboddy'>
                    <div className="div3-warnin3">
                        <div className="div2-warning2">
                            <div className="div-warning1">
                                <BsCheck className='sucsses' />
                            </div>
                        </div>
                    </div>
                    <h2>Response Received!</h2>
                    <p>We greatly appreciate your time and feedback! Thank you for helping us improve, and we look forward to providing you with an even better experience in the future!</p>
                    <div>
                        <button
                            className="btn-LogIn ratingbutnsubmit"
                            onClick={() => {
                                setMessageSuccessModal(false);
                                setShowMessageModal(false)
                            }}
                        >
                            Okay!
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default InstructorProfile;